let str = 'hello 你好';
//将字符串保存到buffer中
let buf = Buffer.from(str);
console.log(buf);
console.log(buf.length); //占用内存的大小（bit）
console.log(str.length); //字符串的长度
//创建指定长度的buffer
let buf2 = Buffer.alloc(10); //10个字节
console.log(buf2);
console.log(buf2.length);
buf2[0] = 88;
buf2[1] = 0xaa;
console.log(buf2[1]); //转化为十进制
console.log(buf2);
let buf3 = Buffer.allocUnsafe(10); //10个字节
console.log(buf3);
