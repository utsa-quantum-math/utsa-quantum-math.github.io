/* Progressive enhancement. Without JS every translation reading is shown and the
   static response figure stays in place; the step laboratories stay hidden. */
(() => {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  function element(name, attrs, text) {
    const el = document.createElementNS(NS, name);
    Object.entries(attrs || {}).forEach(([key, value]) => el.setAttribute(key, String(value)));
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function html(tag, attrs, text) {
    const el = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => el.setAttribute(key, String(value)));
    if (text !== undefined) el.textContent = text;
    return el;
  }
  const label = (svg, x, y, t, fill, size, anchor) =>
    svg.append(element('text', {x, y, fill: fill || '#5e2a6e', 'font-family': 'Georgia,serif', 'font-size': size || 14, 'text-anchor': anchor || 'start'}, t));

  /* ── Translation hub: one control (the subject buttons), reading beside it. ── */
  const buttons = [...document.querySelectorAll('[data-translation]')];
  const readings = [...document.querySelectorAll('[data-reading]')];
  const spokes = [...document.querySelectorAll('[data-spoke]')];
  const panel = document.querySelector('.translation-readings');
  function selectTranslation(id, reveal) {
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.translation === id)));
    readings.forEach(r => r.classList.toggle('is-current', r.dataset.reading === id));
    spokes.forEach(s => s.classList.toggle('is-selected', s.dataset.spoke === id));
    if (reveal && panel) {
      const box = panel.getBoundingClientRect();
      if (box.top > window.innerHeight - 80 || box.bottom < 80) panel.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    }
  }
  if (buttons.length && panel) {
    buttons.forEach(b => b.addEventListener('click', () => selectTranslation(b.dataset.translation, true)));
    panel.classList.add('is-interactive');
    const fromHash = location.hash.startsWith('#translation-') && location.hash.slice(13);
    selectTranslation(readings.some(r => r.dataset.reading === fromHash) ? fromHash : 'quantum', false);
  }

  /* ── Step laboratories ── */
  function lab(id, title) {
    const box = document.querySelector(`.step-lab[data-lab="${id}"]`);
    if (!box) return null;
    box.hidden = false;
    box.append(html('h4', {}, title));
    return box;
  }

  // 01 Topology and probability: intervals shatter two points, never three.
  (box => {
    if (!box) return;
    const positions = 7, chosen = new Set([1, 3, 5]);
    const svg = html('div'), controls = html('div', {class: 'lab-controls'}), text = html('p');
    box.append(svg, controls, text);
    const pick = html('span', {}, 'Choose points:');
    controls.append(pick);
    const toggles = [...Array(positions)].map((_, i) => {
      const b = html('button', {type: 'button', 'aria-pressed': chosen.has(i)}, String(i + 1));
      b.addEventListener('click', () => {
        if (chosen.has(i)) { if (chosen.size > 1) chosen.delete(i); } else if (chosen.size < 5) chosen.add(i);
        draw();
      });
      controls.append(b);
      return b;
    });
    function draw() {
      toggles.forEach((b, i) => b.setAttribute('aria-pressed', String(chosen.has(i))));
      const pts = [...chosen].sort((a, b) => a - b), n = pts.length, total = 1 << n;
      const cols = Math.min(total, box.clientWidth < 520 ? 8 : 16), rows = Math.ceil(total / cols);
      const W = 600, cell = W / cols, H = 40 + rows * 34;
      const s = element('svg', {viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': `The ${total} subsets of ${n} chosen points; filled frames are cut out by an interval`});
      let realized = 0;
      for (let m = 0; m < total; m++) {
        const bits = pts.map((_, k) => (m >> k) & 1);
        const ones = bits.map((b, k) => b ? k : -1).filter(k => k >= 0);
        const ok = ones.length === 0 || ones[ones.length - 1] - ones[0] + 1 === ones.length;
        if (ok) realized++;
        const cx = (m % cols) * cell, cy = 40 + Math.floor(m / cols) * 34;
        s.append(element('rect', {x: cx + 3, y: cy - 10, width: cell - 6, height: 26, rx: 4, fill: ok ? '#fbe3ee' : 'none', stroke: ok ? '#bb246c' : '#d8cddd'}));
        const step = (cell - 12) / n;
        bits.forEach((b, k) => s.append(element('circle', {cx: cx + 6 + step * (k + .5), cy: cy + 3, r: Math.min(4.5, step / 2.6), fill: b ? '#bb246c' : '#fff', stroke: '#bb246c', 'stroke-width': 1.3})));
      }
      label(s, 2, 16, `${total} subsets of ${n} points; an interval cuts out ${realized}.`, '#5e2a6e', 14);
      svg.replaceChildren(s);
      const bound = 1 + n + n * (n - 1) / 2;
      text.textContent = n <= 2
        ? `Intervals cut out every subset of ${n} point${n > 1 ? 's' : ''}: the points are shattered.`
        : `No interval contains the outer points without the inner ones, so ${n} points are never shattered. The VC dimension of intervals is 2, and the count ${realized} equals the Sauer–Shelah bound 1 + n + n(n − 1)/2 = ${bound}, a polynomial in n against 2ⁿ = ${total}.`;
    }
    draw();
  })(lab('topology', 'Try it: shattering with intervals'));

  // 02 Banach geometry: the Rademacher functions realize every sign prescription.
  (box => {
    if (!box) return;
    const K = 4, signs = [1, -1, 1, 1];
    const fig = html('div'), controls = html('div', {class: 'lab-controls'}), text = html('p');
    box.append(fig, controls, text);
    controls.append(html('span', {}, 'Prescribe signs:'));
    const toggles = signs.map((_, k) => {
      const b = html('button', {type: 'button'});
      b.addEventListener('click', () => { signs[k] *= -1; draw(); });
      controls.append(b);
      return b;
    });
    const r = (k, t) => (Math.floor(t * 2 ** (k + 1)) % 2 === 0 ? 1 : -1);
    function draw() {
      toggles.forEach((b, k) => { b.textContent = `r${'₁₂₃₄'[k]} ${signs[k] > 0 ? '+' : '−'}`; b.setAttribute('aria-pressed', String(signs[k] > 0)); });
      const W = 600, L = 40, R = 590, rowH = 46, H = 20 + K * rowH;
      const s = element('svg', {viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Four Rademacher functions on the unit interval; the shaded interval realizes the prescribed signs'});
      let lo = 0, hi = 1;
      for (let k = 0; k < K; k++) { const half = (hi - lo) / 2; if (signs[k] > 0) hi = lo + half; else lo = lo + half; }
      const x = t => L + (R - L) * t;
      s.append(element('rect', {x: x(lo), y: 4, width: x(hi) - x(lo), height: H - 8, fill: '#d8f0f1'}));
      for (let k = 0; k < K; k++) {
        const y0 = 16 + k * rowH + rowH / 2, amp = 14;
        let d = '';
        const steps = 2 ** (k + 1);
        for (let j = 0; j < steps; j++) { const v = r(k, (j + .5) / steps); d += `${j ? 'L' : 'M'}${x(j / steps)} ${y0 - amp * v}H${x((j + 1) / steps)}`; }
        s.append(element('path', {d: `M${L} ${y0}H${R}`, stroke: '#e1d7e6'}));
        s.append(element('path', {d, fill: 'none', stroke: '#007f89', 'stroke-width': 2}));
        label(s, 6, y0 + 5, `r${'₁₂₃₄'[k]}`, '#007f89', 15);
      }
      fig.replaceChildren(s);
      text.textContent = `Every one of the 2⁴ = 16 sign prescriptions holds on its own interval of length 1/16, here [${lo.toFixed(4)}, ${hi.toFixed(4)}). The sequence is independent, and for real coefficients the supremum norm of Σ aₖrₖ is Σ |aₖ|: the ℓ₁ norm.`;
    }
    draw();
  })(lab('geometry', 'Try it: an independent sequence'));

  // 03 Algebra and dynamics: an irrational rotation never converges, yet returns.
  (box => {
    if (!box) return;
    const alpha = (Math.sqrt(5) - 1) / 2, returns = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
    const fig = html('div'), controls = html('div', {class: 'lab-controls'}), text = html('p');
    box.append(fig, controls, text);
    const slider = html('input', {type: 'range', min: 1, max: 233, value: 13, 'aria-label': 'Iteration time n'});
    const out = html('output', {}, '');
    const jump = html('button', {type: 'button'}, 'Next return time');
    controls.append(html('span', {}, 'Time n:'), slider, out, jump);
    const dist = n => { const f = (n * alpha) % 1; return Math.min(f, 1 - f); };
    function draw() {
      const n = Number(slider.value);
      out.textContent = n;
      const W = 600, H = 200, cx = 100, cy = 100, R = 78;
      const s = element('svg', {viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': `Rotation by the golden angle iterated ${n} times`});
      s.append(element('circle', {cx, cy, r: R, fill: 'none', stroke: '#d8cddd'}));
      for (let j = 0; j < 12; j++) {
        const a = 2 * Math.PI * j / 12, b = a + 2 * Math.PI * n * alpha;
        s.append(element('circle', {cx: cx + R * Math.cos(a), cy: cy + R * Math.sin(a), r: 3, fill: '#d8cddd'}));
        s.append(element('circle', {cx: cx + R * Math.cos(b), cy: cy + R * Math.sin(b), r: 4.5, fill: '#a44a00'}));
      }
      const L = 220, Rr = 590, top = 20, bottom = 170, x = m => L + (Rr - L) * (m - 1) / 232, y = v => bottom - (bottom - top) * v / .5;
      s.append(element('path', {d: `M${L} ${top}V${bottom}H${Rr}`, stroke: '#c9bdd0', fill: 'none'}));
      for (let m = 1; m <= 233; m++) s.append(element('circle', {cx: x(m), cy: y(dist(m)), r: returns.includes(m) ? 3.4 : 1.4, fill: returns.includes(m) ? '#a44a00' : '#cbb9d3'}));
      s.append(element('path', {d: `M${x(n)} ${top}V${bottom}`, stroke: '#a44a00', 'stroke-dasharray': '3 3'}));
      label(s, L, 14, 'distance of the n-th iterate from the identity', '#5e2a6e', 13);
      label(s, Rr, 190, 'n', '#5e2a6e', 13, 'end');
      fig.replaceChildren(s);
      text.textContent = `The iterates Tⁿ wander and never converge. Along the return times 1, 2, 3, 5, 8, 13, … they converge to the identity (now ${dist(n).toFixed(4)} away), an idempotent of the enveloping semigroup: composing it with itself changes nothing.`;
    }
    slider.addEventListener('input', draw);
    jump.addEventListener('click', () => { const n = Number(slider.value); slider.value = returns.find(q => q > n) || 1; draw(); });
    draw();
  })(lab('dynamics', 'Try it: limits become operations'));

  // 05 Computation: the same Newton update on real and imaginary inputs.
  (box => {
    if (!box) return;
    let imaginary = true;
    const fig = html('div'), controls = html('div', {class: 'lab-controls'}), text = html('p');
    box.append(fig, controls, text);
    const real = html('button', {type: 'button'}, 'Real input x'), imag = html('button', {type: 'button'}, 'Imaginary input it');
    const slider = html('input', {type: 'range', min: -3, max: 3, step: .01, value: .37, 'aria-label': 'Starting value'});
    const out = html('output');
    controls.append(real, imag, slider, out);
    const steps = 30;
    function orbit(v) {
      // z = v (real) or z = iv (imaginary); N(z) = (z + 1/z)/2 keeps each axis invariant.
      const obs = [];
      let w = v, inf = false;
      for (let k = 0; k <= steps; k++) {
        obs.push(inf ? 0 : 2 * w / (1 + w * w));
        if (inf || w === 0) { inf = true; continue; }
        w = imaginary ? (w - 1 / w) / 2 : (w + 1 / w) / 2;
        if (!isFinite(w)) inf = true;
      }
      return obs;
    }
    function draw() {
      const v = Number(slider.value);
      real.setAttribute('aria-pressed', String(!imaginary)); imag.setAttribute('aria-pressed', String(imaginary));
      out.textContent = imaginary ? `t = ${v.toFixed(2)}` : `x = ${v.toFixed(2)}`;
      const obs = orbit(v), W = 600, H = 190, L = 40, R = 590, top = 20, bottom = 160;
      const x = k => L + (R - L) * k / steps, y = o => (top + bottom) / 2 - (bottom - top) / 2 * o;
      const s = element('svg', {viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Observed values along the Newton orbit'});
      for (const o of [-1, 0, 1]) s.append(element('path', {d: `M${L} ${y(o)}H${R}`, stroke: o ? '#ece4ef' : '#c9bdd0'}));
      for (const o of [-.5, .5]) s.append(element('path', {d: `M${L} ${y(o)}H${R}`, stroke: '#cbb9d3', 'stroke-dasharray': '4 4'}));
      s.append(element('polyline', {points: obs.map((o, k) => `${x(k)},${y(o)}`).join(' '), fill: 'none', stroke: '#b8b0dd', 'stroke-width': 1.2}));
      obs.forEach((o, k) => s.append(element('circle', {cx: x(k), cy: y(o), r: k % 3 ? 2.2 : 4, fill: k % 3 ? '#b8b0dd' : '#6550bd'})));
      label(s, 6, y(1) + 5, '+1', '#5e2a6e', 13); label(s, 6, y(-1) + 5, '−1', '#5e2a6e', 13);
      label(s, R, 182, 'iteration time (times 0, 3, 6, … in bold)', '#5e2a6e', 12, 'end');
      fig.replaceChildren(s);
      text.textContent = imaginary
        ? 'On imaginary inputs it, with t = cot θ, the update doubles the angle θ and the observation is sin 2θ. The observed orbit never settles, and by choosing t one realizes any finite high–low request at times 0, 3, 6, and so on.'
        : 'On real inputs the observed values move monotonically towards their limit, so they settle: the real domain excludes independence.';
    }
    real.addEventListener('click', () => { imaginary = false; draw(); });
    imag.addEventListener('click', () => { imaginary = true; draw(); });
    slider.addEventListener('input', draw);
    draw();
  })(lab('computation', 'Try it: one Newton update, two behaviors'));

  /* ── 04 Quantum: the single-spin response plot ── */
  const betaSlider = document.querySelector('#response-beta');
  const offsetSlider = document.querySelector('#response-offset');
  const plot = document.querySelector('#response-diagram');
  if (!betaSlider || !offsetSlider || !plot) return;
  function redraw() {
    const beta = Number(betaSlider.value), a = Number(offsetSlider.value);
    const x = h => 55 + (h + 2) * 125;
    const y = m => 195 - 140 * m;
    const svg = element('svg', {viewBox:'0 0 600 420',role:'img','aria-labelledby':'response-title response-desc'});
    svg.append(element('title',{id:'response-title'},`Single-spin response with inverse thermal energy ${beta} and offset ${a}`));
    svg.append(element('desc',{id:'response-desc'},'Continuous S-shaped response curves are ordered by their offsets. The selected pink curve sharpens towards the purple jump branches as inverse thermal energy increases. The limiting response is zero exactly at its transition.'));
    svg.append(element('path',{d:'M55 35V350 M55 195H565',stroke:'#c9bdd0',fill:'none'}));
    for (const value of [-1,1]) svg.append(element('path',{d:`M55 ${y(value)}H555`,stroke:'#e1d7e6',fill:'none'}));
    function curve(offset, color, width) {
      const points = Array.from({length:801},(_,i) => { const h=-2+i/200;return `${x(h)},${y(Math.tanh(beta*(h-offset)))}`; }).join(' ');
      svg.append(element('polyline',{points,fill:'none',stroke:color,'stroke-width':width}));
    }
    for (const offset of [-.6,0,.6]) curve(offset,'#bca2cf',1.4);
    curve(a,'#bb246c',3);
    svg.append(element('path',{d:`M55 ${y(-1)}H${x(a)-4} M${x(a)+4} ${y(1)}H555`,stroke:'#5e2a6e','stroke-width':2.5,fill:'none'}));
    for (const [tx,ty,t] of [[20,61,'+1'],[20,201,'0'],[20,341,'−1'],[46,376,'−2'],[300,376,'0'],[550,376,'2'],[572,201,'h']])
      svg.append(element('text',{x:tx,y:ty,fill:'#5e2a6e','font-family':'Georgia,serif','font-size':16},t));
    svg.append(element('text',{x:100,y:24,fill:'#5e2a6e','font-family':'Georgia,serif','font-size':17},`β = ${beta},  a = ${a.toFixed(2)};  limiting value at h = a: 0`));
    svg.append(element('text',{x:55,y:407,fill:'#bb246c','font-family':'Arial,sans-serif','font-size':13},'Pink: selected response'));
    svg.append(element('text',{x:300,y:407,fill:'#5e2a6e','font-family':'Arial,sans-serif','font-size':13},'Purple: limiting branches'));
    plot.replaceChildren(svg);
    document.querySelector('#response-beta-value').textContent=beta;
    document.querySelector('#response-offset-value').textContent=a.toFixed(2);
    document.querySelector('#response-values').textContent=`At h = −0.5: ${Math.tanh(beta*(-.5-a)).toFixed(3)}. At h = 0.5: ${Math.tanh(beta*(.5-a)).toFixed(3)}. At h = a: always 0.`;
  }
  document.querySelector('.limit-controls').hidden=false;
  betaSlider.addEventListener('input',redraw);
  offsetSlider.addEventListener('input',redraw);
  redraw();
})();
