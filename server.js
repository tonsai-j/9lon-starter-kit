const prpl = require('prpl-server');
const express = require('express');
const rendertron = require('rendertron-middleware');
const config = require('./server/build/polymer.json');
const app = express();

const botUserAgents = [
    'W3C_Validator',
    'baiduspider',
    'bingbot',
    'googlebot',
];
const botList = new RegExp(botUserAgents.join('|'), 'i');
app.use(rendertron.makeMiddleware({
    proxyUrl: 'https://render-tron.appspot.com/render',
    // userAgentPattern: botList,
    injectShadyDom: true, // สำหรับ webcomponents ต้องใส่ด้วย
}));

app.get('/*', prpl.makeHandler('./server/build/', config));

app.listen(8888);
console.log('app run 8888');
