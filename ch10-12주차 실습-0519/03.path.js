const path = require("path");

const strPath1 = "/Users/Documents/lecture/";
const strPath2 = "./webProg/ch10/03.path.js";
const objPath = path.parse(strPath2);

console.log("basename", path.basename(strPath2));
console.log("delimiter", path.delimiter);
console.log("dirname", path.dirname(strPath2));
console.log("extname", path.extname(strPath2));
console.log("isAbsolute", path.isAbsolute(strPath2));
console.log("join", path.join(strPath1,strPath2));
console.log("objPath", objPath);
console.log("format", path.format(objPath));
console.log("sep", path.sep);