import { defineConfig } from 'vitepress'

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
      '/front-end/': [
        {
          items: [
            { text: '前端', link: '/front-end/front-end/' },
            {
              text: '前端基础',
              collapsed: false,
              // link: '/front-end/01.basic/00.basic',
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
                  text: '函数',
                  link: '/front-end/01.basic/04.function',
                },
                {
                  text: '箭头函数',
                  link: '/front-end/01.basic/04.arrow-function',
                },
                {
                  text: '高阶函数',
                  link: '/front-end/01.basic/04.higher-order-function',
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
                  text: '正则表达式',
                  link: '/front-end/01.basic/05.regexp',
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
                {
                  text: 'Promise A+规范实现',
                  link: '/front-end/01.basic/12.promise',
                },
                {
                  text: '实现finally、catch、all、race方法',
                  link: '/front-end/01.basic/12.promise_finally_catch_all_race',
                },
                {
                  text: '浏览器事件循环',
                  link: '/front-end/01.basic/13.event_loop',
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
