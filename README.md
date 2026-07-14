# PPT SKILL

三段式 proposal 制作工作流，用于把电影、纪录片、剧集、品牌影像等项目需求，整理成一套专业提案材料。

## 三段工作流

1. **Idea to Text**（[`agents/idea-to-text.md`](./agents/idea-to-text.md)）
   把用户的 idea / brief 发展成完整 proposal 正文，同时规划 HTML 每页的内容与图片插入位置，最终生成 docx。
2. **Text to HTML**（[`agents/text-to-html.md`](./agents/text-to-html.md)）
   把文字方案和用户提供的图片，做成图像主导、每页带东注文化 logo 的精排单文件 HTML proposal。
3. **HTML to PPT**（[`agents/html-to-ppt.md`](./agents/html-to-ppt.md)）
   把 HTML 原样结构化重建成每个元素都可编辑的 PPTX，转换过程中不改动排版布局。

三段可以单独使用，也可以按顺序串联执行；三段如何交接、验收顺序见 [`agents/workflow.md`](./agents/workflow.md)。

适用场景：电影/纪录片/剧集/品牌影像 proposal、pitch deck、HTML proposal、可编辑 PPT 等。

## 目录结构

- [`SKILL.md`](./SKILL.md) — skill 总入口与工作流说明
- `agents/` — 三个阶段的 agent 定义，以及 workflow 交接说明
- [`references/ppt-skill-knowledge.md`](./references/ppt-skill-knowledge.md) — 写作、视觉、素材相关的知识库
- `tools/` — 辅助脚本（HTML 转可编辑 PPTX、构建示例 proposal 等）

> 说明：历史项目参考语料（各类客户提案 PDF/PPTX 原件）以及生成过的示例产出均涉及商业隐私，未包含在本仓库中，仅上传 skill 本体（agents/tools/references）。
