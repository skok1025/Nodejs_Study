const path = require('path');
const string = __filename;

console.log('path.sep: ', path.sep); // 경로 구분자 : \
console.log('path.delimiter: ', path.delimiter); // 환경변수 구분자 : ;
console.log('------------------------------');
console.log('path.dirname(): ', path.dirname(string));
console.log('path.extname(): ', path.extname(string));
console.log('path.basename(): ', path.basename(string));
console.log('path.basename(): ', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse(): ', path.parse(string));
console.log('path.format(): ', path.format({
    dir : 'C:\\users\skok',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\skok\\\path.js')); // 정상경로로 변환
console.log('------------------------------');
console.log('path.isAbsolute(): ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(): ', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\skok\\path.js', 'C:\\shkim')); // 상대경로로 찾기
