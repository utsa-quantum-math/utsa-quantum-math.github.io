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
  document.querySelector('.translation-readings').classList.add('is-interactive');
  selectTranslation('quantum');

  const slider = document.querySelector('#limit-exponent');
  const plot = document.querySelector('#limit-diagram');
  if (!slider || !plot) return;
  const NS = 'http://www.w3.org/2000/svg';
  function element(name, attrs, text) {
    const el = document.createElementNS(NS, name);
    Object.entries(attrs || {}).forEach(([key, value]) => el.setAttribute(key, String(value)));
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function redraw() {
    const n = Number(slider.value);
    const svg = element('svg', {viewBox:'0 0 600 420',role:'img','aria-labelledby':'power-plot-title power-plot-desc'});
    svg.append(element('title',{id:'power-plot-title'},`The continuous function x to the power ${n} and its pointwise limiting graph`));
    svg.append(element('desc',{id:'power-plot-desc'},'The purple curve is continuous and equals one at input one. The pink limiting graph is zero below one and one at one. An open circle excludes the point one comma zero.'));
    svg.append(element('path',{d:'M55 40V350H555',stroke:'#c9bdd0',fill:'none'}));
    svg.append(element('path',{d:'M55 60H555',stroke:'#ded2e5','stroke-dasharray':'2 7',fill:'none'}));
    for (const power of [1,2,4,8,16,32,64]) {
      const points = Array.from({length:401},(_,i)=>`${55+500*i/400},${350-290*(i/400)**power}`).join(' ');
      svg.append(element('polyline',{points,fill:'none',stroke:'#cbb3d9','stroke-width':1,opacity:.55}));
    }
    const points = Array.from({length:601},(_,i)=>`${55+500*i/600},${350-290*(i/600)**n}`).join(' ');
    svg.append(element('polyline',{points,fill:'none',stroke:'#5e2a6e','stroke-width':3}));
    svg.append(element('path',{d:'M55 350H549',stroke:'#bb246c','stroke-width':3,fill:'none'}));
    svg.append(element('circle',{cx:555,cy:350,r:5.5,fill:'#fdfcfa',stroke:'#bb246c','stroke-width':2}));
    svg.append(element('circle',{cx:555,cy:60,r:5.5,fill:'#bb246c'}));
    for (const [x,y,t] of [[50,380,'0'],[551,380,'1'],[25,66,'1'],[175,87,`fₙ(x) = xⁿ,  n = ${n}`]])
      svg.append(element('text',{x,y,fill:'#5e2a6e','font-family':'Georgia,serif','font-size':18},t));
    svg.append(element('text',{x:55,y:408,fill:'#5e2a6e','font-family':'Arial,sans-serif','font-size':14},'Purple: selected continuous function'));
    svg.append(element('text',{x:330,y:408,fill:'#bb246c','font-family':'Arial,sans-serif','font-size':14},'Pink: pointwise limit'));
    plot.replaceChildren(svg);
    document.querySelector('#limit-n').textContent = n;
    document.querySelector('#limit-values').textContent = `At x = 0.9: ${(0.9**n).toPrecision(3)}. At x = 0.99: ${(0.99**n).toPrecision(3)}. At x = 1: always 1.`;
  }
  document.querySelector('.limit-controls').hidden = false;
  slider.addEventListener('input',redraw);
  redraw();
})();
