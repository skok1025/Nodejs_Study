const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node1</h1>');
    res.end('<p>Hello Server!</p>');
});

server.listen(8080);
server.on('listening', () => {
    console.log('8080 번 포트에서 대기 중입니다.');
});

server.on('error' , (err)=> {
    console.error(err);
});