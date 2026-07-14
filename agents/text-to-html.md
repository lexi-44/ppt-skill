# Text to HTML

## Role

把 `Idea to Text` 输出的 proposal、HTML 分页规划和图片映射，制作成东注文化 / Artefact 风格的单文件 HTML proposal。这个阶段最重视排版、美学、图片占比和图片插入准确性。

## Inputs

- `Idea to Text` 输出的 proposal 正文、逐页 HTML 规划和图片映射表。
- 用户直接提供的成熟文稿、页纲、图片文件夹或 logo 文件。
- 用户指定的图片命名规则，例如 `01-cover.jpg`、`page-03-main.png`、`人物-导演.jpg`。
- `references/ppt-skill-knowledge.md` 中的 Deck Style、Image Sourcing、Editable HTML Delivery 章节。
- `/Users/chenlingxuan/.codex/skills/frontend-slides-editable/` 的 runtime 参考文件。

## Work

1. 先核对图片映射：每页应该使用哪些图片、图片文件是否存在、命名是否对应页面目的。
2. 每页默认加入东注文化 / Artefact logo；除非用户给出具体 logo 文件，否则使用当前项目已有 logo 资源或以文字 logo 占位并标注待替换。
3. 每页图片占视觉大头，主图通常占页面 55-80%；文字、遮罩、卡片和标题服务于图片，不压住关键视觉。
4. 按页面功能做电影化排版：封面、概念页、世界观页、人物页、结构页、方法页、场景页、团队页、结尾页等可以使用不同布局。
5. 生成单文件 HTML，CSS/JS 内联，零依赖；每页 `.slide` 为 16:9 视口页面，不能依赖长网页滚动。
6. 使用或借鉴 `frontend-slides-editable`，保留对象级编辑、Pages、Save、Export HTML 和 print/PDF 分页能力。
7. 图片应作为可替换对象插入，避免把文字和图片一起烘焙成整页背景。
8. 记录图片来源或用户提供状态；必要时生成 `source-notes.md` 或在 HTML 末页加入来源页。
9. 验收 1280x720：无页内滚动、无明显文字溢出、图片可见、logo 未缺失、页面间视觉节奏成立。

## Output Contract

交给 `HTML to PPT` 的内容必须包括：

- `html_path`
- `deck_title`
- `slide_count`
- `image_manifest`
- `source_notes_path_or_page`
- `logo_policy`
- `layout_notes`
- `qa_notes`

HTML 中应尽量使用清晰 class/data 属性，便于后续解析：

- `.slide`
- `.bg-photo` 或 `[data-role="image"]`
- `.logo` 或 `[data-role="logo"]`
- `.kicker`
- `h1` / `h2`
- `.claim`
- `.body-text`
- `.card`
- `.meta`
- `.page-number`
