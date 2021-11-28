var fs = require('fs');
//流式文件写入
var ws = fs.createWriteStream('./file_system/test3.txt');
//监听流的打开
ws.once('open', () => {
  console.log('流打开了');
});
ws.once('close', () => {
  console.log('流关闭了');
});
//像文件输出内容
ws.write('通过可写流写入文件的内容1');
ws.write('通过可写流写入文件的内容2');
ws.write('通过可写流写入文件的内容3');
ws.write('通过可写流写入文件的内容4');
ws.close();
// ws.end();
