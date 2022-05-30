const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

const result = words.filter(word => word.length > 6);
console.log("result: ", result);

const result2 = words.filter(word => word.indexOf("li") > -1);
console.log("result2: ", result2);