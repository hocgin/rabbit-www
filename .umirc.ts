// ref: https://umijs.org/config/
import {defineConfig} from 'umi';
import {resolve} from 'path';

export default defineConfig({
  title: 'HOCGIN.',
  antd: {
    import: false,
    configProvider: {
      theme: {
        token: {
          colorPrimary: '#767BDF'
        }
      }
    }
  },
  fastRefresh: true,
  dva: {},
  alias: {
    '@': resolve('./src'),
  },
  outputPath: './dist',
  exportStatic: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        {path: '/', component: '@/pages/index'},
      ],
    },
  ],
});
