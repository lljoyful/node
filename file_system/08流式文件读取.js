var fs = require('fs');
// 创建一个可读流
var rs = fs.createReadStream('./file_system/test3.txt');
//创建可写流
var ws = fs.createWriteStream('./file_system/test6.txt');

// pipe将可读流中的内容直接输入到可写流中
rs.pipe(ws);
