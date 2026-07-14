# HTML to PPT

## Role

把 HTML proposal 转成每个部分都能修改的 PPTX。转换时必须尽量保持 HTML 原排版，不重新设计，不随意改变页面布局、图片裁切、文字位置和视觉层级。

## Inputs

- `Text to HTML` 输出的 HTML 文件。
- 用户直接给的 HTML 文件、相关图片文件夹和 source notes。
- 用户提供的 `html-to-ppt-summary.md` 方法总结。
- `references/ppt-skill-knowledge.md` 中的 HTML to PPT 和 Legacy Canva / PPTX 章节。

## Core Principle

如果要求“原封不动”，整页截图放进 PPT 最像，但不可编辑。本 skill 要求“每个部分都能修改”，所以最终 PPT 不能使用整页截图作为页面内容，必须把 HTML 拆成 PowerPoint 原生对象：

- 图片转为 PPT 图片对象。
- 标题、正文、页码、图片说明转为 PPT 文本框。
- 遮罩、卡片、分割线、色块转为 PPT 形状。
- 背景图转为全页图片对象。
- 列表、卡片、路线、网格转为多个文本框和形状组合。
- 东注文化 / Artefact logo 转为独立图片或文本对象。

## Work

1. 读取 HTML 和相关图片资源，确认每页 `.slide` 数量、页面比例、字体、主色、logo 和图片路径。
2. 解析 HTML 成中间结构 `slide.json`，每页至少提取：
   - `backgroundImage`
   - `layout.kind`
   - `title`
   - `kicker`
   - `claim`
   - `bodyText`
   - `cards`
   - `beats`
   - `routes`
   - `sectionBlocks`
   - `meta`
   - `logo`
   - `pageNumber`
   - 图片路径和裁切信息
3. 用 `slide.json` 重建 16:9 PPTX；每页按 HTML 坐标和比例换算为 PPT 坐标。
4. 保持原 HTML 排版：不要重写标题、不要重新分栏、不要把图文位置换掉、不要为了 PPT 模板统一而改动页面节奏。
5. 本地图片直接嵌入 PPTX；PowerPoint 不支持或兼容性差的格式如 `.webp` 先转为 `.png`，但仍作为可替换图片对象插入。
6. 为常见 HTML 元素建立对象映射：
   - HTML `.bg-photo` → PPT 全页图片。
   - HTML `.kicker` → 文本框，可附橙色短线。
   - HTML `h1 / h2` → 标题文本框。
   - HTML `.claim / .body-text` → 正文文本框。
   - HTML `.card` → 半透明底板 + 顶线 + 标题 + 正文。
   - HTML `.beat` → 小卡片。
   - HTML `.big-route` → 路线/阶段结构。
   - HTML `.meta` → 底部说明和页码。
   - HTML `.logo` → 独立 logo 对象。
7. 只允许用整页截图做视觉对照和 QA，不允许把截图作为最终 PPT 页面的唯一内容。
8. 基础校验 PPTX：文件可打开、slide 数量正确、图片资源嵌入、文字是可编辑文本框、形状不是整页位图。

## Output Contract

最终回复必须包括：

- `pptx_path`
- `slide_json_path`，如果生成了中间文件。
- `source_html_path`
- 转换页数。
- 可编辑对象说明。
- 排版保持说明。
- 已知限制：例如 CSS 渐变、滤镜、blur、复杂响应式布局、中文字体替换、文本框换行误差。
