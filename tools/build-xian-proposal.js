const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require("docx");
const pptxgen = require("pptxgenjs");
const sharp = require("sharp");

const ROOT = "/Users/chenlingxuan/Desktop/Work/Artefact/PPT SKILL";
const IMG_DIR = "/Users/chenlingxuan/Desktop/Work/Artefact/whatmakeschinesechinese/照片合集/西安";
const OUT = path.join(ROOT, "outputs", "xian-proposal");
fs.mkdirSync(OUT, { recursive: true });

const img = (name) => path.join(IMG_DIR, name);

const assets = {
  train: img("长安再向西1.png"),
  wall: img("长安再向西2.jpg"),
  map: img("长安再向西3.png"),
  terracottaWide: img("地下军阵的数字重生1.jpg"),
  terracottaFace: img("地下军阵的数字重生2.jpg"),
  aerospace: img("硬科技的心脏1.png"),
};

const deck = [
  {
    no: "00",
    section: "西安 XIAN",
    title: "一座把过去重新推向未来的城市",
    claim: "西安的特点，不是“古都”二字能够概括。它真正有力量的地方，是把文明记忆、陆上开放和硬科技制造同时放在今天的中国叙事里。",
    body: "柯文思来到西安，不只是回到长安。他看到的是一座城市如何把历史转化为方法：城墙仍在，班列向西；兵马俑仍在地下，数字技术让它继续说话；古代关于天文和机关的想象，今天变成火箭发动机、新能源汽车和工程师手里的参数。",
    beatA: "开放不只在海岸线，也发生在陆地深处。",
    beatB: "历史不只是展示物，也是一套持续研究的方法。",
    image: assets.wall,
    secondary: [assets.train, assets.terracottaFace],
    accent: "ff6b1a",
  },
  {
    no: "01",
    section: "中国当下 China Now",
    title: "长安再向西",
    claim: "如果古长安曾以丝路连接世界，今天的西安正用中欧班列重新写下陆上通道。",
    body: "这一页从城墙开始。镜头不是为了怀旧，而是为了建立一个方向感：曾经的长安，是陆上丝路的起点；今天的西安，仍然在向西，只是驼队变成了集装箱列车，货物变成汽车、电子产品、机械设备和新的制造能力。",
    beatA: "画面：城墙晨光，城市从历史轮廓里醒来。",
    beatB: "意义：古代道路与当代物流在同一个城市里接上。",
    fact: "事实锚点：中欧班列“长安号”是西安国际物流的重要通道。",
    image: assets.wall,
    secondary: [assets.train],
    accent: "ff6b1a",
  },
  {
    no: "02",
    section: "中国当下 China Now",
    title: "内陆变成节点",
    claim: "西安曾被想象为远离全球市场的内陆城市，今天却正在成为欧亚物流网络里的关键节点。",
    body: "柯导从城门来到西安国际港站。镜头里，一边是巨大的龙门吊和集装箱，一边是即将出发的中欧班列。这里的变化不是抽象口号，而是每一节车厢、每一次装箱、每一条线路，把内陆城市重新接入全球贸易。",
    beatA: "冲突：内陆城市如何参与全球分工？",
    beatB: "答案：用铁路和港站重建一条面向欧亚大陆的开放通道。",
    fact: "事实锚点：西安国际港务区推动班列、口岸、物流和产业联动。",
    image: assets.train,
    secondary: [assets.map],
    accent: "ff6b1a",
  },
  {
    no: "03",
    section: "中国当下 China Now",
    title: "新的丝路不是隐喻",
    claim: "今天的中国制造沿着新丝路再次向西，这不是历史修辞，而是一条正在运行的物流线路。",
    body: "李约瑟关心中国古代科技如何影响世界；柯文思在西安看到的是另一种影响：制造、供应链和基础设施如何重新定义中国与世界的连接方式。地图上的线条不只是视觉符号，它们对应的是车站、口岸、仓库、工厂和跨境订单。",
    beatA: "画面：地图线条从西安向中亚和欧洲延伸。",
    beatB: "判断：中国的开放，不只发生在海岸线，也发生在重新被激活的陆地深处。",
    image: assets.map,
    secondary: [assets.train, assets.wall],
    accent: "ff6b1a",
  },
  {
    no: "04",
    section: "文明记忆 Cultural Memory",
    title: "地下军阵的数字重生",
    claim: "兵马俑不是沉睡的过去，而是一座正在被科技重新阅读的地下文明。",
    body: "柯文思走进秦始皇帝陵博物院。兵马俑让世界看到古代中国组织、制造和审美的高度：不同面孔、不同姿态、不同军种，被放进一个庞大的制度和想象里。它们不是静止的纪念品，而是仍在被研究的历史现场。",
    beatA: "画面：兵马俑军阵，秩序、规模和个体面孔同时出现。",
    beatB: "问题：世界已经认识兵马俑，但我们是否真正读懂了它？",
    fact: "事实锚点：秦始皇帝陵博物院长期开展考古、保护与研究。",
    image: assets.terracottaWide,
    secondary: [assets.terracottaFace],
    accent: "e7a24a",
  },
  {
    no: "05",
    section: "文明记忆 Cultural Memory",
    title: "让泥土里的细节说话",
    claim: "三维扫描、彩绘保护、微痕分析和数字建模，让文物从“被观看”变成“被继续理解”。",
    body: "镜头可以靠近修复人员的手，也可以进入数字扫描屏幕。文物的颜色、裂痕、泥层、表情和制作痕迹，都会成为新的线索。这里的科技不是为了炫技，而是为了让肉眼容易错过的细节重新进入历史解释。",
    beatA: "冲突：文物一旦出土就开始变化。",
    beatB: "答案：保护本身是一场与时间的赛跑，也是一种科学阅读。",
    fact: "事实锚点：彩绘陶俑保护、数字化采集与考古研究是长期工作。",
    image: assets.terracottaFace,
    secondary: [assets.terracottaWide],
    accent: "e7a24a",
  },
  {
    no: "06",
    section: "文明记忆 Cultural Memory",
    title: "不是展示辉煌，而是继续理解历史",
    claim: "中国人对历史的态度，不只是展示过去的高度，而是用科学继续靠近它。",
    body: "这一页把兵马俑从“世界奇观”重新拉回“研究现场”。柯文思的观察可以落在一个更深的判断上：真正的文化自信，不是把历史固定成一个形容词，而是愿意花很长时间，用更细的方法，把它重新读一遍。",
    beatA: "画面：面孔特写与考古现场交替，宏大军阵和微小痕迹并置。",
    beatB: "城市特点：西安把文明记忆变成仍在发生的知识生产。",
    image: assets.terracottaWide,
    secondary: [assets.terracottaFace],
    accent: "e7a24a",
  },
  {
    no: "07",
    section: "产业跃迁 Industry Shift",
    title: "硬科技的心脏",
    claim: "从古代机关与天文想象，到火箭发动机和新能源汽车，西安把“硬科技”做成城市性格。",
    body: "柯文思进入西安航天基地。这里的画面和兵马俑完全不同，却有一种相似的秩序感：系统、材料、控制、测试、校准。古代长安曾经组织人、物、技术和制度；今天的西安，则把复杂工程压进发动机、生产线和城市产业集群。",
    beatA: "画面：航天基地外观，现代厂区与城市天际线。",
    beatB: "判断：西安的现代性，不是轻巧的消费景观，而是硬科技的工程现场。",
    fact: "事实锚点：西安是中国航天动力与先进制造的重要基地。",
    image: assets.aerospace,
    secondary: [assets.train],
    accent: "48d1ff",
  },
  {
    no: "08",
    section: "产业跃迁 Industry Shift",
    title: "参数里的中国制造",
    claim: "真正的科技突破往往不可见，它藏在一次次测试、失败和校准里。",
    body: "火箭发动机的故事，最好不要只讲“宏大”。它更应该落在工程师手里的每一个参数：燃烧是否稳定，材料能否承受极端环境，控制系统能否精准响应，试验数据如何反复回到设计里。中国制造的跃迁，是把国家想象拆成可执行的工程细节。",
    beatA: "冲突：外部看到的是产品，内部真正困难的是验证。",
    beatB: "答案：把宏大目标拆成可测试、可修正、可交付的技术系统。",
    image: assets.aerospace,
    secondary: [assets.map],
    accent: "48d1ff",
  },
  {
    no: "09",
    section: "产业跃迁 Industry Shift",
    title: "从航天到新能源",
    claim: "西安的产业跃迁，不只在一个基地里，而是在航天动力、新能源汽车和先进制造之间形成新的城市动能。",
    body: "另一条线可以落到新能源汽车工厂：机械臂、下线车辆、电子系统和供应链组织。它和航天基地共同构成西安的当代生产图景。柯导在这里看到的，不是“古都之外还有产业”，而是这座城市一直擅长把复杂系统组织起来。",
    beatA: "画面：工厂机械臂、新能源车下线、工程师检查设备。",
    beatB: "事实锚点：陕西新能源汽车产量近年保持高位增长，西安是重要承载地。",
    image: assets.aerospace,
    secondary: [assets.train, assets.wall],
    accent: "48d1ff",
  },
  {
    no: "10",
    section: "城市结论 City Thesis",
    title: "长安不是终点，而是再次出发的方式",
    claim: "西安的地方特点，是把文明、通道和产业放进同一个时间轴里：从长安到西安，从地下军阵到数字扫描，从丝路驼队到中欧班列。",
    body: "这一集的核心，不是给西安贴上“古都”“科技城”“物流枢纽”的单一标签，而是让观众看到三者如何互相解释。它古老，所以知道如何组织文明；它在内陆，所以更能说明中国开放的新方向；它重工程，所以能把未来拆成可以被制造的现实。",
    beatA: "最终答案：西安让过去不是负担，而成为再次向前的结构。",
    beatB: "片尾画面：城墙、兵马俑、班列、航天基地交替，线路继续向西。",
    image: assets.train,
    secondary: [assets.terracottaFace, assets.aerospace],
    accent: "ff6b1a",
  },
];

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function mime(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".png") return "image/png";
  return "application/octet-stream";
}

function dataUri(file) {
  return `data:${mime(file)};base64,${fs.readFileSync(file).toString("base64")}`;
}

function makeHtml() {
  const slides = deck.map((s, i) => `
  <section class="slide slide-${i + 1}" style="--accent:#${s.accent}" data-page="${s.no}">
    <img class="bg-photo" src="${dataUri(s.image)}" alt="${escapeHtml(s.title)}">
    <div class="shade"></div>
    <div class="grain"></div>
    <header class="topbar">
      <div class="kicker" contenteditable="true">${escapeHtml(s.no)}｜${escapeHtml(s.section)}</div>
      <div class="logo" contenteditable="true">东注文化｜ARTEFACT</div>
    </header>
    <main class="main-grid">
      <article class="copy">
        <h1 contenteditable="true">${escapeHtml(s.title)}</h1>
        <p class="claim" contenteditable="true">${escapeHtml(s.claim)}</p>
        <p class="body" contenteditable="true">${escapeHtml(s.body)}</p>
      </article>
      <aside class="visuals">
        ${(s.secondary || []).slice(0, 2).map((file, idx) => `
        <figure class="image-card card-${idx + 1}">
          <img src="${dataUri(file)}" alt="">
        </figure>`).join("")}
        <div class="signal-lines"><span></span><span></span><span></span></div>
      </aside>
    </main>
    <section class="bottom-row">
      <div class="note" contenteditable="true"><b>画面 / 冲突</b><span>${escapeHtml(s.beatA)}</span></div>
      <div class="note" contenteditable="true"><b>答案 / 判断</b><span>${escapeHtml(s.beatB)}</span></div>
    </section>
    <footer class="meta"><span>What Makes Chinese Chinese｜Xi'an Proposal</span><span>${String(i + 1).padStart(2, "0")}/${String(deck.length).padStart(2, "0")}</span></footer>
  </section>`).join("\n");

  const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>西安 Proposal｜不同地方特点</title>
  <style>
    :root { --ink:#f7f1e8; --muted:rgba(247,241,232,.72); --line:rgba(247,241,232,.2); }
    * { box-sizing:border-box; }
    html, body { margin:0; background:#090806; color:var(--ink); font-family:"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif; }
    body { overflow-x:hidden; }
    .toolbar { position:fixed; z-index:20; top:12px; left:12px; display:flex; gap:8px; opacity:.18; transition:.2s; }
    .toolbar:hover, body.editing .toolbar { opacity:1; }
    .toolbar button { border:1px solid rgba(247,241,232,.25); background:rgba(12,11,9,.88); color:var(--ink); padding:8px 10px; border-radius:8px; font-weight:800; cursor:pointer; }
    body.editing [contenteditable="true"] { outline:1px dashed rgba(255,107,26,.75); outline-offset:3px; }
    .slide { position:relative; width:100vw; height:100vh; height:100dvh; overflow:hidden; isolation:isolate; background:#111; break-after:page; page-break-after:always; }
    .slide:last-child { break-after:auto; page-break-after:auto; }
    .bg-photo { position:absolute; inset:0; z-index:-4; width:100%; height:100%; object-fit:cover; filter:saturate(.92) contrast(1.08); }
    .shade { position:absolute; inset:0; z-index:-3; background:linear-gradient(90deg,rgba(10,9,8,.97) 0%,rgba(10,9,8,.84) 42%,rgba(10,9,8,.2) 100%), radial-gradient(circle at 73% 18%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 34%); }
    .grain { position:absolute; inset:0; z-index:-2; opacity:.2; background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px); background-size:54px 54px; mask-image:linear-gradient(90deg,#000 0%,transparent 70%); }
    .topbar { position:absolute; z-index:5; top:46px; left:72px; right:72px; display:flex; align-items:center; justify-content:space-between; gap:24px; }
    .kicker { display:flex; align-items:center; gap:14px; color:var(--accent); font-size:17px; font-weight:900; white-space:nowrap; }
    .kicker:before { content:""; width:54px; height:2px; background:var(--accent); }
    .logo { color:rgba(247,241,232,.9); font-size:13px; font-weight:900; letter-spacing:.08em; border-left:2px solid var(--accent); padding-left:18px; white-space:nowrap; }
    .main-grid { height:100%; display:grid; grid-template-columns:minmax(0,1.08fr) minmax(330px,.72fr); gap:52px; padding:112px 72px 166px; }
    .copy { align-self:center; max-width:850px; }
    h1 { margin:0 0 20px; color:var(--accent); font-size:60px; line-height:1.04; font-weight:950; letter-spacing:0; }
    .claim { margin:0 0 24px; color:#fffaf2; font-size:25px; line-height:1.36; font-weight:850; max-width:820px; }
    .body { margin:0; color:var(--muted); font-size:18px; line-height:1.62; max-width:790px; }
    .visuals { position:relative; align-self:center; min-height:430px; }
    .image-card { position:absolute; margin:0; overflow:hidden; background:rgba(18,16,12,.64); border:1px solid rgba(255,255,255,.22); box-shadow:0 24px 58px rgba(0,0,0,.42); }
    .image-card img { width:100%; height:100%; object-fit:cover; display:block; }
    .card-1 { top:0; right:0; width:86%; height:54%; }
    .card-2 { bottom:0; left:0; width:72%; height:38%; }
    .signal-lines { position:absolute; right:8%; bottom:28%; display:grid; gap:8px; width:110px; }
    .signal-lines span { display:block; height:2px; background:var(--accent); opacity:.72; }
    .signal-lines span:nth-child(2) { width:70%; }
    .signal-lines span:nth-child(3) { width:42%; }
    .bottom-row { position:absolute; left:72px; right:72px; bottom:64px; display:grid; grid-template-columns:1fr 1fr; gap:16px; z-index:4; }
    .note { min-height:88px; padding:15px 18px; background:rgba(10,9,8,.68); border:1px solid rgba(247,241,232,.22); border-top:3px solid var(--accent); backdrop-filter:blur(6px); }
    .note b { display:block; margin-bottom:8px; color:var(--accent); font-size:14px; }
    .note span { display:block; color:rgba(247,241,232,.82); font-size:15.5px; line-height:1.44; }
    .meta { position:absolute; z-index:5; left:72px; right:72px; bottom:24px; display:flex; justify-content:space-between; gap:20px; color:rgba(247,241,232,.58); font-size:12px; }
    @media (max-width: 900px) { .main-grid{grid-template-columns:1fr;padding:100px 36px 180px}.topbar,.bottom-row,.meta{left:36px;right:36px}.visuals{display:none}h1{font-size:42px}.claim{font-size:21px}.body{font-size:15.5px}.bottom-row{grid-template-columns:1fr}.logo{font-size:11px}.kicker{font-size:14px} }
    @page { size:16in 9in; margin:0; }
    @media print { .toolbar{display:none}.slide{width:16in;height:9in;} }
  </style>
</head>
<body>
  <div class="toolbar"><button id="editBtn">Edit</button><button onclick="window.print()">Export PDF</button></div>
  <main>${slides}</main>
  <script>
    const editBtn = document.getElementById("editBtn");
    editBtn.addEventListener("click", () => {
      document.body.classList.toggle("editing");
      editBtn.textContent = document.body.classList.contains("editing") ? "Done" : "Edit";
    });
  </script>
</body>
</html>`;
  fs.writeFileSync(path.join(OUT, "xian-proposal.html"), html);
}

function para(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, bold: opts.bold, color: opts.color, size: opts.size })],
    heading: opts.heading,
    spacing: { before: opts.before ?? 80, after: opts.after ?? 80, line: opts.line ?? 300 },
  });
}

function bullet(text) {
  return new Paragraph({
    children: [new TextRun({ text, size: 21 })],
    bullet: { level: 0 },
    spacing: { after: 70, line: 280 },
  });
}

async function makeDocx() {
  const children = [
    para("西安 Proposal｜不同地方特点", { bold: true, size: 44, color: "C75A24", after: 120 }),
    para("What Makes Chinese Chinese / China Now / Cultural Memory / Industry Shift", { size: 22, color: "666666", after: 260 }),
    para("总体判断", { heading: HeadingLevel.HEADING_1, color: "C75A24" }),
    para("西安不是一个只被历史定义的城市。它的当代表达，正好可以从三条线展开：陆上开放、文明保护、硬科技制造。古长安曾经把中国与世界连接在丝路上；今天的西安，则把古代文明记忆、欧亚物流通道和先进制造能力同时放在镜头前，形成一个关于“中国如何延续、更新并再次出发”的城市叙事。", { line: 330 }),
    para("页面结构", { heading: HeadingLevel.HEADING_1, color: "C75A24", before: 260 }),
  ];
  for (const s of deck) {
    children.push(para(`${s.no}｜${s.section}`, { heading: HeadingLevel.HEADING_2, before: 240 }));
    children.push(para(s.title, { bold: true, size: 30, color: s.accent }));
    children.push(para(`主张：${s.claim}`, { bold: true }));
    children.push(para(`正文：${s.body}`, { line: 320 }));
    children.push(bullet(s.beatA));
    children.push(bullet(s.beatB));
    if (s.fact) children.push(bullet(s.fact));
  }
  const doc = new Document({
    sections: [{ properties: { page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } }, children }],
    styles: {
      paragraphStyles: [
        { id: "Normal", name: "Normal", run: { font: "Arial", size: 22 }, paragraph: { spacing: { line: 300 } } },
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 32, bold: true, color: "C75A24" }, paragraph: { spacing: { before: 240, after: 120 } } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 26, bold: true, color: "222222" }, paragraph: { spacing: { before: 220, after: 100 } } },
      ],
    },
  });
  fs.writeFileSync(path.join(OUT, "xian-proposal.docx"), await Packer.toBuffer(doc));
}

async function meta(file) {
  const m = await sharp(file).metadata();
  return { w: m.width, h: m.height };
}

function coverCrop(iw, ih, bw, bh) {
  const ir = iw / ih, br = bw / bh;
  if (ir > br) {
    const h = bh, w = h * ir;
    return { x: -(w - bw) / 2, y: 0, w, h };
  }
  const w = bw, h = w / ir;
  return { x: 0, y: -(h - bh) / 2, w, h };
}

async function addCover(slide, file, x, y, w, h, transparency = 0) {
  const m = await meta(file);
  const c = coverCrop(m.w, m.h, w, h);
  slide.addImage({ path: file, x: x + c.x, y: y + c.y, w: c.w, h: c.h, transparency });
}

async function makePptx() {
  const pptx = new pptxgen();
  pptx.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
  pptx.layout = "WIDE";
  pptx.author = "Artefact / Dongzhu";
  pptx.subject = "西安不同地方特点 proposal";
  pptx.title = "西安 Proposal";
  pptx.theme = { headFontFace: "Arial", bodyFontFace: "Arial", lang: "zh-CN" };
  const W = 13.333, H = 7.5;

  for (const [i, s] of deck.entries()) {
    const slide = pptx.addSlide();
    slide.background = { color: "0A0908" };
    await addCover(slide, s.image, 0, 0, W, H, 28);
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 8.2, h: H, fill: { color: "0A0908", transparency: 7 }, line: { transparency: 100 } });
    slide.addShape(pptx.ShapeType.rect, { x: 6.3, y: 0, w: 7.1, h: H, fill: { color: "0A0908", transparency: 72 }, line: { transparency: 100 } });
    slide.addShape(pptx.ShapeType.line, { x: 0.72, y: 0.64, w: 0.54, h: 0, line: { color: s.accent, width: 1.2 } });
    slide.addText(`${s.no}｜${s.section}`, { x: 1.38, y: 0.52, w: 5.4, h: 0.28, fontSize: 11.5, bold: true, color: s.accent, margin: 0 });
    slide.addShape(pptx.ShapeType.line, { x: 10.18, y: 0.5, w: 0, h: 0.33, line: { color: s.accent, width: 1 } });
    slide.addText("东注文化｜ARTEFACT", { x: 10.35, y: 0.52, w: 2.25, h: 0.28, fontSize: 8.3, bold: true, color: "F7F1E8", margin: 0, align: "right" });
    slide.addText(s.title, { x: 0.72, y: 1.28, w: 6.05, h: 0.82, fontSize: 31, bold: true, color: s.accent, margin: 0, fit: "shrink" });
    slide.addText(s.claim, { x: 0.72, y: 2.2, w: 6.35, h: 0.9, fontSize: 15.5, bold: true, color: "FFF8EF", margin: 0.02, fit: "shrink", breakLine: false });
    slide.addText(s.body, { x: 0.72, y: 3.18, w: 6.35, h: 1.55, fontSize: 10.6, color: "D9CFC5", margin: 0.02, fit: "shrink", breakLine: false, valign: "top" });
    const second = (s.secondary || []).slice(0, 2);
    if (second[0]) {
      slide.addShape(pptx.ShapeType.rect, { x: 8.56, y: 1.18, w: 3.45, h: 2.24, fill: { color: "17130F", transparency: 18 }, line: { color: "FFFFFF", transparency: 70, width: 0.8 } });
      await addCover(slide, second[0], 8.56, 1.18, 3.45, 2.24, 0);
    }
    if (second[1]) {
      slide.addShape(pptx.ShapeType.rect, { x: 7.6, y: 3.92, w: 3.0, h: 1.7, fill: { color: "17130F", transparency: 18 }, line: { color: "FFFFFF", transparency: 70, width: 0.8 } });
      await addCover(slide, second[1], 7.6, 3.92, 3.0, 1.7, 0);
    }
    [[s.beatA, "画面 / 冲突"], [s.beatB, "答案 / 判断"]].forEach(([text, label], idx) => {
      const x = 0.72 + idx * 6.03;
      slide.addShape(pptx.ShapeType.rect, { x, y: 5.72, w: 5.76, h: 1.05, fill: { color: "0A0908", transparency: 17 }, line: { color: "F7F1E8", transparency: 78, width: 0.7 } });
      slide.addShape(pptx.ShapeType.line, { x, y: 5.72, w: 5.76, h: 0, line: { color: s.accent, width: 1.8 } });
      slide.addText(label, { x: x + 0.15, y: 5.9, w: 1.1, h: 0.18, fontSize: 8.2, bold: true, color: s.accent, margin: 0 });
      slide.addText(text, { x: x + 0.15, y: 6.17, w: 5.35, h: 0.4, fontSize: 8.8, color: "E8DDD2", margin: 0, fit: "shrink" });
    });
    slide.addText("What Makes Chinese Chinese｜Xi'an Proposal", { x: 0.72, y: 7.07, w: 4.4, h: 0.16, fontSize: 6.8, color: "BEB2A6", margin: 0 });
    slide.addText(`${String(i + 1).padStart(2, "0")}/${String(deck.length).padStart(2, "0")}`, { x: 12.05, y: 7.07, w: 0.6, h: 0.16, fontSize: 6.8, color: "BEB2A6", align: "right", margin: 0 });
  }
  await pptx.writeFile({ fileName: path.join(OUT, "xian-proposal-editable.pptx") });
}

async function main() {
  await makeDocx();
  makeHtml();
  await makePptx();
  console.log(`Built docx/html/pptx in ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
