function workerFun() {
  for (let index = 0; index < 100; index++) {
    console.log("I am in worker loop", index);
    postMessage(index);
  }
}

workerFun();
