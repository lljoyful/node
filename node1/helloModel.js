/* module.exports.name = '孙悟空';
exports.age = 18;
exports.hello = function () {
  console.log('我是孙悟空，hello');
}; */

module.exports = {
  name: '孙',
  age: 18,
  hello() {
    console.log('孙悟空hello');
  },
};
console.log(module.exports); //{ name: '孙', age: 18, hello: [Function: hello] }
console.log(exports); //{}
console.log(module.exports === exports); //false
