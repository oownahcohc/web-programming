function say(message = "매개변수를 넣어주지 않으면 출력되는 기본 값") {
  console.log(message);
}

say();
say("새로운 매개변수가 출력됨");


function sum(...args) {
  console.log("args: ", args);

  let total = 0;
  for (let x of args) total += x;

  console.log("total: ", total);
  return total;
}

sum(3,2,5,7,4,23);
sum(3,2);
sum(21, 17, 38);