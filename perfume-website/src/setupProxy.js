const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/users/login", {
      target: "http://146.56.137.48:46578",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/users/findid", {
      target: "http://146.56.137.48:46578",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/users/findpw", {
      target: "http://146.56.137.48:46578",
      changeOrigin: true,
    })
  );
};