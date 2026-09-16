# Monorepo 与 Turborepo

仓库使用 `pnpm-workspace.yaml` 声明两个应用目录和共享包目录。应用只依赖它需要的包，公共能力放在 `packages` 中，避免复制配置。

Turborepo 通过 `turbo.json` 描述任务关系：`build` 会先构建依赖包，`dev` 是不缓存的常驻任务，lint 与 typecheck 则只保留结果状态。CI 中可以复用相同命令，保证本地和远端行为一致。

新增包时，建议同步补充 `package.json` 脚本、`tsconfig.json` 和 README，并使用 `workspace:*` 引用内部包。
