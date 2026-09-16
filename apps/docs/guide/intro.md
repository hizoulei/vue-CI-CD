# 项目介绍

本仓库是一套面向团队的 Vue 3 工程模板，包含一个项目管理面板和一套 VitePress 文档。技术选型强调“少配置、强约束、可扩展”：

- Vue 3 + TypeScript + Vite：负责应用开发与类型安全。
- Pinia + Vue Router：管理跨页面状态和路由。
- pnpm workspace + Turborepo：组织 Monorepo 并缓存任务。
- shadcn-vue 风格组件 + Tailwind CSS：以可组合的源码组件构建界面。
- Oxlint + Oxfmt：在本地和 CI 中统一质量标准。

运行 `pnpm dev` 后，Turborepo 会同时启动 `apps/web` 和 `apps/docs`。
