const outputScrollStandart = document.getElementById("outputScrollStandart");
const outputScrollThrottling = document.getElementById(
  "outputScrollThrottling"
);
const eventScrollCounter = {
  standard: 0,
  throttled: 0,
};

document.addEventListener("scroll", () => {
  eventScrollCounter.standard += 1;
  outputScrollStandart.textContent = eventScrollCounter.standard;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventScrollCounter.throttled += 1;
    outputScrollThrottling.textContent = eventScrollCounter.throttled;
  }, 1500)
);
