# UI 与样式

`packages/ui` 提供 `UiButton`、`UiBadge` 等可组合组件，API 采用 shadcn-vue 常见的 variant 思路，样式通过 Tailwind CSS 生成。组件源码属于仓库的一部分，业务应用可以直接按需组合、扩展，而不需要等待一个黑盒 UI 库。

全局设计令牌位于 `packages/ui/src/styles.css` 的 `@theme` 中。新增颜色或间距时，优先扩展令牌，再在组件中使用语义化 class。

```vue
<UiButton variant="secondary">取消</UiButton>
<UiBadge tone="green">已完成</UiBadge>
```
