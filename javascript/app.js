// window.addEventListener("load", function (e) {
//   console.log("Window is loaded");
//   if (!("serviceWorker" in navigator))
//     return console.log("Service worker is not supported!");
//   console.log("Service worker supported");
//   navigator.serviceWorker
//     .register("./service-worker.js") // options { scope: "/imgs" }
//     .then(
//       (registration) => {
//         console.log("Service Worker Registered: " + registration.scope);
//       },
//       function (err) {
//         console.log("Service worker registration failed:", err);
//       }
//     );
// });

window.addEventListener("load", function (e) {
  console.log("Window is loaded");
  if (!("serviceWorker" in navigator))
    return console.log("Service worker is not supported!");
  console.log("Service worker supported");
  navigator.serviceWorker
    .register("./service-worker.js") // options { scope: "/imgs" }
    .then(
      (registration) => {
        console.log("Service Worker Registered: " + registration.scope);
      },
      function (err) {
        console.log("Service worker registration failed:", err);
      }
    );
});

const APP = {
  channel: new BroadcastChannel("newsify"),
  init: () => {
    console.log("Initialized");
    document
      .querySelector("#sendMessage")
      .addEventListener("click", APP.sendMessage);
    APP.channel.addEventListener("message", APP.showMessage);
  },
  sendMessage: (e) => {
    let value = document.querySelector("input#message").value;
    if (value.trim()) {
      console.log("Message sent");
      APP.channel.postMessage({ message: value });
    }
  },
  showMessage: (ev) => {
    console.log("Message recieved");
    if (ev && ev.data && ev.data.message) {
      const newMessage = document.createElement("p");
      const newText = document.createTextNode(ev.data.message);
      newMessage.appendChild(newText);
      document.body.appendChild(newMessage);
    }
  },
};

window.addEventListener("DOMContentLoaded", APP.init);
