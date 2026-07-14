# PPT Skill Knowledge

## Proposal Writing

写作应像电影工作室 proposal，而不是普通市场方案。先给具体画面，再给抽象判断；有文化语境，但不要学术腔；有项目判断，但不要空喊口号。Deck 页面用短句和标题建立记忆点，proposal 正文用完整段落讲清逻辑。

默认结构：

1. 项目一句话。
2. 项目定位：形式、类型、受众、平台/市场适配。
3. 为什么现在：文化、商业、历史或情绪时机。
4. 叙事引擎：谁的旅程，什么冲突，什么变化。
5. 世界和气质：视觉氛围、时代、地理、情绪纹理。
6. 人物或主题设计。
7. 分集、环节或内容结构。
8. 导演/制片方法。
9. 制作价值和可执行性。
10. 受众价值、传播价值或品牌共创价值。
11. 收束陈述。

用户说“不要改”“原文保留”“一个字不要动”时，指定段落必须原文保留。可以在原文周围增加标题、标签、副标题、结构和连接语。源文本粗糙时，可以优化节奏、逻辑和 proposal 力度，但不得改变事实。

固定主创参考：

- Malcolm Clarke / 柯文思：导演、制片人、编剧；两届奥斯卡获奖者，四次奥斯卡提名者。
- Yi Han / 韩轶：制片人、导演、编剧；Artefact Entertainment 联合创始人；金马奖获奖制片人。
- Stuart Sender：导演、制片人、编剧；奥斯卡提名电影人，获奖新闻人。

如果用户提供了新的简介、照片、排序或职务，以用户版本为准。

## Deck Style

东注文化 / Artefact 的提案风格应是电影化、图像主导、带编辑判断的。它应该更接近 film treatment、影展 pitch、纪录片 proposal，而不是咨询公司 PPT。

核心特征：

- 16:9 宽屏。
- 每页有一个主视觉或清晰图像系统，图片占页面视觉大头。
- 图片数量和层次要足够：全幅背景、大图拼贴、局部特写、档案叠层、屏幕信息流、真实场景细节都可以组合使用。
- 大标题、克制但充分的正文、清楚的页面层级。
- 文字不能只剩口号；每页要有来自 proposal 的分点、判断、结构或说明。
- 语言必须统一。中文 proposal 做中文 deck，英文 proposal 做英文 deck；除非用户明确要求双语，不要中英混杂。
- 使用真实照片、公开剧照、档案、地图、地点、人物肖像、制作参考或纪录片纹理。
- 用半透明面板、渐变、局部遮罩或柔和底板保护文字，但不能把图片压到看不清。
- 使用侧边标签、页码、幽灵大字、图片说明、章节标记。
- 默认每张主页面都有清晰但克制的东注文化 / Artefact logo。

版式规则：

- 除素材来源、法律、数据附录等少数页面外，不做纯空白商务页。
- 不要默认纯黑背景；更好的层次来自真实照片、局部暗部、遮罩和文字框。
- 背景图可以整张铺满页面，并保持约 70-85% 可见度。
- 每页至少使用一张不同主图，必要时用小图拼贴补充信息层。
- 主视觉建议占页面 55-80%。
- 每页正文优先使用 3-5 个分点、短段落、关键词标签、对照表或流程步骤。
- 正式 proposal deck 可提高到 4-6 个有效分点，前提是字号、行距和文字框保护足够。
- 使用原生文本框、形状、logo 元素和图片，不要把整页压成一张图。

## Image Sourcing

图片优先级：

1. 用户提供的图片、logo、剧照、人物照、海报或制作素材。
2. 从旧库已批准 proposal deck 中提取的可复用素材和处理方式。
3. 真实可溯源的网络图片：官方剧照、公开肖像、新闻/图片档案、博物馆/图书馆档案、地点照片、地图、平台宣传图、已验证社交或制作页面。
4. 合适的授权图库或公共领域素材。
5. AI 图片只作为兜底或概念占位，并且必须清楚标注其性质。

公开人物、导演、演员、主创的脸必须优先搜索真实照片。不要用 AI 生成人脸来替代可搜索到的真实人物照片。

每个选中的外部图片都要记录：使用页面、图片主题、来源网站或所有者、URL 或本地路径、访问日期、已知授权/状态。Deck 交付时创建或更新 `source-notes.md`。

## Editable HTML Delivery

最终文件应能直接在浏览器中打开，并支持：

- `Edit` 模式。
- 文字直接编辑。
- 对象拖拽移动。
- 对象缩放。
- Pages 侧栏跳转、重排或管理页面。
- `Ctrl+S` / `Cmd+S` 本地保存。
- `Export HTML` 导出修改后的单文件 HTML。
- 浏览器打印/保存为分页 PDF。

生成可编辑 HTML deck 时，必须使用或借鉴：

- `/Users/chenlingxuan/.codex/skills/frontend-slides-editable/SKILL.md`
- `/Users/chenlingxuan/.codex/skills/frontend-slides-editable/STYLE_PRESETS.md`
- `/Users/chenlingxuan/.codex/skills/frontend-slides-editable/editor-runtime.md`
- `/Users/chenlingxuan/.codex/skills/frontend-slides-editable/examples/editable-deck-reference.html`
- `/Users/chenlingxuan/.codex/skills/frontend-slides-editable/viewport-base.css`

可选编辑引擎候选：

- Wikimedia VisualEditor：`https://github.com/wikimedia/VisualEditor`。它是基于 ContentEditable 的富文本 HTML 编辑器，适合复杂正文编辑能力评估。
- VisualEditor 不是当前默认 runtime。只有在它能保持单文件交付、对象级 slide 编辑、页面管理、保存、Export HTML 和分页 PDF 导出时，才考虑接入。
- 如果 VisualEditor 的依赖、体积或初始化复杂度会让提案 HTML 难以直接打开、难以轻微修改或难以打印分页，则继续使用 `frontend-slides-editable`，只在局部长文本编辑体验中借鉴其思路。

HTML 构建规则：

- 单文件交付，CSS 和 JS 内联。
- 零依赖，不需要 npm、构建工具或外部框架。
- 每页使用 `.slide`，必须为 `height: 100vh; height: 100dvh; overflow: hidden;`。
- 字号、间距和布局尽量使用 `clamp()`、百分比和视口单位。
- 每页内容不能在页内滚动；如果内容太多，拆成多页。
- 每个可移动/可编辑对象都应有稳定对象标识，便于保存和导出。
- 静态装饰可以放在 slide 背景层；用户可能修改的标题、正文、图片、数据、标签、logo 应放入可编辑对象层。
- 不要为了视觉一致性把整页导出成背景图；这样会破坏用户后续微调能力。只有照片纹理、不可修改背景、档案叠层等可作为背景层。
- 必须包含 print/PDF 规则：每张 `.slide` 打印为独立一页，16:9 横向页面，`break-after: page` 或兼容写法生效，最后一页不额外生成空白页。
- 如界面提供 `Export PDF`，按钮只负责调用浏览器打印流程；PDF 文件生成由浏览器完成，避免引入依赖或破坏单文件交付。

验收清单：

- HTML 可直接打开。
- 至少在 1280x720 视口下没有页内滚动和明显文字溢出。
- `Edit` 模式可进入和退出。
- 文本可直接编辑。
- 对象可拖拽和缩放。
- Pages 侧栏可打开。
- `Save` 或 `Ctrl+S` / `Cmd+S` 可用。
- `Export HTML` 存在。
- 浏览器打印/保存 PDF 时按 slide 分页。
- 图片可见且不只是装饰小图。
- 来源记录或 source notes 已保留。
- 文件中无明显 TODO、占位符或未替换提示词。

## Idea to Text / DOCX

`Idea to Text` 阶段的文档不是只写 proposal，也要为后续 HTML 和 PPT 服务。docx 中必须包含：

- 完整 proposal 正文。
- 一句话概念、项目定位和核心论证。
- HTML 逐页规划：每页做什么、写什么、视觉关系是什么。
- 图片插入计划：图片文件名、应出现页面、主图/副图/背景/人物照/档案图等用途。
- 东注文化 / Artefact logo 规则。
- 待确认事实和假设。

如果用户只给非常粗糙的 idea，也要先形成可读 proposal，再拆成页面计划。不要直接跳到做图或做网页。

## Text to HTML

`Text to HTML` 是最考验排版和美学的阶段，默认应遵守：

- 每页必须有东注文化 / Artefact logo。
- 用户给的图片优先于网络搜索和 AI 图片。
- 图片按照命名插入对应页面和对应区域；如果命名不清楚，先列映射表，不要随意乱放。
- 每页图片占视觉大头，主视觉一般占页面 55-80%。
- 文字必须来自 proposal 逻辑，不能变成空泛口号。
- 页面是 16:9 proposal slide，不是长网页文章。
- 图片、文字、遮罩、标签、页码、logo 保持对象化，便于后续 HTML to PPT 解析。

建议给 HTML 元素加稳定 class 或 data-role：`.slide`、`.bg-photo`、`.logo`、`.kicker`、`.claim`、`.body-text`、`.card`、`.meta`、`.page-number`。

## HTML to PPT

HTML 转 PPT 有两条路线：

1. 截图转 PPT：最像原稿，但不可编辑。
2. 结构化重建转 PPT：每个元素可编辑，视觉尽量还原，但无法保证 CSS 的 100% 像素级等价。

本 skill 默认采用第二种：

```text
HTML → slide.json → editable PPTX
```

转换原则：

- 不要把整页 flatten 成图片。
- 不要重新设计页面。
- 不要改写文案或重排结构。
- 图片转成 PPT 图片对象。
- 标题、正文、页码、说明转成 PPT 文本框。
- 遮罩、卡片、分割线、半透明底板转成 PPT 形状。
- 背景图转成全页图片对象。
- logo 转成独立图片或文本对象。

基础对象映射：

- HTML `.bg-photo` → PPT 全页图片。
- HTML `.kicker` → 文本框 + 必要时的短线形状。
- HTML `h1 / h2` → 标题文本框。
- HTML `.claim / .body-text` → 正文文本框。
- HTML `.card` → 半透明底板 + 顶线 + 标题 + 正文。
- HTML `.beat` → 小卡片。
- HTML `.big-route` → 路线三栏或阶段结构。
- HTML `.meta` → 底部说明和页码。
- HTML 网格、遮罩、分割线 → PPT 形状和线条。

限制：

- CSS 渐变、滤镜、blur、混合模式、复杂响应式布局会有损失。
- 中文字体可能被 PowerPoint 替换。
- 文本框高度和换行可能需要视觉校正。
- webp 等格式可能要先转 png。

## Company Style Memory

当前默认风格：东注文化 / Artefact 提案应是电影化、图像主导、真实素材优先、有编辑判断的 proposal deck。先用具体画面和叙事判断建立可信度，再用清晰结构帮助投资人、客户或合作方理解项目价值。

长期学习规则：

- 用户后续会逐步补充公司风格、偏好和反例；每次得到稳定偏好时，应更新本节或相关 Deck Style 规则。
- 不要把一次项目里的临时创意当成永久公司风格；只有用户明确说“以后都这样”“这是我们的风格”“默认采用”或多次重复出现的偏好，才写入长期规则。
- 风格学习应服务于更快生成可微调 HTML proposal：包括页面节奏、文字密度、图片处理、logo 位置、章节方式、结尾方式和 PDF 导出习惯。
- 当风格要求与可编辑性冲突时，优先保留可编辑性，再用可编辑对象、背景层和 print CSS 达成视觉效果。

## Reference Corpus

历史 reference deck 已统一放在当前工作目录的 `references/corpus/`，绝对路径为：

`/Users/chenlingxuan/Desktop/Work/Artefact/PPT SKILL/references/corpus/`

优先参考：

- 犯罪、金钱、香港、骗局、惊悚、年代犯罪：`20230512 Mr Clean Deck FINAL-Stuart.pptx`。
- 真实人物、旅行、文化观察、社会变化、中国叙事、国际视角：`2026 《再寻东方》策划方案.pdf`、`云端传媒-四分之一的人生- 恰好是老年-211210.pdf`。
- 战争、迁徙、运输、档案、记忆、民族历史：`生死搬运工.pdf`。
- 喜剧或商业类型片：`电影《别惹女司机》项目书.pdf`、`20260404 《别惹女司机》 项目书.pdf`。
- 国际行业、产业、IP、英文 pitch：`One Possible Future for the Saudi Film Industry.pdf`、`RMS Titanic IP Content Library Proposal.pdf`、`Zac Purton The Hong Kong Rider - V1 （Creatives Unfinished）.pdf`、`MoLFINAL.pdf`、`Slik Road Shenanigans - V2 - Jim.pdf`。

提取内容：页面顺序、章节节奏、标题话风、图片密度和图片类型、logo 位置、标题和正文大小关系、每页文字量、结尾页和团队页方式、版式网格、遮罩样式、章节标记、页码系统、强调色、图片裁切逻辑。

不要把旧项目专属事实、片名、人物照片、机密表述或独特第三方图片直接搬到新 deck，除非用户明确确认可以复用。

## Legacy Canva / PPTX

Canva 只作为显式用户要求时的额外导出。PPTX 现在是 `HTML to PPT` 阶段的正式交付路径。

若用户明确要求 Canva 或 PPTX：

- 保持文字、图片、logo、面板、遮罩、线条、标签、页码可编辑。
- Canva presentation 先准备 topic、audience、style、length 和逐页大纲，再走 Canva 大纲审阅。
- 使用 Canva 品牌模板时，必须先搜索 brand templates，让用户选择模板，再读取 dataset，确认可用后才能 autofill。
- PPTX 默认 16:9，每张主页面默认放 logo。
- 最后一页或独立 Markdown 文件包含图片来源记录。
