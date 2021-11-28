var fs = require('fs');
// 创建一个可读流
var rs = fs.createReadStream('./file_system/test3.txt');
//创建可写流
var ws = fs.createWriteStream('./file_system/test5.txt');
// 监听流的开启和关闭
rs.once('open', () => {
  console.log('可读流打开了');
});
rs.once('close', () => {
  console.log('可读流关闭了');
  // 关闭可写流
  ws.close();
});
ws.once('open', () => {
  console.log('可写流打开了');
});
ws.once('close', () => {
  console.log('可写流关闭了');
});
//读取数据
rs.on('data', (data) => {
  console.log(data);
  // 将读入的数据写到文件中
  ws.write(data);
});
