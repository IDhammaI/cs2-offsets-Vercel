import { createProxyMiddleware } from 'http-proxy-middleware';

export default (req, res) => {
    const proxy = createProxyMiddleware({
        target: 'https://raw.githubusercontent.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '', // Remove /api from the path
        },
    });
    proxy(req, res);
};
