const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Sikdang Restaurant',
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/sikdang-restaurant/' : '/',
};
