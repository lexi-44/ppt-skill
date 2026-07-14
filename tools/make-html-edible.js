const fs = require('fs');
const path = require('path');

const [sourcePath, outputPath] = process.argv.slice(2);

if (!sourcePath || !outputPath) {
  console.error('Usage: node tools/make-html-edible.js <source.html> <output.html>');
  process.exit(1);
}

const sourceDir = path.dirname(sourcePath);
let html = fs.readFileSync(sourcePath, 'utf8');

html = html.replace(/<!-- saved from url=.*?-->\s*/s, '');

const mimeByExt = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

html = html.replace(/src=(["'])(\.\/HTML提案_files\/[^"']+)\1/g, (match, quote, rel) => {
  const assetPath = path.join(sourceDir, rel.replace(/^\.\//, ''));
  if (!fs.existsSync(assetPath)) return match;
  const ext = path.extname(assetPath).toLowerCase();
  const mime = mimeByExt[ext] || 'application/octet-stream';
  const data = fs.readFileSync(assetPath).toString('base64');
  return `src=${quote}data:${mime};base64,${data}${quote}`;
});

html = html.replace(/<html([^>]*)>/, '<html$1 data-deck-id="jac-html-edible">');
html = html.replace(/<title>(.*?)<\/title>/, '<title>$1｜Editable HTML</title>');
html = html.replace(/<main>/, '<main id="deckRoot">');

const editableCss = `

    /* === HTML Edible runtime additions === */
    :root {
      --deck-chrome-bg: rgba(13, 13, 11, .94);
      --deck-chrome-border: rgba(248, 241, 232, .2);
      --deck-chrome-text: #f8f1e8;
      --deck-chrome-muted: rgba(248, 241, 232, .66);
      --deck-chrome-accent: #ff6b1a;
      --deck-chrome-surface: rgba(30, 29, 24, .94);
      --deck-chrome-shadow: 0 18px 48px rgba(0, 0, 0, .42);
    }

    html, body {
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      scroll-snap-type: y mandatory;
    }

    main#deckRoot {
      display: block;
      gap: 0;
      padding: 0;
    }

    main#deckRoot > .slide {
      width: 100vw;
      height: 100vh;
      height: 100dvh;
      min-height: 0;
      max-width: none;
      aspect-ratio: auto;
      margin: 0;
      box-shadow: none;
      scroll-snap-align: start;
    }

    .deck-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 0;
      height: 3px;
      z-index: 9999;
      background: linear-gradient(90deg, var(--deck-chrome-accent), #f8f1e8);
      pointer-events: none;
    }

    .deck-toolbar {
      position: fixed;
      top: 12px;
      left: 12px;
      z-index: 10000;
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 8px;
      border: 1px solid var(--deck-chrome-border);
      border-radius: 10px;
      background: var(--deck-chrome-bg);
      color: var(--deck-chrome-text);
      box-shadow: var(--deck-chrome-shadow);
      opacity: .12;
      transition: opacity .2s ease;
    }

    .deck-toolbar:hover,
    body.deck-edit-mode .deck-toolbar,
    body.deck-sidebar-open .deck-toolbar {
      opacity: 1;
    }

    .deck-toolbar button,
    .deck-sidebar button {
      appearance: none;
      border: 1px solid var(--deck-chrome-border);
      border-radius: 8px;
      background: var(--deck-chrome-surface);
      color: var(--deck-chrome-text);
      font: 700 12px/1 "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
      padding: 8px 10px;
      cursor: pointer;
    }

    .deck-toolbar button:hover,
    .deck-sidebar button:hover {
      border-color: var(--deck-chrome-accent);
      color: #fff;
    }

    .deck-toolbar .is-active {
      background: var(--deck-chrome-accent);
      color: #10100e;
    }

    .deck-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9998;
      width: min(360px, 86vw);
      height: 100vh;
      padding: 58px 14px 16px;
      border-left: 1px solid var(--deck-chrome-border);
      background: var(--deck-chrome-bg);
      color: var(--deck-chrome-text);
      box-shadow: var(--deck-chrome-shadow);
      transform: translateX(104%);
      transition: transform .22s ease;
      overflow-y: auto;
    }

    body.deck-sidebar-open .deck-sidebar {
      transform: translateX(0);
    }

    .deck-sidebar h2 {
      margin: 0 0 12px;
      max-width: none;
      color: var(--deck-chrome-text);
      font-size: 15px;
      line-height: 1.2;
    }

    .page-row {
      display: grid;
      grid-template-columns: 42px minmax(0, 1fr) auto auto;
      gap: 6px;
      align-items: center;
      margin: 0 0 8px;
      padding: 8px;
      border: 1px solid var(--deck-chrome-border);
      border-radius: 8px;
      background: rgba(248, 241, 232, .06);
      cursor: pointer;
    }

    .page-row.is-current {
      border-color: var(--deck-chrome-accent);
      background: rgba(255, 107, 26, .16);
    }

    .page-row span {
      overflow: hidden;
      color: var(--deck-chrome-text);
      font-size: 12px;
      line-height: 1.25;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .page-row button {
      padding: 6px 7px;
      font-size: 11px;
    }

    [data-edible-object] {
      outline: 0 solid transparent;
    }

    body.deck-edit-mode [data-edible-object] {
      outline: 1px dashed rgba(255, 107, 26, .42);
      outline-offset: 2px;
    }

    body.deck-edit-mode [data-edible-object].is-selected {
      outline: 2px solid var(--deck-chrome-accent);
      outline-offset: 3px;
    }

    .edible-handle {
      position: absolute;
      z-index: 60;
      display: none;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(16, 16, 14, .35);
      background: var(--deck-chrome-accent);
      color: #10100e;
      box-shadow: 0 8px 20px rgba(0,0,0,.28);
      font: 900 12px/1 Arial, sans-serif;
      user-select: none;
    }

    .edible-move {
      top: -16px;
      left: -16px;
      width: 30px;
      height: 30px;
      border-radius: 999px;
      cursor: grab;
    }

    .edible-resize {
      right: -9px;
      bottom: -9px;
      width: 18px;
      height: 18px;
      border-radius: 5px;
      cursor: nwse-resize;
    }

    body.deck-edit-mode [data-edible-object].is-selected > .edible-handle,
    body.deck-edit-mode [data-edible-object]:hover > .edible-handle {
      display: flex;
    }

    body.deck-edit-mode [data-edible-text] {
      cursor: text;
      border-radius: 3px;
    }

    body.deck-edit-mode [data-edible-text]:focus {
      outline: 1px solid rgba(248, 241, 232, .58);
      background: rgba(0, 0, 0, .16);
    }

    .deck-toast {
      position: fixed;
      left: 50%;
      bottom: 20px;
      z-index: 10001;
      padding: 10px 14px;
      border: 1px solid var(--deck-chrome-border);
      border-radius: 999px;
      background: var(--deck-chrome-bg);
      color: var(--deck-chrome-text);
      font: 700 12px/1 "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
      box-shadow: var(--deck-chrome-shadow);
      opacity: 0;
      transform: translate(-50%, 10px);
      pointer-events: none;
      transition: opacity .18s ease, transform .18s ease;
    }

    .deck-toast.show {
      opacity: 1;
      transform: translate(-50%, 0);
    }

    @page {
      size: 16in 9in;
      margin: 0;
    }

    @media print {
      html, body {
        width: 100%;
        height: auto;
        overflow: visible;
        background: #000;
        scroll-snap-type: none;
      }

      .deck-toolbar,
      .deck-sidebar,
      .deck-progress,
      .deck-toast,
      .edible-handle {
        display: none !important;
      }

      main#deckRoot {
        display: block;
        padding: 0 !important;
      }

      main#deckRoot > .slide {
        width: 100vw;
        height: 100vh;
        min-height: 0;
        page-break-after: always;
        break-after: page;
        box-shadow: none !important;
      }

      main#deckRoot > .slide:last-child {
        page-break-after: auto;
        break-after: auto;
      }
    }
`;

const chrome = `
<div class="deck-progress" id="deckProgress"></div>
<div class="deck-toolbar" data-deck-chrome-surface>
  <button type="button" id="btnEdit">Edit</button>
  <button type="button" id="btnPages">Pages</button>
  <button type="button" id="btnSave">Save</button>
  <button type="button" id="btnExportHtml">Export HTML</button>
  <button type="button" id="btnExportPdf">Export PDF</button>
</div>
<aside class="deck-sidebar" id="deckSidebar" data-deck-chrome-surface>
  <h2>Pages</h2>
  <div id="pageList"></div>
</aside>
<div class="deck-toast" id="deckToast"></div>
`;

const runtime = `
<script>
(function () {
  const STORAGE_KEY = 'jac-html-edible-v1';
  const deck = document.getElementById('deckRoot');
  const btnEdit = document.getElementById('btnEdit');
  const btnPages = document.getElementById('btnPages');
  const btnSave = document.getElementById('btnSave');
  const btnExportHtml = document.getElementById('btnExportHtml');
  const btnExportPdf = document.getElementById('btnExportPdf');
  const pageList = document.getElementById('pageList');
  const progress = document.getElementById('deckProgress');
  const toast = document.getElementById('deckToast');
  let selected = null;
  let dragging = null;
  let resizing = null;

  function slides() {
    return Array.from(deck.querySelectorAll(':scope > section.slide'));
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => toast.classList.remove('show'), 1600);
  }

  function makeTextEditable(root) {
    root.querySelectorAll('h1,h2,h3,p,li,.kicker,.subline,.cover-note span,.beat b,.beat span,.big-route b,.big-route span,.city-name,.caption-strip,.meta span,.meta b').forEach((el) => {
      el.dataset.edibleText = 'true';
      el.setAttribute('contenteditable', document.body.classList.contains('deck-edit-mode') ? 'true' : 'false');
      el.setAttribute('spellcheck', 'false');
    });
  }

  function ensureObject(el, oid) {
    if (!el || el.dataset.edibleObject) return;
    el.dataset.edibleObject = 'true';
    el.dataset.oid = oid;
    const computed = getComputedStyle(el);
    if (computed.position === 'static') el.style.position = 'relative';
    if (!el.querySelector(':scope > .edible-move')) {
      const move = document.createElement('button');
      move.type = 'button';
      move.className = 'edible-handle edible-move';
      move.title = 'Drag to move';
      move.setAttribute('aria-label', 'Move object');
      move.textContent = '⠿';
      el.appendChild(move);
    }
    if (!el.querySelector(':scope > .edible-resize')) {
      const resize = document.createElement('button');
      resize.type = 'button';
      resize.className = 'edible-handle edible-resize';
      resize.title = 'Resize';
      resize.setAttribute('aria-label', 'Resize object');
      el.appendChild(resize);
    }
  }

  function prepareDeck() {
    slides().forEach((slide, slideIndex) => {
      slide.id = slide.id || 'slide-' + (slideIndex + 1);
      makeTextEditable(slide);
      let objectIndex = 0;
      slide.querySelectorAll(':scope > .content, :scope > .meta, .visual-panel .hero-card, .visual-panel .small-photo, .visual-panel .caption-strip').forEach((el) => {
        ensureObject(el, 's' + slideIndex + '-o' + objectIndex++);
      });
    });
    renderPages();
    updateProgress();
  }

  function setEditMode(active) {
    document.body.classList.toggle('deck-edit-mode', active);
    btnEdit.classList.toggle('is-active', active);
    btnEdit.textContent = active ? 'Done' : 'Edit';
    deck.querySelectorAll('[data-edible-text]').forEach((el) => {
      el.setAttribute('contenteditable', active ? 'true' : 'false');
    });
    if (!active) clearSelection();
  }

  function clearSelection() {
    if (selected) selected.classList.remove('is-selected');
    selected = null;
  }

  function selectObject(el) {
    if (!document.body.classList.contains('deck-edit-mode')) return;
    clearSelection();
    selected = el;
    selected.classList.add('is-selected');
  }

  function absolutizeObject(el) {
    const slide = el.closest('.slide');
    const sr = slide.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    el.style.position = 'absolute';
    el.style.left = ((r.left - sr.left) / sr.width * 100).toFixed(4) + '%';
    el.style.top = ((r.top - sr.top) / sr.height * 100).toFixed(4) + '%';
    el.style.width = (r.width / sr.width * 100).toFixed(4) + '%';
    el.style.height = (r.height / sr.height * 100).toFixed(4) + '%';
    el.style.margin = '0';
    el.style.zIndex = '25';
  }

  function onPointerDown(event) {
    const move = event.target.closest('.edible-move');
    const resize = event.target.closest('.edible-resize');
    const object = event.target.closest('[data-edible-object]');
    if (!document.body.classList.contains('deck-edit-mode')) return;

    if (object && !event.target.closest('[data-edible-text]')) {
      selectObject(object);
    }

    if (move) {
      event.preventDefault();
      const el = move.closest('[data-edible-object]');
      selectObject(el);
      absolutizeObject(el);
      const slide = el.closest('.slide');
      const sr = slide.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      dragging = {
        el,
        slide,
        startX: event.clientX,
        startY: event.clientY,
        leftPx: r.left - sr.left,
        topPx: r.top - sr.top,
        slideW: sr.width,
        slideH: sr.height
      };
      move.setPointerCapture(event.pointerId);
    }

    if (resize) {
      event.preventDefault();
      const el = resize.closest('[data-edible-object]');
      selectObject(el);
      absolutizeObject(el);
      const slide = el.closest('.slide');
      const sr = slide.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      resizing = {
        el,
        startX: event.clientX,
        startY: event.clientY,
        widthPx: r.width,
        heightPx: r.height,
        slideW: sr.width,
        slideH: sr.height
      };
      resize.setPointerCapture(event.pointerId);
    }
  }

  function onPointerMove(event) {
    if (dragging) {
      const dx = event.clientX - dragging.startX;
      const dy = event.clientY - dragging.startY;
      dragging.el.style.left = ((dragging.leftPx + dx) / dragging.slideW * 100).toFixed(4) + '%';
      dragging.el.style.top = ((dragging.topPx + dy) / dragging.slideH * 100).toFixed(4) + '%';
    }
    if (resizing) {
      const dx = event.clientX - resizing.startX;
      const dy = event.clientY - resizing.startY;
      const nextW = Math.max(80, resizing.widthPx + dx);
      const nextH = Math.max(40, resizing.heightPx + dy);
      resizing.el.style.width = (nextW / resizing.slideW * 100).toFixed(4) + '%';
      resizing.el.style.height = (nextH / resizing.slideH * 100).toFixed(4) + '%';
    }
  }

  function onPointerUp() {
    dragging = null;
    resizing = null;
  }

  function cleanClone() {
    const clone = document.documentElement.cloneNode(true);
    clone.querySelector('body')?.classList.remove('deck-edit-mode', 'deck-sidebar-open');
    clone.querySelectorAll('.is-selected').forEach((el) => el.classList.remove('is-selected'));
    clone.querySelectorAll('[contenteditable]').forEach((el) => el.setAttribute('contenteditable', 'false'));
    clone.querySelectorAll('.edible-handle').forEach((el) => el.remove());
    return '<!DOCTYPE html>\\n' + clone.outerHTML;
  }

  function saveDeck() {
    localStorage.setItem(STORAGE_KEY, cleanClone());
    showToast('Saved in this browser');
  }

  function exportHtml() {
    const blob = new Blob([cleanClone()], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'HTML提案_edible.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function loadSavedDeck() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = new DOMParser().parseFromString(saved, 'text/html');
      const savedDeck = parsed.getElementById('deckRoot');
      if (savedDeck) deck.innerHTML = savedDeck.innerHTML;
    } catch (error) {
      console.warn('Could not restore saved deck', error);
    }
  }

  function titleForSlide(slide, index) {
    const title = slide.querySelector('h1,h2,.city-name,.kicker');
    return (title?.textContent || 'Slide ' + (index + 1)).trim().replace(/\\s+/g, ' ').slice(0, 42);
  }

  function renderPages() {
    pageList.innerHTML = '';
    slides().forEach((slide, index) => {
      const row = document.createElement('div');
      row.className = 'page-row';
      row.dataset.slideId = slide.id;
      row.innerHTML = '<b>' + String(index + 1).padStart(2, '0') + '</b><span></span><button type="button" data-page-up>↑</button><button type="button" data-page-down>↓</button>';
      row.querySelector('span').textContent = titleForSlide(slide, index);
      row.addEventListener('click', (event) => {
        if (event.target.matches('button')) return;
        slide.scrollIntoView({ behavior: 'smooth' });
      });
      row.querySelector('[data-page-up]').addEventListener('click', () => moveSlide(index, -1));
      row.querySelector('[data-page-down]').addEventListener('click', () => moveSlide(index, 1));
      pageList.appendChild(row);
    });
    updateCurrentPage();
  }

  function moveSlide(index, delta) {
    const all = slides();
    const nextIndex = index + delta;
    if (nextIndex < 0 || nextIndex >= all.length) return;
    const slide = all[index];
    if (delta < 0) deck.insertBefore(slide, all[nextIndex]);
    else deck.insertBefore(all[nextIndex], slide);
    renderPages();
    slide.scrollIntoView({ behavior: 'smooth' });
  }

  function updateCurrentPage() {
    const all = slides();
    const current = Math.min(all.length - 1, Math.max(0, Math.round(window.scrollY / Math.max(1, window.innerHeight))));
    pageList.querySelectorAll('.page-row').forEach((row, index) => row.classList.toggle('is-current', index === current));
  }

  function updateProgress() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max <= 0 ? 0 : window.scrollY / max * 100;
    progress.style.width = pct + '%';
    updateCurrentPage();
  }

  btnEdit.addEventListener('click', () => setEditMode(!document.body.classList.contains('deck-edit-mode')));
  btnPages.addEventListener('click', () => document.body.classList.toggle('deck-sidebar-open'));
  btnSave.addEventListener('click', saveDeck);
  btnExportHtml.addEventListener('click', exportHtml);
  btnExportPdf.addEventListener('click', () => window.print());
  document.addEventListener('pointerdown', onPointerDown);
  document.addEventListener('pointermove', onPointerMove);
  document.addEventListener('pointerup', onPointerUp);
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 's') {
      event.preventDefault();
      saveDeck();
    }
    if (event.key.toLowerCase() === 'e' && !event.target.closest('[contenteditable="true"]')) {
      setEditMode(!document.body.classList.contains('deck-edit-mode'));
    }
    if (event.key === 'Escape') {
      clearSelection();
      setEditMode(false);
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-edible-object]') && !event.target.closest('[data-deck-chrome-surface]')) clearSelection();
  });
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  loadSavedDeck();
  prepareDeck();
})();
</script>
`;

html = html.replace('</style>', editableCss + '\n  </style>');
html = html.replace('<body>', '<body>\n' + chrome);
html = html.replace('</body>', runtime + '\n</body>');

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);
console.log(outputPath);
