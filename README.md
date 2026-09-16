# Vue CI/CD 工程指南

这是一个使用 Vue 3 全家桶、TypeScript、pnpm、Monorepo、Turborepo、shadcn-vue、Tailwind CSS、Oxlint 与 Oxfmt 构建的示例仓库。

## 快速开始

```bash
pnpm install
pnpm dev
```

- 示例应用：http://localhost:5173
- 文档站点：http://localhost:4173

常用命令：`pnpm lint`、`pnpm typecheck`、`pnpm build`、`pnpm format:check`。

## 目录结构

```text
apps/web       Vue 项目管理面板
apps/docs      VitePress 工程文档
packages/ui    共享 shadcn-vue 风格组件
packages/config 共享 TypeScript 配置
```

完整说明请阅读 `apps/docs` 中的文档，推送到 main 后 GitHub Actions 会自动发布到 GitHub Pages。
