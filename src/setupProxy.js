const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/sendMail",
    createProxyMiddleware({
      target: "https://resolvelogobackend.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
