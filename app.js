const STORAGE_KEY = "champions-manager-data-v02";
let data = loadData();
let deferredInstallPrompt = null;

const $ = (id) => document.getElementById(id);
const clone = (obj) => JSON.parse(JSON.stringify(obj));

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : clone(DEFAULT_DATA);
  } catch {
    return clone(DEFAULT_DATA);
  }
}
function saveData() {
  data.updatedAt = new Date().toISOString().slice(0, 10);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  renderAll();
}
function itemQty(name) {
  return (data.items.find(i => i.name.toLowerCase() === String(name).toLowerCase()) || {}).qty || 0;
}
function hasItem(name) { return !name || itemQty(name) > 0; }
function ownedPokemon() { return data.pokemon.filter(p => p.owned); }
function candidatePool(mode) {
  const base = ownedPokemon().map(p => ({...p, isHire:false, hireCost:0}));
  if (mode === "owned") return base;
  const hires = data.hires.map(h => ({
    name:h.name, owned:false, types:h.types || [], role:h.role || "jolly", tags:h.tags || [], meta:h.meta || 70,
    isHire:true, hireCost:Number(h.cost || 0), note:h.note || "",
    current:{}, ideal:{ item:"", ability:"", nature:"Da definire", moves:[], stats:{} },
    upgrades:[{text:`Ingaggiare ${h.name} se il costo reale è sostenibile`, cost:Number(h.cost || 0), impact:Math.round((h.meta || 70)/3)}]
  }));
  return base.concat(hires);
}

function scoreMon(mon, style, mode) {
  let s = Number(mon.meta || 50);
  const tags = mon.tags || [];
  const role = mon.role || "";
  if (mon.isHire) {
    if (mon.hireCost <= 0) s -= 8; // costo non confermato
    else s -= Math.min(18, mon.hireCost / 650);
  }
  if (mon.ideal?.item && hasItem(mon.ideal.item)) s += 5;
  if (data.currentTeam.includes(mon.name)) s += 3;
  if (style === "offense" && (role.includes("attaccante") || tags.includes("setup"))) s += 8;
  if (style === "bulky" && (role.includes("bulky") || role.includes("supporto") || tags.includes("tank"))) s += 8;
  if (style === "trickroom" && tags.includes("trickroom")) s += 13;
  if (style === "balanced" && role.includes("supporto")) s += 3;
  if (mode === "save" && mon.isHire) s -= 12;
  if (mode === "push" && mon.meta >= 88) s += 10;
  return s;
}
function comboScore(team, style, mode) {
  let score = team.reduce((a,m)=>a + scoreMon(m, style, mode), 0);
  const roles = new Set(team.map(m => (m.role || "").split(" ")[0]));
  const types = new Set(team.flatMap(m => m.types || []));
  score += Math.min(30, roles.size * 5);
  score += Math.min(25, types.size * 2);
  const supportCount = team.filter(m => (m.role || "").includes("supporto") || (m.role || "").includes("speed control")).length;
  const phys = team.filter(m => (m.role || "").includes("fisico")).length;
  const spec = team.filter(m => (m.role || "").includes("speciale")).length;
  const bulky = team.filter(m => (m.role || "").includes("bulky") || (m.tags||[]).includes("tank")).length;
  if (supportCount >= 1) score += 10;
  if (phys >= 1 && spec >= 1) score += 12;
  if (bulky >= 1) score += 6;
  const megaCount = team.filter(m => (m.tags||[]).includes("mega") || /ite$|ite\s/.test(m.ideal?.item || m.current?.item || "")).length;
  if (megaCount > 2) score -= (megaCount - 2) * 10;
  if (style === "trickroom") {
    const tr = team.filter(m => (m.tags||[]).includes("trickroom")).length;
    score += tr * 8;
    if (tr < 2) score -= 18;
  }
  const hireCost = team.reduce((a,m)=>a + Number(m.hireCost || 0), 0);
  if (hireCost > Number(data.pv || 0)) score -= 9999;
  return score;
}
function combinations(arr, k, start=0, prefix=[], out=[]) {
  if (prefix.length === k) { out.push(prefix); return out; }
  for (let i=start; i<=arr.length-(k-prefix.length); i++) combinations(arr,k,i+1,prefix.concat(arr[i]),out);
  return out;
}
function optimize(mode="theory", style="balanced") {
  const pool = candidatePool(mode);
  const filtered = pool.filter(p => p.owned || mode !== "owned");
  const topPool = filtered.sort((a,b)=>scoreMon(b,style,mode)-scoreMon(a,style,mode)).slice(0, 28);
  let best = null;
  for (const team of combinations(topPool, 6)) {
    const score = comboScore(team, style, mode);
    if (!best || score > best.score) best = {team, score};
  }
  return best || {team:[], score:0};
}
function makePlan(team, mode) {
  const pv = Number(data.pv || 0);
  const actions = [];
  let spent = 0;
  for (const mon of team) {
    if (mon.isHire && mon.hireCost > 0) actions.push({who:mon.name, text:`Ingaggia ${mon.name}`, cost:mon.hireCost, impact:Math.round(mon.meta/2)});
    if (mon.ideal?.item && !hasItem(mon.ideal.item)) actions.push({who:mon.name, text:`Recupera/compra ${mon.ideal.item}`, cost:0, impact:12});
    (mon.upgrades || []).forEach(u => actions.push({who:mon.name, text:u.text, cost:Number(u.cost||0), impact:Number(u.impact||0)}));
  }
  actions.sort((a,b)=>((b.impact+1)/(b.cost+250))-((a.impact+1)/(a.cost+250)));
  return actions.map(a => {
    const affordable = spent + a.cost <= pv;
    if (affordable) spent += a.cost;
    return {...a, affordable, runningSpent: spent};
  }).slice(0, 10);
}
function nextActionText() {
  const best = optimize("theory", "balanced");
  const plan = makePlan(best.team, "theory");
  const first = plan.find(p => p.affordable) || plan[0];
  if (!first) return "Aggiungi dati o premi ricalcola.";
  return `<strong>${first.who}</strong>: ${first.text}<br><small>Costo stimato: ${first.cost} PV · Priorità ${first.impact}/40</small>`;
}

function renderAll() {
  $("pvInput").value = data.pv;
  $("boxCount").textContent = `${ownedPokemon().length}/30`;
  $("itemCount").textContent = data.items.reduce((a,i)=>a+Number(i.qty||0),0);
  $("nextAction").innerHTML = nextActionText();
  renderQuickTeam(); renderRoster(); renderItems(); renderHires(); renderJson();
}
function renderQuickTeam() {
  const best = optimize("theory", "balanced").team;
  $("quickTeam").innerHTML = best.map(m => `<span>${m.name}${m.isHire ? "*" : ""}</span>`).join("");
}
function renderTeamResult(best, mode) {
  const hireCost = best.team.reduce((a,m)=>a+Number(m.hireCost||0),0);
  $("optimizerSummary").innerHTML = `Punteggio euristico: <strong>${Math.round(best.score)}</strong> · Costo ingaggi noto: <strong>${hireCost} PV</strong> · Budget: <strong>${data.pv} PV</strong>`;
  $("teamCards").innerHTML = best.team.map(m => {
    const item = m.ideal?.item || m.current?.item || "da scegliere";
    const moves = (m.ideal?.moves || m.current?.moves || []).slice(0,4).join(" · ") || "mosse da definire";
    const stats = m.ideal?.stats ? Object.entries(m.ideal.stats).filter(([,v])=>v>0).map(([k,v])=>`${k} ${v}`).join(" / ") : "spread da definire";
    return `<article class="poke-card ${m.isHire?'hire':''}">
      <header><strong>${m.name}</strong><em>${m.role || "ruolo"}</em></header>
      <p>${(m.types||[]).join(" / ")}</p>
      <p><b>Oggetto:</b> ${item}${hasItem(item) ? "" : " <span class='warn'>(manca)</span>"}</p>
      <p><b>Natura:</b> ${m.ideal?.nature || "da definire"}</p>
      <p><b>Mosse:</b> ${moves}</p>
      <p><b>Statistiche:</b> ${stats}</p>
      ${m.isHire ? `<p class="warn">Ingaggio candidato · costo: ${m.hireCost || "da inserire"} PV</p>` : ""}
    </article>`;
  }).join("");
  const plan = makePlan(best.team, mode);
  $("planList").innerHTML = plan.map(p => `<li class="${p.affordable?'':'locked'}"><span>${p.who}</span><b>${p.cost} PV</b><br>${p.text}${p.affordable ? "" : "<small> · fuori budget se fatto ora</small>"}</li>`).join("");
}
function renderRoster() {
  const q = ($("pokemonSearch").value || "").toLowerCase();
  $("rosterList").innerHTML = data.pokemon.filter(p => p.name.toLowerCase().includes(q)).map(p => `
    <div class="row-card">
      <div><strong>${p.name}</strong><small>${(p.types||[]).join(" / ")} · ${p.role}</small></div>
      <label class="switch"><input type="checkbox" ${p.owned?'checked':''} data-own="${p.name}"><span></span></label>
    </div>`).join("");
  document.querySelectorAll("[data-own]").forEach(el => el.onchange = () => {
    const mon = data.pokemon.find(p => p.name === el.dataset.own); if (mon) mon.owned = el.checked; saveData();
  });
}
function renderItems() {
  const grouped = {};
  data.items.forEach(i => { (grouped[i.category || "Altro"] ||= []).push(i); });
  $("itemsList").innerHTML = Object.entries(grouped).map(([cat, items]) => `
    <h3>${cat}</h3>${items.map(i => `<div class="row-card"><div><strong>${i.name}</strong><small>Quantità: ${i.qty}</small></div><div class="qty"><button data-dec="${i.name}">−</button><button data-inc="${i.name}">+</button></div></div>`).join("")}
  `).join("");
  document.querySelectorAll("[data-inc]").forEach(b => b.onclick = () => { const it=data.items.find(i=>i.name===b.dataset.inc); it.qty++; saveData(); });
  document.querySelectorAll("[data-dec]").forEach(b => b.onclick = () => { const it=data.items.find(i=>i.name===b.dataset.dec); it.qty=Math.max(0,it.qty-1); saveData(); });
}
function renderHires() {
  $("hireList").innerHTML = data.hires.map((h, idx) => `<div class="row-card"><div><strong>${h.name}</strong><small>${h.role} · costo ${h.cost || "?"} PV · meta ${h.meta || "?"}</small></div><button data-delhire="${idx}" class="small danger">Elimina</button></div>`).join("");
  document.querySelectorAll("[data-delhire]").forEach(b => b.onclick = () => { data.hires.splice(Number(b.dataset.delhire),1); saveData(); });
}
function renderJson() { $("jsonEditor").value = JSON.stringify(data, null, 2); }
function exportAI() {
  const best = optimize($("calcMode").value, $("teamStyle").value);
  const payload = {
    richiesta: "Aggiorna e migliora il mio gestore Pokémon Champions: usa nomi italiani ufficiali, valuta miglior team teorico con risorse attuali e PV.",
    dati: data,
    risultatoApp: { teamSuggerito: best.team.map(m=>m.name), piano: makePlan(best.team, $("calcMode").value) }
  };
  $("jsonEditor").value = JSON.stringify(payload, null, 2);
  navigator.clipboard?.writeText($("jsonEditor").value).catch(()=>{});
  alert("Richiesta IA generata e copiata negli appunti se consentito dal browser.");
}
function download(filename, text) {
  const blob = new Blob([text], {type:"application/json"});
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename; a.click(); URL.revokeObjectURL(a.href);
}

// Events
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredInstallPrompt = e; $("installBtn").classList.remove("hidden"); });
$("installBtn").onclick = async () => { if (deferredInstallPrompt) deferredInstallPrompt.prompt(); };
document.querySelectorAll(".bottom-nav button").forEach(btn => btn.onclick = () => {
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.remove("active")); btn.classList.add("active");
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")); $(btn.dataset.screen).classList.add("active");
});
$("pvInput").onchange = () => { data.pv = Number($("pvInput").value || 0); saveData(); };
$("recalcHome").onclick = renderAll;
$("optimizeBtn").onclick = () => renderTeamResult(optimize($("calcMode").value, $("teamStyle").value), $("calcMode").value);
$("pokemonSearch").oninput = renderRoster;
$("addPokemonBtn").onclick = () => {
  const name = $("pokemonSearch").value.trim(); if (!name) return;
  let mon = data.pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (mon) mon.owned = true;
  else data.pokemon.push({name, owned:true, types:[], role:"da definire", tags:[], meta:50, current:{}, ideal:{moves:[],stats:{}}, upgrades:[]});
  $("pokemonSearch").value = ""; saveData();
};
$("addItemBtn").onclick = () => {
  const name = $("itemName").value.trim(); if (!name) return;
  let item = data.items.find(i => i.name.toLowerCase() === name.toLowerCase());
  if (item) item.qty++; else data.items.push({name, category:"Altro", qty:1});
  $("itemName").value = ""; saveData();
};
$("addHireBtn").onclick = () => {
  const name = $("hireName").value.trim(); if (!name) return;
  data.hires.push({name, owned:false, types:[], role:$("hireRole").value, tags:[], meta:70, cost:Number($("hireCost").value||0), note:"Inserito manualmente"});
  $("hireName").value=""; $("hireCost").value=""; saveData();
};
$("exportAiBtn").onclick = exportAI;
$("downloadJsonBtn").onclick = () => download("champions-manager-dati.json", JSON.stringify(data, null, 2));
$("resetBtn").onclick = () => { if(confirm("Ripristinare i dati iniziali?")) { data = clone(DEFAULT_DATA); saveData(); } };
$("jsonEditor").onchange = () => { try { data = JSON.parse($("jsonEditor").value); saveData(); } catch { alert("JSON non valido"); } };
$("importJson").onchange = async (ev) => {
  const file = ev.target.files[0]; if (!file) return;
  try { data = JSON.parse(await file.text()); saveData(); } catch { alert("File JSON non valido"); }
};
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
renderAll();
