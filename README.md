# INTRE Website

INTRE 官网静态站点源码。该仓库对应 `project003125/INTRE-website`，线上地址为：

```text
https://project003125.github.io/INTRE-website/
```

## 一、项目性质

本仓库是纯静态站点，当前不依赖构建工具或包管理器。主要文件类型为：

- `*.html`：首页、系统子页面、教材章节与附录页面
- `shared/brand.css`：品牌设计 token，对应 Vault 中 `06-格式治理/06-S-05-INTRE-品牌视觉规范.md`
- `shared/components.css`：导航、页脚、卡片、按钮、表格、徽章等共享组件
- `shared/nav-toggle.js`：移动端导航菜单交互
- `assets/`：Logo、favicon 与触点图标资源

## 二、与 06 规范的关系

本仓库不是 Markdown 文档体系，因此不套用 `06-S-01-INTRE-文档生产标准.md` 的 YAML/frontmatter 规则；但必须遵守以下 06 系列约束：

| 规范 | 对网站的要求 |
|------|--------------|
| `06-S-05-INTRE-品牌视觉规范.md` | 优先使用 Navy、Amber、Slate、大地通道色与既有 Logo / favicon 规则 |
| `06-S-06-INTRE-Agent协作标准.md` | 修改前确认 Git 状态；提交时使用已登记 Agent 身份；不要覆盖其他 Agent 的未确认变更 |
| `06-S-07-INTRE-Agent长期记忆.md` | 区分顶层 `INTRE-vault` 与本仓库 `INTRE-website`，网站任务需在 `-website` 内单独查看状态 |

## 三、维护原则

1. 优先复用 `shared/brand.css` 中的设计 token，不新增平行色彩、字体、阴影体系。
2. 页面级样式可以存在，但跨页面复用样式应沉淀到 `shared/components.css`。
3. 避免新增内联 `style`、内联 `onclick` 与不必要的 `!important`。
4. 新增页面必须包含 `<title>`、`meta name="description"`、Open Graph 标题与描述。
5. 导航按钮必须保留 `aria-expanded` 与 `aria-controls`，移动端菜单交互由 `shared/nav-toggle.js` 统一处理。
6. 图片资源必须提供 `alt`；非关键图片建议添加 `loading="lazy"` 与 `decoding="async"`。
7. 修改教材批量页面前，先判断页面是否为生成产物；优先修共享组件，避免手工逐页漂移。

## 四、质量检查清单

提交前建议检查：

```bash
git status --short
```

人工审查重点：

- 是否仍使用品牌 token，而非随意硬编码颜色与阴影
- 是否存在新增内联样式或内联事件处理器
- 移动端导航是否可用，Escape 与点击链接后是否关闭菜单
- 主要页面是否有语义化 `<main>`、清晰标题与 SEO 描述
- 是否误改 `assets/`、生成教材页面或非本任务目标文件

## 五、当前质量基线

截至 2026-06-12，本仓库已完成以下治理：

- 共享品牌 token 集中在 `shared/brand.css`
- 大部分跨页面组件集中在 `shared/components.css`
- 移动端导航交互集中在 `shared/nav-toggle.js`
- 首页与主要子页面具备基础 SEO / Open Graph 元信息
- 导航与主体内容使用语义化结构，并保留跳转到主体内容的可访问性路径
