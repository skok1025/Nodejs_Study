const http = require('http');
const fs =  require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';') 
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});

const server = http.createServer((req, resp) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        resp.writeHead(302, {
            Location: '/',
            'Set-Cookie' : `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/` ,
        });
        resp.end();
    } else if (cookies.name) {
        resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        resp.end(`${cookies.name} 님 안녕하세요!`);
    } else {
        fs.readFile('./server4.html', (err, data) => {
            if (err) {
                throw err;
            }
            resp.end(data);
        })
    }
});

server.listen(8080);