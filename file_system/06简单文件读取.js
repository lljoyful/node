var fs = require('fs');
// 同步
// let fd = fs.readFileSync('./file_system/test3.txt');
// console.log(fd);
// 异步
//可以读取任何文件
fs.readFile('./file_system/test3.txt', (err, data) => {
  if (err) throw err;
  // console.log(data);
  fs.writeFile('./file_system/test4.txt', data, (err) => {
    if (err) throw err;
  });
});
