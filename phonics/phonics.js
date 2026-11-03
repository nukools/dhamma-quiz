// ===================== PHONICS (Twinkl Level 2 & 3, as used in ISC EY3) =====================
// Built-in sounds: generated British-English voice (vowels & unvoiced sounds) + held hums (m, n, ng, l, r, v, z, th, w, y),
// each checked for length / voicing. Parents can replace any sound with their own recording (⚙️ Parent mode).
// {x} in a keyword marks the letters that make the sound.
const PH_LEVELS = {
  2: [
    {g:'s', id:'s', w:'{s}nake', p:'🐍'}, {g:'a', id:'a', w:'{a}pple', p:'🍎'}, {g:'t', id:'t', w:'{t}ea', p:'🍵'},
    {g:'p', id:'p', w:'{p}uppy', p:'🐶'}, {g:'i', id:'i', w:'{i}nsect', p:'🐞'}, {g:'n', id:'n', w:'{n}ut', p:'🌰'},
    {g:'m', id:'m', w:'{m}eatballs', p:'🍝'}, {g:'d', id:'d', w:'{d}rum', p:'🥁'}, {g:'g', id:'g', w:'{g}irl', p:'👧'},
    {g:'o', id:'o', w:'{o}range', p:'🍊'}, {g:'c', id:'k', w:'{c}aterpillar', p:'🐛'}, {g:'k', id:'k', w:'{k}ite', p:'🪁'},
    {g:'ck', id:'k', w:'du{ck}', p:'🦆'}, {g:'e', id:'e', w:'{e}gg', p:'🥚'}, {g:'u', id:'u', w:'{u}mbrella', p:'☂️'},
    {g:'r', id:'r', w:'{r}obot', p:'🤖'}, {g:'h', id:'h', w:'{h}ouse', p:'🏠'}, {g:'b', id:'b', w:'{b}at', p:'🏏'},
    {g:'f', id:'f', w:'{f}airy', p:'🧚'}, {g:'l', id:'l', w:'{l}olly', p:'🍭'}, {g:'ff', id:'f', w:'o{ff}', p:'💡'},
    {g:'ll', id:'l', w:'be{ll}', p:'🔔'}, {g:'ss', id:'s', w:'ki{ss}', p:'😘'}, {g:'s', id:'z', w:'pig{s}', p:'🐷🐷'},
  ],
  3: [
    {g:'j', id:'j', w:'{j}et', p:'✈️'}, {g:'v', id:'v', w:'{v}est', p:'🎽'}, {g:'w', id:'w', w:'{w}aves', p:'🌊'},
    {g:'x', id:'x', w:'bo{x}', p:'📦'}, {g:'y', id:'y', w:'{y}o-yo', p:'🪀'}, {g:'z', id:'z', w:'{z}igzag', p:'⚡'},
    {g:'zz', id:'z', w:'bu{zz}', p:'🐝'}, {g:'qu', id:'qu', w:'{qu}een', p:'👸'}, {g:'ch', id:'ch', w:'{ch}ick', p:'🐥'},
    {g:'sh', id:'sh', w:'{sh}eep', p:'🐑'}, {g:'th', id:'thv', w:'fea{th}er', p:'🪶'}, {g:'th', id:'th', w:'mo{th}', p:'🦋'},
    {g:'ng', id:'ng', w:'ri{ng}', p:'💍'}, {g:'ai', id:'ai', w:'sn{ai}l', p:'🐌'}, {g:'ee', id:'ee', w:'ch{ee}se', p:'🧀'},
    {g:'igh', id:'igh', w:'kn{igh}t', p:'🏇'}, {g:'oa', id:'oa', w:'b{oa}t', p:'🚣'}, {g:'oo', id:'oo', w:'m{oo}n', p:'🌕'},
    {g:'oo', id:'oo2', w:'b{oo}k', p:'📖'}, {g:'ar', id:'ar', w:'st{ar}', p:'⭐'}, {g:'or', id:'or', w:'f{or}k', p:'🍴'},
    {g:'ur', id:'ur', w:'p{ur}se', p:'👛'}, {g:'ow', id:'ow', w:'cl{ow}n', p:'🤡'}, {g:'oi', id:'oi', w:'c{oi}n', p:'🪙'},
    {g:'ear', id:'ear', w:'{ear}', p:'👂'}, {g:'air', id:'air', w:'ch{air}', p:'🪑'}, {g:'ure', id:'ure', w:'treas{ure}', p:'💰'},
    {g:'er', id:'er', w:'pepp{er}', p:'🧂'},
  ]
};
// Decodable words for Blend It (only sounds from that level and below). "oo2" = short oo as in book.
const PH_WORDS = {
  2: [['c|a|t','🐱'],['d|o|g','🐶'],['p|i|g','🐷'],['h|a|t','🎩'],['s|u|n','☀️'],['b|u|s','🚌'],['b|e|d','🛏️'],['h|e|n','🐔'],
      ['c|u|p','☕'],['m|a|p','🗺️'],['p|i|n','📌'],['t|i|n','🥫'],['n|e|t','🥅'],['r|e|d','🔴'],['d|u|ck','🦆'],['s|o|ck','🧦'],
      ['b|e|ll','🔔'],['r|a|t','🐀'],['l|o|g','🪵'],['m|o|p','🧹'],['b|u|g','🐛'],['p|a|n','🍳'],['l|e|g','🦵'],
      ['M|u|m','👩'],['D|a|d','👨'],['B|i|ff','👧']],
  3: [['j|e|t','✈️'],['v|a|n','🚐'],['w|e|b','🕸️'],['b|o|x','📦'],['f|o|x','🦊'],['z|i|p','🤐'],['b|u|zz','🐝'],['qu|ee|n','👸'],
      ['ch|i|p','🍟'],['sh|i|p','🚢'],['f|i|sh','🐟'],['r|i|ng','💍'],['k|i|ng','🤴'],['r|ai|n','🌧️'],['sh|ee|p','🐑'],['n|igh|t','🌙'],
      ['l|igh|t','💡'],['b|oa|t','⛵'],['g|oa|t','🐐'],['m|oo|n','🌕'],['b|oo2|k','📖'],['c|ar','🚗'],['s|t|ar','⭐'],['f|or|k','🍴'],
      ['c|or|n','🌽'],['c|ow','🐄'],['c|oi|n','🪙'],['ch|air','🪑'],['h|air','💇'],['m|o|th','🦋'],['Ch|i|p','👦']]
};
const PH_GMAP = { c:'k', ck:'k', ff:'f', ll:'l', ss:'s', zz:'z' };
const phSoundId = gr => { const g = gr.toLowerCase(); return PH_GMAP[g] || g; };
const phShow = gr => gr.replace(/2$/, '');

let phLevel = +(localStorage.getItem('ph_level') || 2);
let phAct = 'board';
let phParent = localStorage.getItem('ph_parent') === '1';
let phIdx = 0;
let phSeq = 0;               // bumps to cancel any running sound sequence
let phDone = new Set(JSON.parse(localStorage.getItem('ph_done') || '[]'));
const phWait = ms => new Promise(r => setTimeout(r, ms));

// ---------- audio ----------
const phAudioCache = {};
const phOverrideURL = {};    // id -> objectURL of a parent recording
let phCurAudio = null;
function phPlayURL(url) {
  return new Promise(res => {
    try {
      if (phCurAudio) { phCurAudio.pause(); }
      const a = phAudioCache[url] || (phAudioCache[url] = new Audio(url));
      phCurAudio = a; a.currentTime = 0;
      let done = false; const fin = () => { if (!done) { done = true; res(); } };
      a.onended = fin; a.onerror = fin; setTimeout(fin, 4000);
      const p = a.play(); if (p && p.catch) p.catch(fin);
    } catch (e) { res(); }
  });
}
function phPlay(id) {
  const url = phOverrideURL[id] || PH_SOUNDS[id];
  return url ? phPlayURL(url) : Promise.resolve();
}
let phVoice = null;
function phPickVoice() {
  const vs = speechSynthesis.getVoices();
  phVoice = vs.find(v => /en-GB/i.test(v.lang) && /Female|Libby|Sonia|Serena|Kate|Martha|Google UK English Female/i.test(v.name))
         || vs.find(v => /en-GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
}
function phSay(text, rate = 0.85) {
  return new Promise(res => {
    try {
      speechSynthesis.cancel(); if (!phVoice) phPickVoice();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = phVoice ? phVoice.lang : 'en-GB'; if (phVoice) u.voice = phVoice; u.rate = rate; u.pitch = 1.1;
      let done = false; const fin = () => { if (!done) { done = true; res(); } };
      u.onend = fin; u.onerror = fin; setTimeout(fin, 4000);
      setTimeout(() => speechSynthesis.speak(u), 60);
    } catch (e) { res(); }
  });
}
function phStopAll() { phSeq++; try { speechSynthesis.cancel(); } catch (e) {} if (phCurAudio) phCurAudio.pause(); }

// ---------- parent recordings (IndexedDB, this device only) ----------
let phDB = null;
function phDBOpen() {
  return new Promise(res => {
    if (phDB) return res(phDB);
    try {
      const rq = indexedDB.open('dhamma-phonics', 1);
      rq.onupgradeneeded = () => rq.result.createObjectStore('rec');
      rq.onsuccess = () => { phDB = rq.result; res(phDB); };
      rq.onerror = () => res(null);
    } catch (e) { res(null); }
  });
}
async function phLoadOverrides() {
  const db = await phDBOpen(); if (!db) return;
  const tx = db.transaction('rec', 'readonly'); const st = tx.objectStore('rec');
  const rq = st.openCursor();
  rq.onsuccess = () => { const c = rq.result; if (c) { phOverrideURL[c.key] = URL.createObjectURL(c.value); c.continue(); } };
}
async function phSaveOverride(id, blob) {
  const db = await phDBOpen(); if (!db) return false;
  return new Promise(res => { const tx = db.transaction('rec', 'readwrite'); tx.objectStore('rec').put(blob, id); tx.oncomplete = () => res(true); tx.onerror = () => res(false); });
}
async function phDeleteOverride(id) {
  const db = await phDBOpen(); if (!db) return;
  const tx = db.transaction('rec', 'readwrite'); tx.objectStore('rec').delete(id);
}

// ---------- microphone ----------
async function phRecord(ms) {
  if (!navigator.mediaDevices || !window.MediaRecorder) return null;
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { return null; }
  return new Promise(res => {
    const chunks = []; let mr;
    try { mr = new MediaRecorder(stream); } catch (e) { stream.getTracks().forEach(t => t.stop()); return res(null); }
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = () => { stream.getTracks().forEach(t => t.stop()); res(chunks.length ? new Blob(chunks, { type: mr.mimeType || 'audio/webm' }) : null); };
    mr.start(); setTimeout(() => { try { mr.stop(); } catch (e) {} }, ms);
  });
}

// ---------- hub ----------
function openPhonics() {
  phPickVoice(); phLoadOverrides();
  showScreen('phonics');
  phSetLevel(phLevel, true); phSetAct(phAct);
  document.getElementById('ph-parent-btn').classList.toggle('on', phParent);
}
function phHome() { phStopAll(); phfClose(); showScreen('start'); }
function phSetLevel(l, quiet) {
  phLevel = l; localStorage.setItem('ph_level', l);
  document.getElementById('ph-lv2').classList.toggle('active', l === 2);
  document.getElementById('ph-lv3').classList.toggle('active', l === 3);
  ['ph-board', 'bl-card', 'fs-card'].forEach(id => document.getElementById(id).classList.toggle('l3', l === 3));
  phRenderBoard();
  if (!quiet && phAct !== 'board') phSetAct(phAct);
}
function phSetAct(a) {
  phStopAll(); phAct = a;
  ['board', 'blend', 'find'].forEach(x => {
    document.getElementById('ph-act-' + x).classList.toggle('active', x === a);
    document.getElementById('ph-' + x + '-view').classList.toggle('hidden', x !== a);
  });
  if (a === 'blend') blStart();
  if (a === 'find') fsStart();
}
function phRenderBoard() {
  const b = document.getElementById('ph-board'); const items = PH_LEVELS[phLevel];
  const cols = window.innerWidth < 640 ? 4 : (phLevel === 2 ? 6 : 7);
  b.style.gridTemplateColumns = 'repeat(' + cols + ', minmax(0, 1fr))';
  b.innerHTML = items.map((it, i) =>
    '<div class="ph-tile" data-i="' + i + '" onclick="phfOpen(' + i + ')">' +
      (phDone.has(phLevel + ':' + i) ? '<span class="star">⭐</span>' : '') +
      '<span class="g">' + it.g + '</span><span class="p">' + it.p + '</span></div>').join('');
}
function phToggleParent() {
  phParent = !phParent; localStorage.setItem('ph_parent', phParent ? '1' : '0');
  document.getElementById('ph-parent-btn').classList.toggle('on', phParent);
  alertless(phParent ? '⚙️ Parent mode ON — open a sound to record your own voice for it' : 'Parent mode off');
}
function alertless(msg) {          // tiny toast instead of alert() (alerts block the TTS)
  let t = document.getElementById('ph-toast');
  if (!t) { t = document.createElement('div'); t.id = 'ph-toast'; t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#3b1f5e;color:#fff;padding:10px 20px;border-radius:20px;font:600 15px Prompt,sans-serif;z-index:400;box-shadow:0 6px 20px rgba(0,0,0,.3)'; document.body.appendChild(t); }
  t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._h); t._h = setTimeout(() => t.style.opacity = '0', 2600);
}

// ---------- full-screen letter ----------
function phKwHTML(w) { return w.replace(/\{(.+?)\}/, '<b>$1</b>'); }
function phKwText(w) { return w.replace(/[{}]/g, '').replace('-', ' '); }
function phfOpen(i) {
  phIdx = i; const it = PH_LEVELS[phLevel][i];
  const f = document.getElementById('ph-focus');
  f.classList.remove('hidden'); f.classList.toggle('l3', phLevel === 3);
  document.getElementById('phf-level').textContent = 'Level ' + phLevel + ' · ' + (i + 1) + '/' + PH_LEVELS[phLevel].length;
  const L = document.getElementById('phf-letter'); L.textContent = it.g; L.classList.toggle('long', it.g.length >= 3);
  document.getElementById('phf-pic').textContent = it.p;
  document.getElementById('phf-kw').innerHTML = phKwHTML(it.w);
  document.getElementById('phf-status').textContent = '';
  document.getElementById('phf-parent').classList.toggle('hidden', !phParent);
  document.getElementById('phf-override-tag').textContent = phOverrideURL[it.id] ? '✔ using your recording' : '';
  phfIntro();
}
function phfClose() { phStopAll(); document.getElementById('ph-focus').classList.add('hidden'); phRenderBoard(); }
function phfStep(d) { const n = PH_LEVELS[phLevel].length; phStopAll(); phfOpen((phIdx + d + n) % n); }
function phPop() { const L = document.getElementById('phf-letter'); L.classList.remove('pop'); void L.offsetWidth; L.classList.add('pop'); }
async function phfIntro() {          // "s … s … snake"  (same as the daily routine: sound, sound, picture word)
  const my = ++phSeq; const it = PH_LEVELS[phLevel][phIdx];
  await phWait(250); if (my !== phSeq) return;
  phPop(); await phPlay(it.id); if (my !== phSeq) return;
  await phWait(450); if (my !== phSeq) return;
  phPop(); await phPlay(it.id); if (my !== phSeq) return;
  await phWait(450); if (my !== phSeq) return;
  await phSay(phKwText(it.w));
}
async function phfSound() { const my = ++phSeq; phPop(); await phPlay(PH_LEVELS[phLevel][phIdx].id); }
async function phfWord() {
  const my = ++phSeq; const it = PH_LEVELS[phLevel][phIdx];
  phPop(); await phPlay(it.id); if (my !== phSeq) return; await phWait(350); if (my !== phSeq) return;
  await phSay(phKwText(it.w));
}
async function phfMyTurn() {
  const my = ++phSeq; const it = PH_LEVELS[phLevel][phIdx];
  const st = document.getElementById('phf-status'); const btn = document.getElementById('phf-me');
  st.textContent = '👂 Listen first…'; phPop(); await phPlay(it.id); if (my !== phSeq) return;
  await phWait(300); playDing();
  st.textContent = '🎤 Your turn, Dhamma! Say it!'; btn.classList.add('rec'); btn.disabled = true;
  const blob = await phRecord(2200);
  btn.classList.remove('rec'); btn.disabled = false; if (my !== phSeq) return;
  if (blob) {
    st.textContent = '🔁 This is YOU…'; await phPlayURL(URL.createObjectURL(blob)); if (my !== phSeq) return;
    await phWait(250); st.textContent = '👩‍🏫 …and this is the sound:'; phPop(); await phPlay(it.id); if (my !== phSeq) return;
  } else {
    await phWait(1800);              // no microphone: just give thinking time
  }
  st.textContent = '⭐ Great job, Dhamma! ⭐'; fireConfetti();
  phDone.add(phLevel + ':' + phIdx); localStorage.setItem('ph_done', JSON.stringify([...phDone]));
}
async function phfRecordOverride() {
  const it = PH_LEVELS[phLevel][phIdx]; const st = document.getElementById('phf-status');
  st.textContent = '🎙️ Get ready… say just the sound  "' + it.g + '"'; await phWait(900); playDing();
  st.textContent = '🔴 Recording…';
  const blob = await phRecord(1800);
  if (!blob) { st.textContent = '⚠️ No microphone available'; return; }
  await phSaveOverride(it.id, blob); phOverrideURL[it.id] = URL.createObjectURL(blob); delete phAudioCache[phOverrideURL[it.id]];
  document.getElementById('phf-override-tag').textContent = '✔ using your recording';
  st.textContent = '✅ Saved on this device — playing it back'; await phPlay(it.id);
}
async function phfResetOverride() {
  const it = PH_LEVELS[phLevel][phIdx]; await phDeleteOverride(it.id); delete phOverrideURL[it.id];
  document.getElementById('phf-override-tag').textContent = ''; document.getElementById('phf-status').textContent = '↺ Built-in sound';
  phfSound();
}
document.addEventListener('keydown', e => {
  if (document.getElementById('ph-focus').classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') phfStep(1); else if (e.key === 'ArrowLeft') phfStep(-1);
  else if (e.key === 'Escape') phfClose(); else if (e.key === ' ') { e.preventDefault(); phfSound(); }
});

// ---------- Blend It! ----------
let blList = [], blI = 0, blRevealed = false;
function phShuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function blStart() { blList = phShuffle(PH_WORDS[phLevel]).slice(0, 10); blI = 0; blShow(); }
function blShow() {
  blRevealed = false; const [w, pic] = blList[blI]; const grs = w.split('|');
  document.getElementById('bl-count').textContent = 'Word ' + (blI + 1) + ' / ' + blList.length;
  const P = document.getElementById('bl-pic'); P.textContent = '❓'; P.classList.remove('shown');
  document.getElementById('bl-word').textContent = '';
  document.getElementById('bl-next-btn').textContent = blI < blList.length - 1 ? 'Next ▶' : '🎉 Again';
  document.getElementById('bl-letters').innerHTML = grs.map((g, i) =>
    '<div class="bl-gr" id="blg' + i + '" onclick="blTap(' + i + ')"><span class="g">' + phShow(g) + '</span><span class="mk">' +
    (phShow(g).length > 1 ? '<span class="dash"></span>' : '<span class="dot"></span>') + '</span></div>').join('');
}
function blLight(i) { document.querySelectorAll('.bl-gr').forEach((el, j) => el.classList.toggle('lit', j === i)); }
async function blTap(i) { ++phSeq; const g = blList[blI][0].split('|')[i]; blLight(i); await phPlay(phSoundId(g)); }
async function blSoundOut() {
  const my = ++phSeq; const grs = blList[blI][0].split('|');
  for (let i = 0; i < grs.length; i++) { blLight(i); await phPlay(phSoundId(grs[i])); if (my !== phSeq) return; await phWait(500); if (my !== phSeq) return; }
  blLight(-1);
}
async function blBlend() {
  const my = ++phSeq; const [w, pic] = blList[blI]; const grs = w.split('|');
  for (let i = 0; i < grs.length; i++) { blLight(i); await phPlay(phSoundId(grs[i])); if (my !== phSeq) return; await phWait(120); }
  blLight(-1); await phWait(250); if (my !== phSeq) return;
  const word = grs.map(phShow).join('');
  const P = document.getElementById('bl-pic'); P.textContent = pic; P.classList.add('shown');
  document.getElementById('bl-word').textContent = word;
  await phSay(word, 0.8);
  if (!blRevealed) { blRevealed = true; fireConfetti(); }
}
function blNext() { phStopAll(); if (blI < blList.length - 1) { blI++; blShow(); } else blStart(); }

// ---------- Find the Sound ----------
let fsPool = [], fsRound = 0, fsTarget = null, fsStars = 0, fsTries = 0;
const FS_ROUNDS = 10;
function fsBuildPool() {
  const seen = new Set(), shown = new Set(), pool = [];
  PH_LEVELS[phLevel].forEach(it => {
    if (seen.has(it.id) || shown.has(it.g) || it.id === 'thv' || it.id === 'oo2' || (it.g === 's' && it.id === 'z')) return;
    seen.add(it.id); shown.add(it.g); pool.push(it);
  });
  return pool;
}
function fsStart() { fsPool = fsBuildPool(); fsRound = 0; fsStars = 0; document.getElementById('fs-stars').textContent = ''; fsNext(); }
function fsNext() {
  fsTries = 0; fsRound++;
  if (fsRound > FS_ROUNDS) { fsFinish(); return; }
  fsTarget = fsPool[Math.floor(Math.random() * fsPool.length)];
  const opts = phShuffle([fsTarget, ...phShuffle(fsPool.filter(x => x.id !== fsTarget.id)).slice(0, 3)]);
  document.getElementById('fs-q').textContent = 'Sound ' + fsRound + ' of ' + FS_ROUNDS + ' — which one is it?';
  document.getElementById('fs-opts').innerHTML = opts.map(o =>
    '<button class="fs-opt" data-id="' + o.id + '" onclick="fsPick(this)">' + o.g + '</button>').join('');
  setTimeout(fsReplay, 400);
}
function fsReplay() { ++phSeq; if (fsTarget) phPlay(fsTarget.id); }
async function fsPick(el) {
  if (el.classList.contains('right') || el.classList.contains('wrong')) return;
  const my = ++phSeq;
  if (el.dataset.id === fsTarget.id) {
    el.classList.add('right'); playDing();
    if (fsTries === 0) { fsStars++; document.getElementById('fs-stars').textContent = '⭐'.repeat(fsStars); }
    await phWait(350); const it = fsTarget; await phPlay(it.id); if (my !== phSeq) return;
    await phWait(200); await phSay(phKwText(it.w)); if (my !== phSeq) return;
    await phWait(400); fsNext();
  } else {
    fsTries++; el.classList.add('wrong'); await phWait(450); if (my !== phSeq) return; phPlay(fsTarget.id);
  }
}
function fsFinish() {
  document.getElementById('fs-q').textContent = '🎉 ' + fsStars + ' / ' + FS_ROUNDS + ' first try! Amazing, Dhamma!';
  document.getElementById('fs-opts').innerHTML = '<button class="phf-btn word" style="grid-column:1/-1" onclick="fsStart()">🔁 Play again</button>';
  fireConfetti(); phSay('Amazing job, Dhamma!');
}
