# 环境变量与测试

## 环境变量

应用只读取以 `VITE_` 开头的变量。复制 `apps/web/.env.example` 为 `.env.local` 后按环境修改，敏感密钥不要放入前端环境变量，因为它们会被打包进浏览器代码。

```bash
VITE_APP_NAME=Flowboard
VITE_API_BASE_URL=/api
VITE_ENABLE_ANALYTICS=false
```

`apps/web/src/config/env.ts` 负责集中读取变量、提供默认值并解析布尔开关，业务代码通过 `appConfig` 使用配置，避免在组件中散落 `import.meta.env`。

## Vitest

```bash
pnpm test
pnpm --filter @vue-ci-cd/web test:watch
```

测试文件与源码相邻，当前示例覆盖环境变量解析和 Pinia 任务 store。新增功能时，优先为状态转换和边界条件补充单元测试。
