const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        if (err) {
            console.error(err);
        }
    })
});

// 노드 내장 모듈의 에러는 실행 중인 프로세스를 멈추지는 않음.