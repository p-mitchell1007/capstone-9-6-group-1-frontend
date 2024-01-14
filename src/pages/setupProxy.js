const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/youtubeApi',
    createProxyMiddleware({
      target: 'https://www.googleapis.com/youtube/v3',
      changeOrigin: true,
      pathRewrite: {
        '^/youtubeApi': '',
      },
    })
  );
};
