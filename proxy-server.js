const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://makeup--api-herokuapp-com.translate.goog',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api/v1/products.json?product_type=blush&_x_tr_sl=en&_x_tr_tl=ru&_x_tr_hl=ru&_x_tr_pto=sc',
  },
}));

app.listen(5000, () => {
  console.log('Proxy server is running on http://localhost:5000');
});
