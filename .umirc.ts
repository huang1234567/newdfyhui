import { defineConfig } from 'dumi';

const repo = 'newdfyhui';

export default defineConfig({
  title: 'newdfyhui',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  favicon:
    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash', //采用hash模式刷新路由不会丢失
  },
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: process?.env?.NODE_ENV === 'development' ? `/${repo}/` : './',
  navs: {
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/huang1234567/newdfyhui',
      },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/huang1234567/newdfyhui',
      },
    ],
  },
  // 为组件文档项目按需引入 antd ，在 demo 和调试组件中使用。
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // more config: https://d.umijs.org/config
});
