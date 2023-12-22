self.addEventListener("message", function ({ data }) {
  if (data.action === "calculateSum") {
    console.log("Computation started");
    console.time("complexsum");
    if (!data.limit)
      return this.postMessage({ responseType: "summationResult", sum: 0 });
    let sum = 0;
    for (let i = 0; i < data.limit; i++) {
      sum += i;
    }
    console.timeEnd("complexsum");
    this.postMessage({ responseType: "summationResult", sum });
  }
});
