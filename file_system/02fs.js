var fs = require('fs');
//同步文件写入
//打开文件,注意路径是打开的目录的路径，这里的路径就是node的路径
let fd = fs.openSync('./file_system/test.txt', 'w');
//写入内容
fs.writeSync(fd, '这是字符串是1111');
//关闭文件
fs.closeSync(fd);
