let userPoints = [
  { name: "사용자1", point: 20 },
  { name: "사용자2", point: 70 },
  { name: "사용자3", point: 89 },
  { name: "사용자4", point: 28 },
  { name: "사용자5", point: 47 },
  { name: "사용자6", point: 74 },
  { name: "사용자7", point: 12 },
  { name: "사용자8", point: 92 },
  { name: "사용자9", point: 19 },
  { name: "사용자10", point: 39 },
];

let sumPoints = userPoints.reduce((total, currentValue) => {
  console.log("total-point : ", `${total}-${currentValue.point}`);
  return total + currentValue.point;
}, 0);

// let sumPoints = userPoints.reduce((total, currentValue) => {
//   console.log("total-point : ", `${total}-${currentValue.point}`);
//   return total + currentValue.point;
// }, 10);


console.log("sumPoints: ", sumPoints);
