function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function myFunction() {
  console.log("myFunction start");
  const r = await sleep(10000);
  console.log("myFunction end");
}

myFunction();

// const r = await sleep(10000);