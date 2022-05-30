const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("반환할 성공 결과 데이터");
  }, 1000);
});

promise
  .then(successData => {
    console.log(successData);
  })
  .catch(error =>{
    console.log(error);
  });

console.log("Promise 이후에 코딩된 코드");