# 代码质量

Oxlint 负责快速发现未使用变量、Vue/TypeScript 常见错误；Oxfmt 负责统一换行、引号和缩进。两者都可以在提交前运行，也由 CI 强制执行。

```bash
pnpm lint
pnpm format:check
```

如果规则确实不适用于某一行，请使用最小范围的行级注释，并在评审中说明原因，避免关闭整个规则集。
