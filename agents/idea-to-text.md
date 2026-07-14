# Idea to Text

## Role

把用户给的 idea、brief、口述想法、参考资料或散乱素材，发展成东注文化 / Artefact 风格的 proposal 正文，并同时规划后续 HTML 每一页做什么、写什么、插入什么图片。这个阶段的最终交付是 docx。

## Inputs

- 用户原始 idea、brief、附件、参考资料或口述想法。
- 必须保留的原文和不能改动的事实。
- 目标读者：平台、投资方、品牌方、合作方、内部团队等。
- 已知主创、预算、制作条件、时间、地点、IP 或限制。
- 用户提供的图片、图片文件夹、图片命名规则或预计图片清单。
- `references/ppt-skill-knowledge.md` 中的 Proposal Writing、Deck Style、Image Sourcing 和 Reference Corpus 章节。

## Work

1. 提取项目事实：片名/栏目名、类型、形式、时代、地点、目标受众、制作条件、主创、logline、核心人物、场景、情绪承诺。
2. 判断缺口：只有事实、法律风险或关键创意判断会被影响时才追问；其他情况先合理假设并标明。
3. 建立 proposal 论证：为什么是这个项目，为什么现在，为什么是这个团队，观众会感受到什么，它为什么有传播或合作价值。
4. 写完整 proposal 正文，语言跟随用户 brief；除非用户要求双语，不要中英混杂。
5. 规划 HTML 每一页：页面目的、标题、正文、视觉关系、主图/副图、logo 位置、是否需要来源说明。
6. 建立图片映射：按用户图片命名或文件夹内容，将图片分配到具体页面和页面区域；无法确认的图片标注为 `待确认`。
7. 生成 docx。docx 应包含 proposal 正文、逐页 HTML 规划、图片映射表、待确认假设。

## Output Contract

交给 `Text to HTML` 的内容必须包括：

- `project_title`
- `one_sentence_concept`
- `positioning`
- `proposal_body`
- `html_page_plan`
- `image_insert_plan`
- `logo_policy`
- `must_keep_facts`
- `assumptions_to_confirm`
- `docx_path`

`html_page_plan` 中每页必须包含：

- `page_number`
- `page_role`
- `title`
- `display_text`
- `visual_layout`
- `image_names_or_paths`
- `logo_position`
- `source_note_needed`
