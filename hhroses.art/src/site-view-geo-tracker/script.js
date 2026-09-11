const SVG_URL  = 'images/maps/worldGreatLakesHigh.svg';
const COUNTER_URL = 'https://website-view-tracker.haileeho.workers.dev/';
const baseVisits = { IT: 1, FR: 1, FI: 1, US: 1, ES: 1, MX: 1 };
let visits = Object.assign({}, baseVisits);
const shade = n =>
  !n       ? 'var(--no-data)' :
  n === 1  ? 'var(--c1)' :
  n <= 5   ? 'var(--c2)' :
  n <= 20  ? 'var(--c3)' :
  n <= 100 ? 'var(--c4)' :
             'var(--c5)';
const mapEl = document.getElementById('map');
const tip   = document.getElementById('tip');
function paint() {
  const paths = mapEl.querySelectorAll('path[id]');
  if (!paths.length) return;
  paths.forEach(p => {
    const n = visits[p.id] || 0;
    p.setAttribute('fill', shade(n));
    if (n) p.setAttribute('data-hit', '');
    else   p.removeAttribute('data-hit');
  });
  let total = 0, active = 0, topId = null, topN = 0;
  for (const [code, n] of Object.entries(visits)) {
    if (!n) continue;
    total += n;
    active++;
    if (n > topN) { topN = n; topId = code; }
  }
  const topEl = topId && mapEl.querySelector('[id="' + topId + '"]');
  document.getElementById('s-countries').textContent = active;
  document.getElementById('s-views').textContent = total.toLocaleString();
  document.getElementById('s-top').textContent =
    topEl ? (topEl.dataset.name || topId) : '\u2014';
}
function nameFor(p) {
  return p.dataset.name || p.id;
}
function wireTooltip() {
  mapEl.addEventListener('mousemove', e => {
    const p = e.target.closest('path[id]');
    if (!p) { tip.style.opacity = 0; return; }
    const n = visits[p.id] || 0;
    tip.innerHTML = '<b>' + nameFor(p) + '</b> \u2014 ' + n + (n === 1 ? ' view' : ' views');
    tip.style.left = e.clientX + 'px';
    tip.style.top  = e.clientY + 'px';
    tip.style.opacity = 1;
  });
  mapEl.addEventListener('mouseleave', () => { tip.style.opacity = 0; });
}
window.listCountries = function () {
  const rows = {};
  mapEl.querySelectorAll('path[id]').forEach(p => {
    rows[p.id] = { country: nameFor(p), views: visits[p.id] || 0 };
  });
  console.table(rows);
  return Object.keys(rows).length + ' countries in the map';
};
window.addVisits = function (obj) {
  for (const [code, n] of Object.entries(obj)) {
    visits[code] = (visits[code] || 0) + n;
  }
  paint();
};
async function init() {
  // Fetch and inject the SVG map first!
  try {
    const svgRes = await fetch(SVG_URL);
    if (svgRes.ok) {
      mapEl.innerHTML = await svgRes.text();
    } else {
      mapEl.innerHTML = 'Failed to load map.';
      return; // Stop if the map fails to load
    }
  } catch (err) {
    mapEl.innerHTML = 'Error loading map.';
    console.error('SVG fetch error:', err);
    return;
  }
  // 2. Fetch the visitor counts from Cloudflare Worker
  try {
    const today = new Date().toISOString().slice(0, 10);
    const counted = localStorage.getItem('hhr-counted') === today;
    
    // If they haven't been counted today, log the hit first in the background
    if (!counted) {
      await fetch(COUNTER_URL + '/hit', { cache: 'no-store' });
      localStorage.setItem('hhr-counted', today);
    }
    // Always fetch the full data object from /counts to paint the map
    const live = await fetch(COUNTER_URL + '/counts', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : null);
    // only loop through the 'countries' section of the new data structure
    if (live && live.countries) {
      for (const [code, n] of Object.entries(live.countries)) {
        visits[code] = Math.max(visits[code] || 0, Number(n) || 0);
      }
    }
  } catch (err) {
    console.error('counter unavailable:', err);
  }
  
  paint();
  wireTooltip();
}

init();