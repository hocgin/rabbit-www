import {defineConfig} from 'umi';

export default defineConfig({
  define: {
    baseUrl: 'http://api.hocgin.top:8080',
  },
  hash: true,
  favicon: 'https://hocg.in/favicon.ico',
  publicPath: `https://cdn.hocgin.top/${__dirname.split('/').pop()}/`,
});
