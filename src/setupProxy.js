const { createProxyMiddleware } = require("http-proxy-middleware");

const api = {
  login: "/users/login",
  findId: "/users/findid",
  findPw: "/users/findpw",
  upload: "/product/upload",
  update: "/product/update",
  product: "/product",
  review: "/product/review",
  allProduct: "/allproduct",
  productDelete: "/product/delete"
}

module.exports = function (app) {
  for (let i in api) {
    app.use(
      createProxyMiddleware(api[i], {
        target: "http://146.56.137.48:46578",
        changeOrigin: true,
      })
    );
  }
};