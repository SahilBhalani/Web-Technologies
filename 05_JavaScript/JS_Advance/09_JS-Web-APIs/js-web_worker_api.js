// * Web Worker API
// A web worker is a JavaScript running in the background, without affecting the performance of the page.
//When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
// {
//     let w;

//     function startWorker() {
//         if(typeof(w) == "undefined") {
//             w = new Worker("demo_worker.js");
//         }
//         w.onmessage = function(event) {
//             document.getElementById('result').innerHTML = event.data;
//         };
//     }

//     function stopWorker() {
//         w.terminate();
//         w = undefined;
//     }
// }
