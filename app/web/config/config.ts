import {defineConfig} from 'umi';
import routerConfig from '../router.config';

export default defineConfig({
  ssr: {
    devServerRender: true,
  },
  alias: {
    '@': '/app/web',
    '@@': '/app/web/.umi',
  },
  outputPath: '../public',
  hash: true,
  manifest: {
    fileName: '../../config/manifest.json',
    publicPath: '',
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {},
  dva: {
    immer: true,
    // hmr: false,
  },
  theme: {
    'primary-color': '#767BDF',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routes: [...routerConfig],
});
