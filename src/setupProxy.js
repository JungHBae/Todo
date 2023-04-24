const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use("/api", createProxyMiddleware({ target: "http://3.38.191.164", changeOrigin: true }));
};
