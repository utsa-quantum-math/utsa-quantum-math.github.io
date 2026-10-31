/* Progressive enhancement. All translation readings remain available without JS. */
(() => {
  'use strict';
  const buttons = [...document.querySelectorAll('[data-translation]')];
  const readings = [...document.querySelectorAll('[data-reading]')];
  const spokes = [...document.querySelectorAll('[data-spoke]')];
  function selectTranslation(id) {
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.translation === id)));
    readings.forEach(r => { const current = r.dataset.reading === id; r.classList.toggle('is-current', current); r.open = current; });
    spokes.forEach(s => s.classList.toggle('is-selected', s.dataset.spoke === id));
  }
  buttons.forEach(b => b.addEventListener('click', () => selectTranslation(b.dataset.translation)));
  readings.forEach(r => r.addEventListener('toggle', () => { if (r.open) selectTranslation(r.dataset.reading); }));
  // The subject is a view, not a prerequisite or an implication arrow.
  document.querySelector('.translation-readings')?.classList.add('is-interactive');
  selectTranslation('quantum');

  const betaSlider = document.querySelector('#response-beta');
  const offsetSlider = document.querySelector('#response-offset');
  const plot = document.querySelector('#response-diagram');
  if (!betaSlider || !offsetSlider || !plot) return;
  const NS = 'http://www.w3.org/2000/svg';
  function element(name, attrs, text) {
    const el = document.createElementNS(NS, name);
    Object.entries(attrs || {}).forEach(([key, value]) => el.setAttribute(key, String(value)));
    if (text !== undefined) el.textContent = text;
    return el;
  }
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
