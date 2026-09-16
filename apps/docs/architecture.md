# 架构设计

```text
apps/
  web/       # Vue 项目管理面板，消费共享 UI
  docs/      # VitePress 文档站点
packages/
  ui/        # shadcn-vue 风格组件与 Tailwind 令牌
  config/    # 共享 TypeScript 基础配置
```

依赖方向保持单向：应用可以依赖 packages，packages 之间只通过明确的 exports 暴露能力。共享 UI 不持有业务状态，Pinia store 留在 `apps/web` 内部。

## 数据流

任务状态由 Pinia store 管理，仪表盘通过 computed 派生筛选列表和进度；创建任务只更新 store，不直接操作 DOM。这样的边界便于未来接入 API 或持久化层。
