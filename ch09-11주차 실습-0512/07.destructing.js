function getPerson() {
  return {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    email: "john@gmail.com",
    city: "New York"
  };
}

var { firstName, lastName } = getPerson();
console.log(`${firstName} ${lastName}`);

function displayFullName( { firstName, lastName }) {
  console("displayFullName: ",`${firstName} ${lastName}`);
}

displayFullName(getPerson());


function getScores() {
  return [70, 80, 90];
}

let [score1, score2, score3] = getScores();
console.log(score1, score2, score3);


function getScores() {
  return [70, 80, 90, 100];
}

let [score4, score5, ...args] = getScores();
console.log(score4, score5, args[0], args[1]);

function getProfile() {
  return ["John", "Doe", ["Red", "Green"]];
}

let [firstName2, lastName2, [color1, color2]] = getProfile();
console.log(firstName2, lastName2, color1, color2);

