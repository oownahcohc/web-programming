function getFullName(firstName, lastName) {
  return lastName + " " + firstName;
}

var funcFullName = function (firstName, lastName) {
  return lastName + " " + firstName;
};

const arrowFuncFullName1 = (firstName, lastName) => {
  return `${lastName} ${firstName}`;
};

const arrowFuncFullName2 = (firstName, lastName) => `${lastName} ${firstName}`;

const arrowFuncParamNone = () => "매개변수가 없는 함수";

console.log(getFullName("호동", "강"));
console.log(funcFullName("수근", "이"));
console.log(arrowFuncFullName1("지원", "은"));
console.log(arrowFuncFullName2("민호", "송"));
console.log(arrowFuncParamNone());