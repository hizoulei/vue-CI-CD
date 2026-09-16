# GitHub Actions

工作流位于 `.github/workflows/ci.yml`，触发于 Pull Request 和推送到 `main`：

1. 使用 pnpm 10 安装依赖并启用 pnpm store 缓存。
2. 并行执行格式检查、Oxlint、类型检查和全部 workspace 构建。
3. `main` 分支通过 VitePress 预览构建并发布 `apps/docs/.vitepress/dist` 到 GitHub Pages。

首次启用时，请在仓库 Settings → Pages → Source 选择 GitHub Actions，并确认仓库名与 VitePress `base`（默认 `/vue-CI-CD/`）一致。如果仓库改名，只需同步修改 `.vitepress/config.ts`。
