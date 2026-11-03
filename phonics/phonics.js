// ===================== PHONICS (Twinkl Level 2 & 3, as used in ISC EY3) =====================
// NO computer-generated letter sounds. Each sound is taught by a real UK phonics teacher (YouTube embed, verified embeddable):
// Miss Phonics (youtube.com/@MissPhonics, follows the Twinkl Level 2 order) and Miss Ellis (ure, er).
// Picture words are read by the device voice (whole words are reliable). Parents can record their own sound (⚙️).
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
const PH_VIDEO = {s:'-zVmn8APPzE',a:'EJ_W2ixU7TA',t:'HfH8jEavU3Y',p:'lriIUNwh6bc',i:'ucpMqBKrJz8',n:'1HoscIJDJ2Y',m:'bERDmffRz3E',d:'mDS1w7HxkYE',g:'8OIiKtG-boY',o:'3qFNtt51iQg',c:'yDuD2VLAYRA',k:'xb22PAGvY78',ck:'aSxFsW4oU9g',e:'OyaCEklnSRI',u:'pWa8_Y16bsg',r:'0J0NEzTQ2EQ',h:'sQV1fQRxCqI',b:'nJbvFVzHP50',f:'LcSIdQFr9OE',l:'-GN8Pals5Rg',ff:'YvunCTJ61ek',ll:'bsMSShSWWmo',ss:'VDmSWVjDh-0',j:'vJ6mjU6VJUU',v:'ST4fM_S6AAQ',w:'XBQ7UQ65bLY',x:'FsSmBs0yEpk',y:'59OnNTd3MsI',z:'rZ_h0ptpKY8',zz:'fPWEtQV54JU',qu:'gMxs2AaY07s',ch:'_RaZ4UwNrQQ',sh:'4p2KXlFbog0',th:'2PWNtUYMeYk',ng:'WYKS5_t-hF8',ai:'4OBxSUMWmbM',ee:'eMe0W5wBPWg',igh:'_qwNndwKjDk',oa:'35rm12WzgXM',oo:'4Er3VjsIOm8',oo2:'npn6aEZoPAE',ar:'0CcGlX-QUJY',or:'OariKFwxOmI',ur:'agwfL-GWe4k',ow:'5bk1ApbWfcs',oi:'IrEakBzHzoY',ear:'2F9DxP4Fi7M',air:'nAh0nZE7pxo',ure:'H_5Zlo5zNTc',er:'1smOOzWnMKk'};
const PH_TEACHER = id => (id === 'ure' || id === 'er') ? 'Miss Ellis' : 'Miss Phonics';
// which video for a board item: by grapheme (c / k / ck / ff… each have their own video), oo-short and z-in-pigs special
function phVideoFor(it) { if (it.id === 'oo2') return PH_VIDEO.oo2; if (it.g === 's' && it.id === 'z') return PH_VIDEO.z; if (it.id === 'thv') return PH_VIDEO.th; return PH_VIDEO[it.g] || PH_VIDEO[it.id]; }
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
function phPlay(id) {            // only a parent's own recording — never a generated sound
  const url = phOverrideURL[id];
  return url ? phPlayURL(url) : Promise.resolve();
}
const phHasRec = id => !!phOverrideURL[id];
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
function phStopAll() { phSeq++; try { speechSynthesis.cancel(); } catch (e) {} if (phCurAudio) phCurAudio.pause(); phVideoClose(); }

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
  phStopAll(); phIdx = i; const it = PH_LEVELS[phLevel][i];
  const f = document.getElementById('ph-focus');
  f.classList.remove('hidden'); f.classList.toggle('l3', phLevel === 3);
  document.getElementById('phf-level').textContent = 'Level ' + phLevel + ' · ' + (i + 1) + '/' + PH_LEVELS[phLevel].length;
  const L = document.getElementById('phf-letter'); L.textContent = it.g; L.classList.toggle('long', it.g.length >= 3);
  document.getElementById('phf-pic').textContent = it.p;
  document.getElementById('phf-kw').innerHTML = phKwHTML(it.w);
  document.getElementById('phf-status').textContent = '';
  document.getElementById('phf-teacher-name').textContent = PH_TEACHER(it.id);
  document.getElementById('phf-mysound').classList.toggle('hidden', !phHasRec(it.id));
  document.getElementById('phf-parent').classList.toggle('hidden', !phParent);
  document.getElementById('phf-override-tag').textContent = phHasRec(it.id) ? '✔ your recording saved' : '';
}
function phfClose() { phStopAll(); document.getElementById('ph-focus').classList.add('hidden'); phRenderBoard(); }
function phfStep(d) { const n = PH_LEVELS[phLevel].length; phfOpen((phIdx + d + n) % n); }
function phPop() { const L = document.getElementById('phf-letter'); L.classList.remove('pop'); void L.offsetWidth; L.classList.add('pop'); }
function phfTeacher() {
  phStopAll(); const it = PH_LEVELS[phLevel][phIdx]; const id = phVideoFor(it);
  const box = document.getElementById('phf-video'); box.classList.remove('hidden');
  document.getElementById('phf-video-frame').src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
  document.getElementById('phf-video-credit').textContent = '▶ ' + PH_TEACHER(it.id) + ' · YouTube';
}
function phVideoClose() {
  const box = document.getElementById('phf-video'); if (!box) return;
  box.classList.add('hidden'); const fr = document.getElementById('phf-video-frame'); if (fr.src) fr.src = '';
}
async function phfSound() { ++phSeq; phPop(); await phPlay(PH_LEVELS[phLevel][phIdx].id); }
async function phfWord() { ++phSeq; phPop(); await phSay(phKwText(PH_LEVELS[phLevel][phIdx].w)); }
async function phfMyTurn() {
  const my = ++phSeq; const it = PH_LEVELS[phLevel][phIdx];
  const st = document.getElementById('phf-status'); const btn = document.getElementById('phf-me');
  playDing(); phPop();
  st.textContent = '🎤 Your turn, Dhamma! Say the sound  "' + it.g + '"'; btn.classList.add('rec'); btn.disabled = true;
  const blob = await phRecord(2200);
  btn.classList.remove('rec'); btn.disabled = false; if (my !== phSeq) return;
  if (blob) {
    st.textContent = '🔁 Listen to YOU…'; await phPlayURL(URL.createObjectURL(blob)); if (my !== phSeq) return;
    if (phHasRec(it.id)) { await phWait(250); st.textContent = '👩 …and Mummy/Daddy:'; await phPlay(it.id); if (my !== phSeq) return; }
  } else {
    await phWait(1800);
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
  document.getElementById('phf-override-tag').textContent = '✔ your recording saved';
  document.getElementById('phf-mysound').classList.remove('hidden');
  st.textContent = '✅ Saved on this device — playing it back'; await phPlay(it.id);
}
async function phfResetOverride() {
  const it = PH_LEVELS[phLevel][phIdx]; await phDeleteOverride(it.id); delete phOverrideURL[it.id];
  document.getElementById('phf-override-tag').textContent = ''; document.getElementById('phf-status').textContent = '🗑️ Recording deleted';
  document.getElementById('phf-mysound').classList.add('hidden');
}
document.addEventListener('keydown', e => {
  if (document.getElementById('ph-focus').classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') phfStep(1); else if (e.key === 'ArrowLeft') phfStep(-1);
  else if (e.key === 'Escape') phfClose(); else if (e.key === ' ') { e.preventDefault(); phfWord(); }
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
async function blTap(i) {          // Dhamma says each sound himself (parent recording plays if there is one)
  ++phSeq; const g = blList[blI][0].split('|')[i]; blLight(i);
  const id = phSoundId(g); if (phHasRec(id)) await phPlay(id);
}
async function blSoundOut() {      // point to each sound in turn, left to right, for Dhamma to say
  const my = ++phSeq; const grs = blList[blI][0].split('|');
  for (let i = 0; i < grs.length; i++) { blLight(i); const id = phSoundId(grs[i]); if (phHasRec(id)) await phPlay(id); if (my !== phSeq) return; await phWait(1100); if (my !== phSeq) return; }
  blLight(-1);
}
async function blBlend() {
  const my = ++phSeq; const [w, pic] = blList[blI]; const grs = w.split('|');
  for (let i = 0; i < grs.length; i++) { blLight(i); await phWait(380); if (my !== phSeq) return; }
  blLight(-1);
  const word = grs.map(phShow).join('');
  const P = document.getElementById('bl-pic'); P.textContent = pic; P.classList.add('shown');
  document.getElementById('bl-word').textContent = word;
  await phSay(word.toLowerCase() === 'chip' && word[0] === 'C' ? 'Chip' : word, 0.8);
  if (!blRevealed) { blRevealed = true; fireConfetti(); }
}
function blNext() { phStopAll(); if (blI < blList.length - 1) { blI++; blShow(); } else blStart(); }

// ---------- Find the Sound: hear a picture WORD, find its sound ----------
// sounds actually heard in each picture word (so Find the Sound never offers a "wrong" choice that is really in the word)
const PH_WORD_SOUNDS = {
  snake:'s n ai k', apple:'a p l', tea:'t ee', puppy:'p u ee', insect:'i n s e k t', nut:'n u t', meatballs:'m ee t b or l z', drum:'d r u m',
  girl:'g ur l', orange:'o r i n j', caterpillar:'k a t er p i l er', kite:'k igh t', duck:'d u k', egg:'e g', umbrella:'u m b r e l er',
  robot:'r oa b o t', house:'h ow s', bat:'b a t', fairy:'f air ee', lolly:'l o ee', off:'o f', bell:'b e l', kiss:'k i s', pigs:'p i g z',
  jet:'j e t', vest:'v e s t', 'yo yo':'y oa', waves:'w ai v z', box:'b o k s x', zigzag:'z i g a', buzz:'b u z', queen:'qu k w ee n',
  chick:'ch i k', sheep:'sh ee p', feather:'f e thv th er', moth:'m o th thv', ring:'r i ng', snail:'s n ai l', cheese:'ch ee z',
  knight:'n igh t', boat:'b oa t', moon:'m oo n', book:'b oo2 oo k', star:'s t ar', fork:'f or k', purse:'p ur s', clown:'k l ow n',
  coin:'k oi n', ear:'ear', chair:'ch air', treasure:'t r e ure er', pepper:'p e er'
};
let fsPool = [], fsRound = 0, fsTarget = null, fsStars = 0, fsTries = 0;
const FS_ROUNDS = 10;
function fsBuildPool() {
  const shown = new Set(), pool = [];
  PH_LEVELS[phLevel].forEach(it => { if (shown.has(it.g)) return; shown.add(it.g); pool.push(it); });
  return pool;
}
function fsStart() { fsPool = fsBuildPool(); fsRound = 0; fsStars = 0; document.getElementById('fs-stars').textContent = ''; fsNext(); }
function fsNext() {
  fsTries = 0; fsRound++;
  if (fsRound > FS_ROUNDS) { fsFinish(); return; }
  fsTarget = fsPool[Math.floor(Math.random() * fsPool.length)];
  const word = phKwText(fsTarget.w).toLowerCase();
  // distractors must not appear anywhere in the word (e.g. no "ch" for "cheese")
  const heard = new Set((PH_WORD_SOUNDS[word] || '').split(' '));
  const others = phShuffle(fsPool.filter(x => x.g !== fsTarget.g && x.id !== fsTarget.id && !heard.has(x.id) && !word.includes(x.g))).slice(0, 3);
  const opts = phShuffle([fsTarget, ...others]);
  document.getElementById('fs-q').textContent = 'Word ' + fsRound + ' of ' + FS_ROUNDS + ' — which sound can you hear?';
  document.getElementById('fs-opts').innerHTML = opts.map(o =>
    '<button class="fs-opt" data-g="' + o.g + '" onclick="fsPick(this)">' + o.g + '</button>').join('');
  setTimeout(fsReplay, 400);
}
function fsReplay() { ++phSeq; if (fsTarget) phSay(phKwText(fsTarget.w), 0.75); }
async function fsPick(el) {
  if (el.classList.contains('right') || el.classList.contains('wrong')) return;
  const my = ++phSeq;
  if (el.dataset.g === fsTarget.g) {
    el.classList.add('right'); playDing();
    if (fsTries === 0) { fsStars++; document.getElementById('fs-stars').textContent = '⭐'.repeat(fsStars); }
    document.getElementById('fs-q').innerHTML = fsTarget.p + '  ' + phKwHTML(fsTarget.w);
    await phWait(300); await phSay(phKwText(fsTarget.w), 0.8); if (my !== phSeq) return;
    await phWait(900); fsNext();
  } else {
    fsTries++; el.classList.add('wrong'); await phWait(450); if (my !== phSeq) return; phSay(phKwText(fsTarget.w), 0.7);
  }
}
function fsFinish() {
  document.getElementById('fs-q').textContent = '🎉 ' + fsStars + ' / ' + FS_ROUNDS + ' first try! Amazing, Dhamma!';
  document.getElementById('fs-opts').innerHTML = '<button class="phf-btn word" style="grid-column:1/-1" onclick="fsStart()">🔁 Play again</button>';
  fireConfetti(); phSay('Amazing job, Dhamma!');
}
