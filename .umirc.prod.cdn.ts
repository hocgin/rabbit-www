import {defineConfig} from 'umi';

export default defineConfig({
  define: {
    baseUrl: 'https://api.hocgin.top',
  },
  ssr: {},
  hash: true,
  favicons: ['https://cdn.hocgin.top/uPic/favicon.ico'],
  publicPath: `https://cdn.hocgin.top/${__dirname.split('/').pop()}/`,
});
