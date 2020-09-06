const fs = require('fs');

fs.copyFile('readme4.txt', 'writeme4.txt', (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('복사 완료');
});