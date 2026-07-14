# Three-Stage Workflow

## Order

1. `Idea to Text`
2. `Text to HTML`
3. `HTML to PPT`

三段可以单独用，也可以一起用。

- 用户给 idea 要 docx：只运行 `Idea to Text`。
- 用户给 proposal/文稿和图片要 HTML：运行 `Text to HTML`，必要时补一个轻量 page plan。
- 用户给 HTML 要 PPT：运行 `HTML to PPT`。
- 用户说全流程、从 idea 做到 PPT、三个都用：按顺序完整执行。

## Handoff

`Idea to Text` 到 `Text to HTML`：

- 完整 proposal 正文。
- HTML 每页做什么、写什么、图片插入什么位置。
- 图片命名和页面映射表。
- 必须保留事实和待确认假设。
- docx 输出路径。

`Text to HTML` 到 `HTML to PPT`：

- HTML 文件路径。
- slide 数量、页面比例和布局说明。
- 图片 manifest、logo 规则和 source notes。
- 已知 CSS 效果：渐变、滤镜、透明度、遮罩、裁切。

## QA Gate

进入最终交付前必须检查：

- Proposal 不是空泛市场话术。
- docx 包含完整 proposal、逐页 HTML 规划和图片映射。
- HTML 每页有论证，不只是标题。
- 每张主页面至少有一张不同真实主图方向。
- 用户给的图片按命名插入正确页面。
- 真实人物和历史/新闻素材不使用 AI 伪造。
- HTML 每页有东注文化 / Artefact logo。
- 1280x720 预览无明显溢出。
- Edit、Pages、Save、Export HTML 存在。
- 打印/导出 PDF 时每张 slide 独立分页，不出现两页挤在一张 PDF、内容跨页或页面内部滚动。
- HTML to PPT 保留原排版逻辑，不重新设计。
- PPT 中核心对象可编辑：图片、文字、logo、遮罩、卡片、线条、页码均不是整页截图的一部分。
