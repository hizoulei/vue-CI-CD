# 本地开发

## 环境要求

- Node.js 22 或更高版本
- pnpm 10

## 安装与启动

```bash
pnpm install
pnpm dev
```

仅启动单个应用时，可以在对应目录执行 `pnpm dev`。修改 `packages/ui` 后，Vite 会通过 workspace 链接立即更新示例应用。

## 提交前检查

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```
