let userList = [{
    firstName: "재석", lastName: "유"
  }, {
    firstName: "종국", lastName: "김"
  }, {
    firstName: "세찬", lastName: "양"
  },{
    firstName: "석진", lastName: "지"
  }, 
];

console.log("userListL ", userList);

let userListConv = userList.map(user => ({
  fullName: user.lastName + user.firstName,
  firstName: user.firstName,
  lastName: user.lastName,
  nameWord1: user.lastName[0],
  nameWord2: user.firstName[0],
  nameWord3: user.firstName[1]
}));

console.log("usrListConv: ", userListConv);