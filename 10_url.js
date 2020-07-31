const url = require('url');
const URL = url.URL;
const myURL = new URL('https://github.com/skok1025/Nodejs_Study?param=1');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('-----------------------------------');

const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=00100100#anchor');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));