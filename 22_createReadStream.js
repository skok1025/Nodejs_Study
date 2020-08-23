const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark : 16});
const data = [];

// 파일 읽기가 시작되면 "data 이벤트" 발생
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});

// 파일을 다읽으면 "end 이벤트" 발생
readStream.on('end', () => {
    console.log('end: ', Buffer.concat(data).toString());
});

// 파일을 읽는 도중 에러가 발생하면 "error 이벤트" 발생
readStream.on('error', (err) => {
    console.log('error : ', err);
});
