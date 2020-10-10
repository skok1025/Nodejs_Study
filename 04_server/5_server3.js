// const http = require('http');

// const parseCookies = (cookie = '') =>
//   cookie
//     .split(';') 
//     .map(v => v.split('='))
//     .map(([k, ...vs]) => [k, vs.join('=')])
//     .reduce((acc, [k, v]) => {
//         acc[k.trim()] = decodeURIComponent(v);
//         return acc;
//     }, {});

// http.createServer((req, res) => {
//     const cookies = parseCookies(req.headers.cookie);
//     console.log(req.url, cookies);
//     res.writeHead(200, {'Set-Cookie' : 'mycookie=test'});
//     res.end('Hello Cookies');
// })
// .listen(8080, () => {
//     console.log('8080번 포트에서 서버 대기중.');
// })

const http = require('http');

// 쿠키 파싱을 위한 함수
const parseCookies = (cookie = '') =>
  cookie
    .split(';') 
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});

const server = http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(cookies);
    res.writeHead(200, {'Set-Cookie' : 'mycookie=test; Path=/; Max-age=300; HttpOnly;'}); // 쿠키 저장.
    res.end('Hello Cookies');
});

server.listen(8080);