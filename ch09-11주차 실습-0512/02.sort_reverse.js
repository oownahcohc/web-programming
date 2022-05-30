let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log("fruits", fruits);

let points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);

console.log("오름차순 points: ", points);

points.sort((a, b) => b -a);
console.log("내림차순 points: ", points);

points.reverse();

console.log("reverse points: ", points);