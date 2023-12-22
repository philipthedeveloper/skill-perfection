onconnect = function (e) {
  console.log("A new connection to worker file");
  console.log(e);
  const port = e.ports[0];

  port.onmessage = messageHandler;
};

function messageHandler(e) {
  console.log("Message received in shared worker: ", e);
  this.postMessage("Sending message to the main thred");
}
