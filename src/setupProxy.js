const { createProxyMiddleware } = require("http-proxy-middleware");

const api = {
  login: "/users/login",
  register: "/users/register",
  findId: "/users/findid",
  findPw: "/users/findpw",
  findPwCode: "/users/findpwcode",
  resetPw: "/users/resetpw",
  info: "/users/info",
  delete: "/users/delete",
  purchase: "/users/purchase",
  cartview: "/users/cartview",
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