// Dark mode injection script — run with: node inject_darkmode.js
// Injects dark mode CSS, toggle button, and JS into all target pages.
// Does NOT commit to git — local only.

const fs = require('fs');
const path = require('path');
const base = path.join(__dirname);

// ── Shared dark mode CSS (appended after last </style> in <head>) ────────────
const DARK_CSS = `
/* ── VER Dark Mode ── */
[data-theme="dark"]{
  --gray:#0D1626;--gray2:#111F35;--gray3:#1A2D47;
  --white:#0F1E3C;--border:#1E3A5F;--border2:#243E60;
  --ink:#EFF6FF;--ink2:#C7D9F0;--ink3:#8BAACF;--ink4:#5A7899;
  --navy3:#0F1E3C;--navy2:#1E3A5F;
  --teal3:rgba(13,148,136,0.15);--green3:rgba(5,150,105,0.15);
  --amber3:rgba(217,119,6,0.15);--red3:rgba(220,38,38,0.15);
  --purple3:rgba(124,58,237,0.15);--orange3:rgba(234,88,12,0.15);
  --blue3:rgba(37,99,235,0.15);
}
[data-theme="dark"] body{background:var(--gray);color:var(--ink2);}
[data-theme="dark"] .card,[data-theme="dark"] .stat{background:var(--gray2);border-color:var(--border);}
[data-theme="dark"] .card-title,[data-theme="dark"] .stat-val{color:var(--ink);}
[data-theme="dark"] .vp-table th{background:#162942;}
[data-theme="dark"] .vp-table td,[data-theme="dark"] .vp-table tr:hover td{background:var(--gray2);}
[data-theme="dark"] .vp-table tr:hover td{background:var(--gray3);}
[data-theme="dark"] .callout.info,[data-theme="dark"] .c-info{background:#0F1E3C;border-left-color:var(--navy2);color:var(--ink3);}
[data-theme="dark"] .callout.teal,[data-theme="dark"] .c-teal{background:rgba(13,148,136,0.12);}
[data-theme="dark"] .callout.amber,[data-theme="dark"] .c-amber{background:rgba(217,119,6,0.12);}
[data-theme="dark"] input,[data-theme="dark"] select,[data-theme="dark"] textarea{
  background:var(--gray2)!important;color:var(--ink2)!important;border-color:var(--border2)!important;}
[data-theme="dark"] .back-btn,[data-theme="dark"] .back{
  background:var(--gray2);border-color:var(--border2);color:var(--ink3);}
[data-theme="dark"] .hub-nav,[data-theme="dark"] .page-wrap>.top-bar{border-bottom-color:var(--border);}
.dm-toggle{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;
  border-radius:20px;border:1px solid var(--border2);background:var(--gray2);
  color:var(--ink4);font-size:7.5pt;font-weight:700;cursor:pointer;
  font-family:inherit;transition:all 0.15s;white-space:nowrap;}
.dm-toggle:hover{background:var(--navy);color:#fff;border-color:var(--navy);}
[data-theme="dark"] .dm-toggle{background:rgba(13,148,136,0.18);border-color:rgba(13,148,136,0.4);color:#0D9488;}
`;

// ── Dark mode JS (inserted before last </script>) ────────────────────────────
const DARK_JS = `
function _dmToggle(){
  var t=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',t);
  try{localStorage.setItem('ver-theme',t);}catch(e){}
  var btn=document.getElementById('dm-btn');
  if(btn) btn.innerHTML=t==='dark'?'&#9790; Light Mode':'&#9789; Dark Mode';
}
(function(){
  var t;try{t=localStorage.getItem('ver-theme');}catch(e){}
  if(!t) t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
  document.documentElement.setAttribute('data-theme',t);
  var btn=document.getElementById('dm-btn');
  if(btn) btn.innerHTML=t==='dark'?'&#9790; Light Mode':'&#9789; Dark Mode';
})();
`;

// ── Toggle button HTML ────────────────────────────────────────────────────────
const TOGGLE_BTN = `<button type="button" class="dm-toggle" id="dm-btn" onclick="_dmToggle()">&#9789; Dark Mode</button>`;

// ── Hub pages: top-bar pattern — insert toggle after the first back-btn/title div ─
// ── Vendor pages: vp-side nav pattern — insert toggle in vp-main top area ────

function injectHub(html, file) {
  // 1. Add data-theme to <html>
  html = html.replace(/<html(\s[^>]*)?>/, (m, attrs) => {
    if ((attrs||'').includes('data-theme')) return m;
    return `<html${attrs||''} data-theme="light">`;
  });

  // 2. Inject CSS before last </style> in <head>
  const styleClose = html.indexOf('</style>');
  if (styleClose === -1) { console.log('SKIP (no </style>):', file); return html; }
  html = html.slice(0, styleClose) + DARK_CSS + '</style>' + html.slice(styleClose + 8);

  // 3. Inject toggle button into top-bar right side
  // Find the top-bar div and look for the rightmost div (after the title block)
  // Pattern: the top-bar typically ends with a print/date div before closing </div></div>
  // We'll append the toggle before the closing </div> of the top-bar's right section
  // Strategy: insert after first back-btn closing or after page title block
  if (html.includes('class="top-bar"') || html.includes("class='top-bar'")) {
    // Insert toggle button before the closing </div> of the top-bar
    html = html.replace(
      /(<div[^>]*class=["']top-bar["'][^>]*>[\s\S]*?)((<\/div>\s*){2})/,
      (m, inner, closing) => inner + TOGGLE_BTN + closing
    );
  }

  // 4. Inject JS before last </script>
  const lastScript = html.lastIndexOf('</script>');
  if (lastScript !== -1) {
    html = html.slice(0, lastScript) + DARK_JS + '</script>' + html.slice(lastScript + 9);
  }

  return html;
}

function injectVendor(html, file) {
  // 1. data-theme on <html>
  html = html.replace(/<html(\s[^>]*)?>/, (m, attrs) => {
    if ((attrs||'').includes('data-theme')) return m;
    return `<html${attrs||''} data-theme="light">`;
  });

  // 2. CSS
  const styleClose = html.indexOf('</style>');
  if (styleClose === -1) { console.log('SKIP (no </style>):', file); return html; }
  html = html.slice(0, styleClose) + DARK_CSS + '</style>' + html.slice(styleClose + 8);

  // For vendor pages also add dark sidebar compatibility
  const vendorDark = `
[data-theme="dark"] .vp-side{background:#060e1c;}
[data-theme="dark"] .vp-main{background:var(--gray);}
[data-theme="dark"] .vp-card,[data-theme="dark"] .vs-card,
[data-theme="dark"] .vi-card,[data-theme="dark"] .vc-card{background:var(--gray2);border-color:var(--border);}
[data-theme="dark"] .search-input,[data-theme="dark"] .filter-select,
[data-theme="dark"] .vp-filter-select,[data-theme="dark"] .vp-search{
  background:var(--gray2)!important;color:var(--ink2)!important;border-color:var(--border2)!important;}
`;
  // Insert vendorDark right after DARK_CSS was injected (already inside </style>)
  // Re-do: append vendorDark before the </style> we just moved past
  const sc2 = html.indexOf('</style>');
  html = html.slice(0, sc2) + vendorDark + '</style>' + html.slice(sc2 + 8);

  // 3. Toggle button — insert in vp-main header area (after first <div class="vp-main">)
  html = html.replace(
    /(<div[^>]*class=["']vp-main["'][^>]*>)/,
    `$1\n<div style="display:flex;justify-content:flex-end;margin-bottom:8px;">${TOGGLE_BTN}</div>`
  );

  // 4. JS
  const lastScript = html.lastIndexOf('</script>');
  if (lastScript !== -1) {
    html = html.slice(0, lastScript) + DARK_JS + '</script>' + html.slice(lastScript + 9);
  }

  return html;
}

// ── Hub pages ────────────────────────────────────────────────────────────────
const hubPages = [
  'page_exec.html','page_renewal.html','page_governance.html',
  'page_tco.html','page_pillar_detail.html','page_pillar_pl.html',
  'page_sow.html','page_savings.html','page_consumption.html',
  'page_market.html','page_ma.html','page_mft.html','spend_benchmarking.html'
];

// ── Vendor pages ─────────────────────────────────────────────────────────────
const vendorPages = [
  'vendor_home.html','vendor_registry.html','vendor_risk.html',
  'vendor_selector.html','vendor_detail.html'
];

let ok=0, skip=0;
for (const f of hubPages) {
  const fp = path.join(base, f);
  if (!fs.existsSync(fp)) { console.log('MISSING:', f); skip++; continue; }
  let html = fs.readFileSync(fp, 'utf8');
  if (html.includes('_dmToggle')) { console.log('ALREADY DONE:', f); ok++; continue; }
  html = injectHub(html, f);
  fs.writeFileSync(fp, html);
  console.log('hub ✓', f);
  ok++;
}

for (const f of vendorPages) {
  const fp = path.join(base, f);
  if (!fs.existsSync(fp)) { console.log('MISSING:', f); skip++; continue; }
  let html = fs.readFileSync(fp, 'utf8');
  if (html.includes('_dmToggle')) { console.log('ALREADY DONE:', f); ok++; continue; }
  html = injectVendor(html, f);
  fs.writeFileSync(fp, html);
  console.log('vendor ✓', f);
  ok++;
}

console.log(`\nDone: ${ok} processed, ${skip} skipped`);
