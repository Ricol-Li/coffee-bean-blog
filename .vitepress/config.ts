import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '咖啡豆的博客',
  description: '前端、后端、运维学习笔记',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon/vitepress-logo-mini.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front-end/front-end' },
      { text: '后端', link: '/back-end/back-end' },
      { text: '运维', link: '/operation/operation' },
    ],

    sidebar: {
      '/front-end/': [
        {
          items: [
            { text: '前端', link: '/front-end/front-end/' },
            {
              text: '前端基础',
              collapsed: false,
              link: '/front-end/01.basic/00.basic',
              items: [
                {
                  text: 'JS数据类型',
                  link: '/front-end/01.basic/01.data-type',
                },
                {
                  text: '数据类型转换',
                  link: '/front-end/01.basic/02.data-type-conversion',
                },
                {
                  text: '堆栈内存和执行上下文',
                  link: '/front-end/01.basic/03.heap、stack、ECStack',
                },
                {
                  text: '函数（function）',
                  link: '/front-end/01.basic/04.function',
                },
                {
                  text: '变量提升',
                  link: '/front-end/01.basic/05.var',
                },
                {
                  text: 'ES6中的块级上下文',
                  link: '/front-end/01.basic/06.ES6-block',
                },
                {
                  text: '闭包',
                  link: '/front-end/01.basic/07.closure',
                },
                {
                  text: '闭包在实战中的运用',
                  link: '/front-end/01.basic/07.closure&combat',
                },
                {
                  text: 'let/const/var 的区别',
                  link: '/front-end/01.basic/08.let&const&var',
                },
                {
                  text: 'JS的this指向',
                  link: '/front-end/01.basic/09.this',
                },
                {
                  text: '前端模块化规范及其进化史',
                  link: '/front-end/01.basic/10.module',
                },
                {
                  text: '迭代器',
                  link: '/front-end/01.basic/11.iterator',
                },
              ],
            },
          ],
        },
      ],
      '/back-end/': [
        {
          items: [{ text: '后端', link: '/back-end/back-end' }],
        },
      ],
      '/operation/': [
        {
          items: [{ text: '运维', link: '/operation/operation' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ricol-Li/coffee-bean-blog' },
    ],
  },
})
