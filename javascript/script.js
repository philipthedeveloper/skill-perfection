const worker = new Worker("./worker.js");
const linearSearchWorker = new Worker("./linearSearchWorker.js");
const sharedWorker = new SharedWorker("./shared-worker.js");
import workerPool from "./workerConstructor.js";
const calculateBtn = document.querySelector("#calculateBtn");
const changeBtn = document.querySelector("#changeBtn");
const linearBtn = document.querySelector("#linearBtn");
const limitInput = document.querySelector("#fib-range");

let sumOutput = [];
let threadNeeded = 0;

workerPool.forEach((workerThread) => {
  workerThread.onmessage = function ({ data }) {
    if (data.responseType === "summationResult") {
      sumOutput.push(data.sum);
      if (sumOutput.length === threadNeeded) {
        addResultsFromThreads();
      }
    }
  };
});

function addResultsFromThreads() {
  console.log(sumOutput);
  let sum = 0;
  for (let i = 0; i < sumOutput.length; i++) {
    sum += sumOutput[i];
  }
  alert("Done: " + sum);
}

worker.onmessage = function (event) {
  alert(`The sum is ${event.data.sum}`);
};

worker.addEventListener("done", function (e) {
  console.log("Custom event called: ", e.data);
});

calculateBtn.addEventListener("click", function (event) {
  // sumOutput = [];
  // threadNeeded = 0;
  // let limit = limitInput.value;
  // let length = limit.length;
  // const workersNeeded = Math.pow(10, length) / Math.pow(10, 7);
  // const roundWorkersNeeded = Math.round(workersNeeded);
  // // console.log(roundWorkersNeeded);
  // let exponentialResult;
  // if (roundWorkersNeeded === 0) exponentialResult = 1;
  // else exponentialResult = Math.log10(roundWorkersNeeded) + 1;
  // console.log(exponentialResult);
  // threadNeeded = exponentialResult;
  // let workerLimit = limit / exponentialResult;
  // console.log(workerLimit);
  // for (let i = 0; i < exponentialResult; i++) {
  //   workerPool[i].postMessage({ action: "calculateSum", limit: workerLimit });
  // }
  // worker.postMessage({ action: "calculateSum", limit: 100000 });
  sharedWorker.port.postMessage("Testing shared worker");
});

sharedWorker.port.onmessage = function (e) {
  console.log("Message from shared worker: ", e);
};

changeBtn.addEventListener("click", function (e) {
  if (document.body.style.background !== "green")
    document.body.style.background = "green";
  else document.body.style.background = "blue";
});

linearBtn.addEventListener("click", function (event) {
  linearSearchWorker.postMessage("dolinearsearch");
});

linearSearchWorker.onmessage = function (event) {
  alert(`The sum is ${event.data}`);
};
