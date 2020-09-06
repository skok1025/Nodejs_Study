const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');

writeStream.on('finish', ()=>{
    console.log('piping end...');
});

readStream.pipe(writeStream); // read 내용을 => write 함.