/*
 Zdefiniuj klase Counter
 * */
function main() {
  var counter = new Counter({
    duration: 20, // in sec, default: Infinity
    step: 2 // in sec, default: 1
  });

// on(eventName, fn) - setter do obslugi eventow: "start", "pause", "change", "end"
  counter.on("change", function(currentTime) {
    window.console.log("started at: " + currentTime);
  });

// start() - uruchamia counter
  counter.start();
  // na konsoli logowane jest kolejno co 1 sec:
// 2sec "started at: 2"
// 4sec "started at: 4"
// 6sec "started at: 6"
// ...
// 20sec "started at: 20"

// pause() - wstrzymuje counter
  counter.pause();
  counter.start();


// stop() - zatrzymuje/resetuje counter
//counter.stop();
}
