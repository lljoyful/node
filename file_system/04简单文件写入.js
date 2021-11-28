var fs = require('fs');
fs.writeFile('./file_system/test.txt', '这是写入的内容', { flag: 'a' }, (err) => {
  if (!err) {
    console.log('写入成功');
  }
});
