self.onmessage = function ({ data }) {
  if (data === "dolinearsearch") {
    console.log("Search started");
    for (let i = 0; i < 10000000000; i++) {
      if (i === 9999999999) {
        this.postMessage(`Found match: ${i}`);
      }
    }
  }
};
