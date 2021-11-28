let fs = require('fs');
fs.open('./file_system/test.txt', 'w', (err, fd) => {
  if (!err) {
    //如果没有出错，则写入
    fs.write(fd, 'hello当发送', (err) => {
      if (!err) {
        console.log('写入成功');
      }
      fs.close(fd, (err) => {
        if (!err) console.log('关闭成功');
      });
    });
  }
});
