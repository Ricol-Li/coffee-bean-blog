import { defineConfig } from 'vitepress'
import sideBar from './config/sidebar.ts'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  title: 'Enjoyment Record',
  description: '前端、后端、运维学习笔记',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon/vitepress-logo-mini.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/front-end/front-end',
      },
      { text: '后端', link: '/back-end/back-end' },
      { text: '运维', link: '/operation/operation' },
    ],

    sidebar: {
      ...sideBar,
      '/back-end/': [
        {
          items: [{ text: '后端', link: '/back-end/back-end' }],
        },
      ],
      '/operation/': [
        {
          items: [{ text: '运维', link: '/operation/operation' }],
        },
        {
          items: [
            { text: 'DevOps', link: '/operation/DevOps/00.DevOps' },
            {
              text: 'Github Actions',
              link: '/operation/DevOps/01.github-actions',
            },
          ],
        },
        {
          items: [
            {
              text: 'Linux常用命令',
              link: '/operation/linux/01.linux-command',
            },
          ],
        },
        {
          items: [
            {
              text: 'Nginx',
              collapsed: false,
              items: [
                {
                  text: 'Nginx文件结构',
                  link: '/operation/nginx/01.nginx各字段配置',
                },
                {
                  text: 'Nginx配置示例',
                  link: '/operation/nginx/02.nginx配置示例',
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ricol-Li/coffee-bean-blog' },
    ],
  },
})
