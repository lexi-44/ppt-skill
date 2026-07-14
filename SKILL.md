---
name: ppt-skill
description: 用于东注文化 / Artefact 的三段式 proposal 工作流：idea to text 把用户想法发展成 proposal、逐页 HTML 内容规划和最终 docx；text to html 把文字和用户给定图片做成图像主导、每页带东注文化 logo 的精排单文件 HTML；html to ppt 把 HTML 原样结构化重建成每个元素可编辑的 PPTX，不改动排版布局。三段可以单独使用，也可以串联执行。适用于电影/纪录片/剧集/品牌影像 proposal、pitch deck、HTML proposal、可编辑 PPT、东注文化、Artefact Entertainment、真实图片素材、电影艺术风格网页提案等场景。
---

# PPT SKILL

## 目标

把电影、纪录片、剧集、栏目、文化项目或品牌影像制作需求，整理成一套东注文化 / Artefact 风格的专业提案材料，并按 3 个可独立使用、也可串联执行的 skill/agent 拆分：

1. `Idea to Text`：用户给 idea，形成文字 proposal；同时规划 HTML 每页写什么、做什么、插入什么图片；最终生成 docx。
2. `Text to HTML`：把文字方案和用户给定图片转成图像主导的精排 HTML；每页必须加东注文化 logo，图片按照命名插入对应位置。
3. `HTML to PPT`：像用户提供的 `html-to-ppt-summary.md` 方法一样，把 HTML 结构化转换成每个部分都能修改的 PPTX；转换过程中不要改动排版布局。

默认按用户当前请求选择阶段：只要 docx 就停在 `Idea to Text`，只要 HTML 就执行到 `Text to HTML`，只要 PPTX 就从 HTML 执行 `HTML to PPT`。用户要求“一起用”“全流程”“从 idea 做成 PPT”时，按三段顺序完整执行。

## 文件入口

- `agents/idea-to-text.md`：第一阶段，idea/brief 到 proposal、HTML 分页文字规划、docx。
- `agents/text-to-html.md`：第二阶段，proposal/page plan 到图片主导 HTML。
- `agents/html-to-ppt.md`：第三阶段，HTML 到原生可编辑 PPTX。
- `agents/workflow.md`：三个阶段的单独使用、串联交接和验收顺序。
- `references/ppt-skill-knowledge.md`：合并后的写作、视觉、素材、旧库和 legacy 交付知识库。
- `references/corpus/`：历史 PDF/PPTX 参考库；当前工作目录中的绝对路径为 `/Users/chenlingxuan/Desktop/Work/Artefact/PPT SKILL/references/corpus/`。
- `examples/`：旧生成样例，只作为参考，不作为默认输出。

按任务需要读取对应 agent 文件和知识库章节，不要一次性加载大型参考 deck。

## 三段工作流

### 1. Idea to Text

输入：用户 idea、brief、参考资料、必须保留的原文、目标受众、项目事实、用户给的图片清单或图片命名规则。

输出：

- 完整 proposal 正文。
- HTML 每一页做什么、写什么、图片插入什么位置。
- 图片命名与页面映射表。
- 必须保留事实和待确认假设。
- 最终 docx。

### 2. Text to HTML

输入：`Idea to Text` 的 proposal、逐页 HTML 规划、图片映射表，或用户直接给的成熟文稿和图片文件夹。

输出：

- 单文件 HTML proposal。
- 每页东注文化 / Artefact logo。
- 每页图片占视觉大头，用户图片按命名准确插入。
- 图片来源/使用说明。
- 版式验收记录。

### 3. HTML to PPT

输入：`Text to HTML` 输出的 HTML，或用户直接给的 HTML 文件。

输出：

- 16:9 PPTX。
- 图片、标题、正文、卡片、遮罩、线条、logo、页码等都作为 PowerPoint 原生可编辑对象。
- 不用整页截图替代可编辑内容。
- 不改动原 HTML 的页面排版逻辑和视觉位置。
- 转换验收记录。

## 核心规则

- 三段可单独运行；串联运行时必须按 `idea to text → text to html → html to ppt` 的顺序。
- 先写 proposal，再做页面规划，再做 HTML；从 HTML 转 PPT 时只重建对象，不重新设计。
- 默认把用户的 brief、文字稿或大致创意发展成“可微调、可导出”的 proposal 工作流，而不是只生成静态网页或一次性图片稿。
- 文字要像电影工作室 proposal：具体、有画面、有判断，同时能给合作方、平台或投资方阅读。
- 用户要求保留原文时，正文必须保留。
- Deck 语言必须统一。除非用户明确要求双语，否则中文项目全中文，英文项目全英文；不要在同一页中混用中英表达。
- 每张主页面都应图像主导，主视觉通常占页面 55-80%。
- 每页至少要有一张不同的真实主图，不能多页重复同一张背景。
- 真实人物必须优先使用可查到的真实照片，不用 AI 生成脸。
- 默认每页包含东注文化 / Artefact logo，除非用户另有要求。
- HTML 阶段必须严格根据用户给的图片命名和页面规划插入图片；不确定命名对应关系时，先生成映射表并标注待确认项。
- HTML 页面中图片要占大头，文字服务于图像和 proposal 逻辑；不要做成文字报告网页。
- 文字、图片、遮罩、标签、页码和 logo 都应作为 HTML 对象实现；转 PPT 时应进一步重建为 PowerPoint 原生对象。
- 使用 `frontend-slides-editable`：读取 `/Users/chenlingxuan/.codex/skills/frontend-slides-editable/SKILL.md`、`STYLE_PRESETS.md`、`editor-runtime.md`、`examples/editable-deck-reference.html` 和 `viewport-base.css`。
- 生成单文件 HTML，内联 CSS/JS，零依赖；每页 `.slide` 必须为 `100vh` / `100dvh` 且 `overflow: hidden`。
- HTML to PPT 不要把整页 flatten 成图片；必须用 PPT 原生图片对象、文本框和形状对象重建。
- HTML to PPT 采用 `HTML → slide.json → editable PPTX` 路线；截图只能作为视觉校对参考，不能作为最终页。
- HTML 必须包含 print/PDF 友好的分页规则：每张 `.slide` 打印时独立成页，16:9 横向页面，无页内滚动和跨页断裂；如有导出按钮，应调用浏览器原生打印/保存为 PDF。
- 公司风格是长期学习对象。未收到新的风格指令时，先使用 `references/ppt-skill-knowledge.md` 的当前默认风格；收到用户补充后，应更新知识库中的公司风格记忆，而不是在单次项目里临时记住。
- Canva 只在用户明确要求时另行处理；PPTX 属于本 skill 第三阶段，可以直接执行。

## 修改记录规则

每次修改 `SKILL.md`、`agents/*.md` 或任何 `references/*.md` 文件，都必须在同一轮更新根目录文件 `log`。不要创建 `log.md`。

日志必须包括：

- 日期。
- 修改的 Markdown 文件。
- 用户需求或修改原因。
- 具体改动。
- 回退提示。
