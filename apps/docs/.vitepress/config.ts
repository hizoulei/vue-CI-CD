import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Vue CI/CD 工程指南',
  description: 'Vue 3 全家桶现代工程实践',
  base: process.env.GITHUB_ACTIONS ? '/vue-CI-CD/' : '/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/intro' },
      { text: '架构', link: '/architecture' },
      { text: 'CI/CD', link: '/cicd' },
      { text: '示例应用', link: 'http://localhost:5173' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '项目介绍', link: '/guide/intro' },
            { text: '本地开发', link: '/guide/setup' },
          ],
        },
        {
          text: '工程实践',
          items: [
            { text: 'Monorepo 与 Turborepo', link: '/guide/monorepo' },
            { text: '环境变量与测试', link: '/guide/env-testing' },
            { text: 'UI 与样式', link: '/guide/ui' },
            { text: '代码质量', link: '/guide/quality' },
          ],
        },
      ],
      '/architecture': [
        { text: '架构设计', items: [{ text: '目录与依赖边界', link: '/architecture' }] },
      ],
      '/cicd': [{ text: '持续集成与部署', items: [{ text: 'GitHub Actions', link: '/cicd' }] }],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/hizoulei/vue-CI-CD' }],
    footer: { message: 'Vue 3 现代工程实践', copyright: 'Released under the MIT License.' },
  },
});
