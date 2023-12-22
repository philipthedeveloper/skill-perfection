const workerThreadOne = new Worker("./workerpool/1.js");
const workerThreadTwo = new Worker("./workerpool/2.js");
const workerThreadThree = new Worker("./workerpool/3.js");
const workerThreadFour = new Worker("./workerpool/4.js");
const workerThreadFive = new Worker("./workerpool/5.js");
const workerThreadSix = new Worker("./workerpool/6.js");
const workerThreadSeven = new Worker("./workerpool/7.js");
const workerThreadEight = new Worker("./workerpool/8.js");
const workerThreadNine = new Worker("./workerpool/9.js");
const workerThreadTen = new Worker("./workerpool/10.js");
const workerThreadEleven = new Worker("./workerpool/11.js");
const workerThreadTwelve = new Worker("./workerpool/12.js");
const workerThreadThirteen = new Worker("./workerpool/13.js");
const workerThreadFourteen = new Worker("./workerpool/14.js");
const workerThreadFiveteen = new Worker("./workerpool/15.js");

const workerPool = [
  workerThreadOne,
  workerThreadTwo,
  workerThreadThree,
  workerThreadFour,
  workerThreadFive,
  workerThreadSix,
  workerThreadSeven,
  workerThreadEight,
  workerThreadNine,
  workerThreadTen,
  workerThreadEleven,
  workerThreadTwelve,
  workerThreadThirteen,
  workerThreadFourteen,
  workerThreadFiveteen,
];

export default workerPool;
