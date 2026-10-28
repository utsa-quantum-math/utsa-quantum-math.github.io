
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  function el(t, a, p) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; }
  function txt(p, x, y, s, a) { var t = el('text', Object.assign({ x: x, y: y }, a || {}), p); t.textContent = s; return t; }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function ink(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
  var C = {josh:ink('--accent'),josh2:ink('--muted'),josh3:ink('--rule'),ol:ink('--focus'),ol2:ink('--focus-wash'),ink:ink('--ink'),mut:ink('--muted')};

  /* ---------------- A: the forcing tree ---------------- */
  var svgA = document.getElementById('g-tree'), tipA = document.getElementById('tipA');
  function seeded(s) { return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
  function buildA(noMotion) {
    svgA.innerHTML='';
    var narrow=window.matchMedia('(max-width:760px)').matches;
    var W=narrow?520:1080,H=narrow?450:410;
    svgA.setAttribute('viewBox','0 0 '+W+' '+H);
    var edges=el('g',{fill:'none','stroke-linecap':'round'},svgA),nodes=el('g',{},svgA),labels=el('g',{'font-family':'Space Grotesk,sans-serif'},svgA),segs=[],groups=[];
    function path(d,col,w,delay){var p=el('path',{d:d,stroke:col,'stroke-width':w},edges);segs.push({p:p,d:delay});return p;}
    function diamond(x,y){el('rect',{x:x-5,y:y-5,width:10,height:10,transform:'rotate(45 '+x+' '+y+')',fill:C.ol},nodes);}
    var rx=narrow?260:35,ry=narrow?30:205,cx=narrow?260:270,cy=narrow?115:205;
    el('circle',{cx:rx,cy:ry,r:7,fill:C.ink},nodes);
    txt(labels,narrow?rx+20:rx,narrow?ry+6:ry-18,'T⁰¹',{'font-size':narrow?21:20,fill:C.ink,'text-anchor':narrow?'start':'middle'});
    path('M'+rx+' '+ry+' L'+cx+' '+cy,C.josh,2,0);diamond(cx,cy);
    txt(labels,narrow?cx+20:cx-8,narrow?cy-20:cy+35,'countable challenge',{'font-size':narrow?18:15,fill:C.ol,'text-anchor':narrow?'start':'end'});
    var samples=narrow?[1,3,8]:[1,2,3,5,8,13];
    samples.forEach(function(n,i){
      var bx=narrow?85+i*175:440,by=narrow?220:38+i*63,ex=narrow?bx:690+i*55,ey=narrow?320+i*50:by;
      var curve=narrow?'M'+cx+' '+cy+' C'+cx+' 170 '+bx+' 170 '+bx+' '+by:'M'+cx+' '+cy+' C350 '+cy+' 350 '+by+' '+bx+' '+by;
      var p=path(curve,C.josh,1.65,1+i*.15);
      var q=path('M'+bx+' '+by+' L'+ex+' '+ey,C.josh,1.65,2+i*.18);
      txt(labels,narrow?(i===2?bx-20:bx+20):bx+8,narrow?by+7:by-14,'N = '+n,{'font-size':narrow?20:16,fill:C.ink,'text-anchor':narrow&&i===2?'end':'start'});
      diamond(narrow?ex:ex-35,narrow?ey-35:ey);
      var end=el('rect',{x:ex-5,y:ey-5,width:10,height:10,fill:C.ol,tabindex:0,role:'button','aria-label':'Inspect schematic leaf after N = '+n,style:'cursor:pointer'},nodes);
      var entry={p:p,q:q,end:end};groups.push(entry);
      function select(){groups.forEach(function(g){var on=g===entry;g.p.style.opacity=g.q.style.opacity=on?1:.18;g.p.setAttribute('stroke-width',on?2.6:1.65);g.q.setAttribute('stroke-width',on?2.6:1.65);});
        var n0=n-1,j=Math.floor(n0/4);document.getElementById('tree-reading').innerHTML='<strong>N = '+n+'</strong><p>In this schematic branch, take n₀ = '+n0+'. The stated strategy places the parity module in span(e'+(4*j)+', …, e'+(4*j+3)+'). Its terminal position retains finite interval commitments and their logical dependencies. The complete play contains further challenges omitted here.</p>';}
      end.addEventListener('click',select);end.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();select();}});
    });
    txt(labels,narrow?470:450,narrow?245:403,'⋯',{'font-size':30,fill:C.mut});
    if(!narrow){txt(labels,35,ry+36,'no model',{'font-size':14,fill:C.mut});txt(labels,1050,28,'finite terminal positions',{'font-size':14,fill:C.ol,'text-anchor':'end'});}
    segs.forEach(function(s){var L=s.p.getTotalLength();s.p.style.strokeDasharray=L;s.p.style.strokeDashoffset=reduce||noMotion?0:L;s.p.style.transition='stroke-dashoffset .65s ease '+s.d*220+'ms';if(!reduce&&!noMotion)requestAnimationFrame(function(){requestAnimationFrame(function(){s.p.style.strokeDashoffset=0;});});});
  }
  buildA(true);
  var seen=new IntersectionObserver(function(es){if(es.some(function(e){return e.isIntersecting;})){buildA(false);seen.disconnect();}},{threshold:.2});seen.observe(svgA);
  document.getElementById('growA').addEventListener('click',function(){buildA(false);});
  var lastNarrow=window.matchMedia('(max-width:760px)').matches;window.addEventListener('resize',function(){var now=window.matchMedia('(max-width:760px)').matches;if(now!==lastNarrow){lastNarrow=now;buildA(true);}});

  /* ---------------- B: anatomy of a leaf ---------------- */
  var svgB = document.getElementById('g-leaf');
  // columns: 0 game moves, 1 axiom instances, 2 identifications, 3 interval commitments, 4 the clash
  var N = [
    { id: 'tot', c: 0, r: 0, t: 'Σₙ μ(at(κₙε)) ∈ [1−η, 1]', s: 'Olivia challenges (M3) at ε', k: 'move' },
    { id: 'N',   c: 0, r: 1, t: 'Josh names N', s: 'countable challenge (⋁≥)', k: 'count' },
    { id: 'n0',  c: 0, r: 2, t: 'n₀ < N with μ ≈ 1', s: 'tolerance finer than 1/(2N)', k: 'move' },
    { id: 'blk', c: 0, r: 3, t: 'block e₄ⱼ … e₄ⱼ₊₃', s: '4j ≤ n₀ < 4j+4', k: 'move' },
    { id: 'K4',  c: 1, r: 0, t: '(K4)', s: 'κₙε = 2⁻ⁿ⁻¹eₙ' },
    { id: 'At',  c: 1, r: 1, t: '(At1), (At5)', s: 'atoms of vectors' },
    { id: 'K2',  c: 1, r: 2, t: '(K2)', s: 'entries of s_B' },
    { id: 'P4',  c: 1, r: 3, t: '(P4)', s: 'spans' },
    { id: 'OL2', c: 1, r: 4, t: '(OL2)', s: 'μ respects equality' },
    { id: 'M1',  c: 1, r: 5, t: '(M1), (M2), 0/1 axiom', s: 'values near 0 or 1' },
    { id: 'M3', c: 1, r: 6, t: '(M3)', s: 'orthogonal additivity' },
    { id: 'mass', c: 2, r: 3, t: 'block measure near 1', s: 'contains the selected high atom' },
    { id: 'idn', c: 2, r: 0, t: 'at(κₙ₀ε) ≡ at(eₙ₀)', s: 'the selected atom' },
    { id: 'idr', c: 2, r: 1, t: 'at(κᵢs_B) ≡ at(vᵢ/16)', s: '36 occurrences → 18 rays' },
    { id: 'ids', c: 2, r: 2, t: 'spa(s_B) ≡ block span', s: 'for the nine bases' },
    { id: 'v18', c: 3, r: 0, t: '18 values ∈ [0,δ] ∪ [1−δ,1]', s: 'Josh’s interval commitments' },
    { id: 's9',  c: 3, r: 1, t: '9 basis sums ∈ [1−η, 1+η]', s: 'Josh’s interval commitments' },
    { id: 'par', c: 3, r: 2, t: 'count: 9 vs even', s: 'parity, when 4δ + η < 1' },
    { id: 'X',   c: 4, r: 0, t: 'one basic sentence,', s: 'two intervals, no common point', k: 'clash' }
  ];
  var E = [['tot','N'],['N','n0'],['K4','idn'],['At','idn'],['n0','idn'],['n0','blk'],['M1','n0'],
           ['blk','idr'],['K2','idr'],['At','idr'],['blk','ids'],['P4','ids'],
           ['idr','v18'],['OL2','v18'],['M1','v18'],['ids','s9'],['OL2','s9'],['idn','mass'],['blk','mass'],['M3','mass'],['mass','s9'],['M3','s9'],
           ['v18','par'],['s9','par'],['par','X']];
  var colX = [20, 252, 470, 712, 968], colW = [208, 182, 210, 228, 196], rowH = 78, y0B = 70;
  var ix = {}; N.forEach(function (n) { ix[n.id] = n; });
  function box(n) { var rows = { 0: 4, 1: 7, 2: 4, 3: 3, 4: 1 }[n.c]; var off = (6 - rows) * rowH / 2; return { x: colX[n.c], y: y0B + off + n.r * rowH + (n.c === 4 ? 2 * rowH : 0), w: colW[n.c], h: 54 }; }
  function drawB() {
    svgB.innerHTML = '';
    var heads = ['the play', 'axiom instances', 'identifications', 'commitments', 'the leaf'];
    heads.forEach(function (h, i) { txt(svgB, colX[i], 34, h.toUpperCase(), { 'font-family': 'Space Grotesk, sans-serif', 'font-size': 11, 'letter-spacing': 2, fill: C.mut }); });
    // parity module bracket
    var bp = box(ix.v18), bq = box(ix.par);
    el('rect', { x: bp.x - 10, y: bp.y - 12, width: bp.w + 20, height: bq.y + bq.h - bp.y + 24, rx: 0, fill: 'none', stroke: C.josh2, 'stroke-dasharray': '5 5' }, svgB);
    txt(svgB, bp.x - 6, bq.y + bq.h + 30, 'parity module: one part of this strategy', { 'font-family': 'Space Grotesk, sans-serif', 'font-size': 12, fill: C.josh2 });
    var eg = el('g', { fill: 'none' }, svgB), ng = el('g', {}, svgB);
    var paths = [];
    E.forEach(function (e) {
      var a = box(ix[e[0]]), b = box(ix[e[1]]);
      var x1 = a.x + a.w, y1 = a.y + a.h / 2, x2 = b.x, y2 = b.y + b.h / 2;
      if (ix[e[0]].c === ix[e[1]].c) { x1 = a.x + a.w / 2; y1 = a.y + a.h; x2 = b.x + b.w / 2; y2 = b.y; }
      var d = ix[e[0]].c === ix[e[1]].c ? 'M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 : 'M' + x1 + ' ' + y1 + ' C' + (x1 + 50) + ' ' + y1 + ' ' + (x2 - 50) + ' ' + y2 + ' ' + x2 + ' ' + y2;
      paths.push({ e: e, p: el('path', { d: d, stroke: C.josh3, 'stroke-width': 1.6 }, eg) });
    });
    var boxes = {};
    N.forEach(function (n) {
      var b = box(n), g = el('g', { style: 'cursor:default' }, ng);
      var fill = n.k === 'clash' ? C.ol : (n.k === 'count' ? C.josh : '#fff');
      var stroke = n.k === 'clash' ? C.ol : (n.c === 1 ? C.josh3 : C.josh);
      var r = el('rect', { x: b.x, y: b.y, width: b.w, height: b.h, rx: 0, fill: fill, stroke: stroke, 'stroke-width': 1.5 }, g);
      var dark = n.k === 'clash' || n.k === 'count';
      txt(g, b.x + 12, b.y + 22, n.t, { 'font-family': n.c === 1 ? 'Space Grotesk, sans-serif' : 'Space Grotesk, sans-serif', 'font-size': n.c === 1 ? 14 : 12, 'font-weight': n.c === 1 ? 700 : 500, fill: dark ? '#fff' : C.ink });
      txt(g, b.x + 12, b.y + 41, n.s, { 'font-family': 'Space Grotesk, sans-serif', 'font-size': 11.5, fill: dark ? '#fbe9f3' : C.mut });
      boxes[n.id] = { g: g, r: r };
      g.addEventListener('mouseenter', function () { light(n.id); });
      g.addEventListener('mouseleave', function () { light(null); });
    });
    // the clash, drawn: two interval bars that do not meet
    var bx = box(ix.X), gy = bx.y + bx.h + 30;
    el('line', { x1: bx.x, y1: gy + 14, x2: bx.x + 140, y2: gy + 14, stroke: C.mut, 'stroke-width': 1 }, svgB);
    el('rect', { x: bx.x + 6, y: gy + 2, width: 52, height: 9, rx: 4.5, fill: C.josh }, svgB);
    el('rect', { x: bx.x + 82, y: gy + 17, width: 52, height: 9, rx: 4.5, fill: C.ol }, svgB);
    txt(svgB, bx.x, gy + 46, 'no structure satisfies', { 'font-family': 'Space Grotesk, sans-serif', 'font-size': 12, fill: C.ol, 'font-weight': 500 });
    txt(svgB, bx.x, gy + 62, 'this finite position', { 'font-family': 'Space Grotesk, sans-serif', 'font-size': 12, fill: C.ol, 'font-weight': 500 });
    function light(id) {
      var anc = {};
      if (id) { (function up(x) { anc[x] = 1; E.forEach(function (e) { if (e[1] === x && !anc[e[0]]) up(e[0]); }); })(id); }
      paths.forEach(function (p) { var on = id && anc[p.e[0]] && anc[p.e[1]]; p.p.setAttribute('stroke', on ? C.ol : C.josh3); p.p.setAttribute('stroke-width', on ? 2.6 : 1.6); });
      N.forEach(function (n) { boxes[n.id].g.style.opacity = !id || anc[n.id] ? 1 : 0.28; });
    }
  }
  drawB();
  var depChoice=document.getElementById('dependency-choice');
  N.forEach(function(n){var o=document.createElement('option');o.value=n.id;o.textContent=n.t;depChoice.appendChild(o);});depChoice.value='idn';
  function readDependency(){var set={};function up(id){set[id]=1;E.forEach(function(e){if(e[1]===id&&!set[e[0]])up(e[0]);});}up(depChoice.value);var area=document.getElementById('dependency-reading');area.replaceChildren();N.filter(function(n){return set[n.id];}).forEach(function(n){var d=document.createElement('div');d.className='proof-step';var b=document.createElement('strong');b.textContent=n.t;var t=document.createElement('span');t.textContent=n.s;d.append(b,t);area.appendChild(d);});}
  depChoice.addEventListener('change',readDependency);readDependency();

  /* ---------------- C: play it ---------------- */
  var chat = document.getElementById('chat'), pathC = document.getElementById('pathC'), timers = [];
  function say(cls, who, html, wait) {
    return new Promise(function (res) {
      timers.push(setTimeout(function () {
        var m = document.createElement('div'); m.className = 'msg ' + cls;
        m.innerHTML = (who ? '<span class="who2">' + who + '</span>' : '') + html; chat.appendChild(m);
        res();
      }, reduce ? 0 : wait));
    });
  }
  function pick(label, opts, extra) {
    return new Promise(function (res) {
      var p = document.createElement('div'); p.className = 'picker';
      p.innerHTML = '<span>' + label + '</span>';
      opts.forEach(function (o) { var b = document.createElement('button'); b.type = 'button'; b.textContent = o; b.onclick = function () { p.remove(); res(o); }; p.appendChild(b); });
      if (extra) { var s = document.createElement('button'); s.className = 'inf'; s.textContent = extra; s.disabled = true; p.appendChild(s); }
      chat.appendChild(p);
    });
  }
  function play() {
    timers.forEach(clearTimeout); timers = []; chat.innerHTML = ''; pathC.textContent = '';
    var Nv, n0;
    say('o', 'Olivia', 'Your measure μ. Take axiom (M3) at <span class="m">ε = (2<sup>−n−1</sup>e<sub>n</sub>)</span>, the sequence built from the orthonormal basis. Use η = 1/8 for the displayed sum window.', 200)
    .then(function () { return say('j', 'Josh', '<span class="m">Σₙ μ(at(κₙε)) ∈ [1 − η, 1]</span>.', 900); })
    .then(function () { return say('o', 'Olivia', 'That is a countable sum. Name a positive <span class="m">N</span> whose partial sum is at least 3/4.', 1000); })
    .then(function () { return pick('You are Josh. Name N:', ['1', '2', '3', '5', '8', '13'], '… any N is legal'); })
    .then(function (v) { Nv = +v; return say('j', 'Josh', '<span class="m">N = ' + Nv + '</span>.', 100); })
    .then(function () { return say('sys', '', 'Every number was a legal answer here, so <b>the tree of plays branches infinitely</b> at this move.', 800); })
    .then(function () { return say('o', 'Olivia', 'Now each <span class="m">μ(at(κₙε))</span> for <span class="m">n &lt; ' + Nv + '</span>, near 0 or near 1, to within <span class="m">1/' + (4 * Nv) + '</span>.', 1100); })
    .then(function () { var o = []; for (var i = 0; i < Nv; i++) o.push('n₀ = ' + i); return pick('Which one is near 1?', o.slice(0, 13)); })
    .then(function (v) {
      n0 = +v.split('= ')[1]; var j = Math.floor(n0 / 4);
      pathC.textContent = 'This play: N = ' + Nv + ', n₀ = ' + n0 + ', block e' + 4 * j + '…e' + (4 * j + 3) + '.';
      return say('j', 'Josh', '<span class="m">μ(at(κ<sub>' + n0 + '</sub>ε)) ∈ [1 − 1/' + (4*Nv) + ', 1]</span>, and the others are near 0.', 100)
        .then(function () { return say('o', 'Olivia', 'By (K4), that atom is <span class="m">at(e<sub>' + n0 + '</sub>)</span>. So we work in the block <span class="m">e<sub>' + 4 * j + '</sub>, …, e<sub>' + (4 * j + 3) + '</sub></span>. Nine bases, eighteen rays, all inside it. Commit to each value.', 1100); });
    })
    .then(function () { return say('j', 'Josh', 'Refine the later commitments with δ = 1/16 and η = 1/8, so 4δ + η = 3/8 &lt; 1. Eighteen values, each in <span class="m">[0, δ]</span> or <span class="m">[1 − δ, 1]</span>; nine basis sums in <span class="m">[1 − η, 1 + η]</span>.', 1100); })
    .then(function () { return say('o', 'Olivia', '(K2), (At5) and (P4) identify every occurrence of a ray with the ray, and every basis span with the block; (OL2) carries μ along. Count the high values: nine by bases, an even number by rays.', 1300); })
    .then(function () { return say('sys', '', '<b>Josh loses.</b> The play stops at a leaf: a finite set of interval commitments and function records, each with the challenge that forced it, satisfied in no structure. Different answers lead to different leaves. None leads to a model.', 1300); });
  }
  var playRun=0;
  document.getElementById('restartC').addEventListener('click',function(){this.textContent='Restart this play';play();});
})();

(function () {
  const D = DATA18, NS = 'http://www.w3.org/2000/svg';
  const occ = Array.from({ length: 18 }, () => []);
  Object.entries(D.bases).forEach(([b, rs]) => rs.forEach((r, i) => occ[r].push([+b, i])));
  let selected = 0, cut = false;
  function node(tag, attrs = {}, parent) { const n = document.createElementNS(NS, tag); Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v)); if (parent) parent.append(n); return n; }
  function text(svg, x, y, s, attrs = {}) { const n = node('text', { x, y, ...attrs }, svg); n.textContent = s; return n; }
  function line(svg, x1, y1, x2, y2, attrs = {}) { return node('line', { x1, y1, x2, y2, ...attrs }, svg); }
  function title(n, s) { node('title', {}, n).textContent = s; }
  const ray = r => 'r' + (r + 1);
  const vector = r => '(' + D.rays[r].join(', ').replaceAll('-', '−') + ')';
  const val = (b, i) => D.removed[selected][(b - 1) * 4 + i];
  function keys(n, fn) { n.setAttribute('tabindex', '0'); n.setAttribute('role', 'button'); n.addEventListener('click', fn); n.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } }); }
  function draw() {
    const svg = document.getElementById('certificate'); svg.replaceChildren();
    const X = 110, DX = 39, Y = 86, DY = 35;
    node('rect', { x: X + selected * DX - 16, y: 33, width: 32, height: 375, rx: 8, class: 'column-highlight' }, svg);
    for (let r = 0; r < 18; r++) {
      const x = X + r * DX, g = node('g', { 'aria-label': 'Select ray ' + (r + 1) }, svg);
      keys(g, () => { selected = r; draw(); });
      text(g, x, 26, ray(r), { 'text-anchor': 'middle', class: r === selected ? 'ray-label active' : 'ray-label' }); title(g, vector(r));
      const ys = occ[r].map(([b]) => Y + (b - 1) * DY);
      if (cut && r === selected) { const mid = (ys[0] + ys[1]) / 2; line(svg, x, ys[0], x, mid - 9, { class: 'identity-cut' }); line(svg, x, mid + 9, x, ys[1], { class: 'identity-cut' }); text(svg, x, mid + 6, '×', { 'text-anchor': 'middle', class: 'cut-symbol' }); }
      else line(svg, x, ys[0], x, ys[1], { class: r === selected ? 'identity active' : 'identity' });
    }
    for (let b = 1; b <= 9; b++) {
      const y = Y + (b - 1) * DY;
      line(svg, 86, y, 805, y, { class: 'row-guide' }); text(svg, 19, y + 5, 'B' + b, { class: 'basis-label' });
      D.bases[b].forEach((r, i) => { const x = X + r * DX, high = cut && val(b, i);
        const c = node('circle', { cx: x, cy: y, r: high ? 7 : 5.5, class: high ? 'occurrence high' : (r === selected ? 'occurrence selected' : 'occurrence') }, svg);
        title(c, 'B' + b + ', ' + ray(r) + ' = ' + vector(r) + (cut ? '; value ' + val(b, i) : '')); });
      text(svg, 839, y + 5, '= 1', { 'text-anchor': 'middle', class: 'sum' });
    }
    text(svg, 839, 56, 'SUM', { 'text-anchor': 'middle', class: 'small-label' });
    text(svg, 110, 434, 'Rows: bases. Columns: rays. A vertical link is an identification of the two occurrences.', { class: 'annotation' });
    document.getElementById('ray-choice').value = selected;
    const t = document.getElementById('cut-toggle'); t.textContent = cut ? 'Restore the identification' : 'Omit this identification'; t.setAttribute('aria-pressed', String(cut));
    document.getElementById('selected-ray').textContent = ray(selected) + ' = ' + vector(selected) + ', in bases ' + occ[selected].map(x => x[0]).join(' and ');
    document.getElementById('certificate-status').innerHTML = cut
      ? '<strong>Satisfiable.</strong> With this one identification omitted, the filled occurrences give value 1 to exactly one occurrence in each basis, and the other seventeen identifications are respected.'
      : '<strong>No assignment exists.</strong> Each basis needs exactly one occurrence of value 1, and each identified ray contributes zero or two.';
    document.getElementById('ray-focus').innerHTML='<strong>'+ray(selected)+'</strong> · '+vector(selected)+'<br>B'+occ[selected][0][0]+' ↔ B'+occ[selected][1][0]+'<br>'+(cut?'Identification omitted: the two displayed occurrences have values '+val(occ[selected][0][0],occ[selected][0][1])+' and '+val(occ[selected][1][0],occ[selected][1][1])+'.':'The geometric identity requires the same probability in both contexts.');
    document.getElementById('count-bases').textContent = '9 × 1 = 9';
    document.getElementById('count-rays').textContent = cut ? '4 × 2 + 1 = 9' : 'even';
  }
  const choice = document.getElementById('ray-choice');
  for (let r = 0; r < 18; r++) { const o = document.createElement('option'); o.value = r; o.textContent = ray(r) + ' · ' + vector(r); choice.append(o); }
  choice.addEventListener('change', () => { selected = +choice.value; draw(); });
  document.getElementById('cut-toggle').addEventListener('click', () => { cut = !cut; draw(); });
  draw();
})();


(function(){const E=DATA49;let detached=false;const ray=document.getElementById('ray49'),basis=document.getElementById('basis49');
function draw(){const r=+ray.value,b=+basis.value,sol=detached?E.sols[r+':'+b]:null,grid=document.getElementById('grid49');grid.replaceChildren();E.tri.forEach((rs,k)=>{const tile=document.createElement('div');tile.className='basis-tile';const head=document.createElement('span');head.textContent='B'+(k+1);tile.append(head);rs.forEach((rr,i)=>{const dot=document.createElement('span');dot.className='ray-chip'+(rr===r?' related':'')+(sol&&sol[k]===i?' on':'')+(rr===r&&k===b?' detached':'');dot.textContent='r'+(rr+1);dot.title=E.labels[rr]+(sol?'; value '+Number(sol[k]===i):'; no value assigned');tile.append(dot);});grid.append(tile);});document.getElementById('result49').textContent=detached?'All 36 basis constraints hold. The detached occurrence differs from the retained occurrences of its ray; every other identification is respected.':'With all identifications retained, no assignment satisfies the 36 basis constraints. Select a shared ray and one of its occurrences, then detach it.';const btn=document.getElementById('detach49');btn.setAttribute('aria-pressed',String(detached));btn.textContent=detached?'Restore this occurrence':'Detach this occurrence';}
function fill(){basis.replaceChildren();E.ess.filter(x=>x[0]===+ray.value).forEach(x=>{const o=document.createElement('option');o.value=x[1];o.textContent='B'+(x[1]+1);basis.append(o);});draw();}
[...new Set(E.ess.map(x=>x[0]))].forEach(r=>{const o=document.createElement('option');o.value=r;o.textContent='r'+(r+1)+' · '+E.labels[r];ray.append(o);});ray.addEventListener('change',fill);basis.addEventListener('change',draw);document.getElementById('detach49').addEventListener('click',()=>{detached=!detached;draw();});fill();
const matrix=document.querySelector('.matrix');matrix.open=!matchMedia('(max-width:760px)').matches;
})();
