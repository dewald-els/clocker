(function(win) {
  let padDigits = function(digit) {
    return ("00" + digit).substr(-2);
  };

  let createElement = function(id) {
    let element = document.createElement("span");
    element.id = id;
    return element;
  };

  let createClockSeperator = function(seperator) {
    let elSeperator = document.createElement("span");
    elSeperator.innerText = seperator;
    return elSeperator;
  };

  let clockElement = null;
  let elDigitsHr   = createElement("digits-hr");
  let elDigitsMin = createElement("digits-min");
  let elDigitsSec = createElement("digits-sec");
  let seperator   = createClockSeperator(":");
  let timeCounter = null;

  let initializeClock = function(clockElementId) {
    clockElement = document.getElementById(clockElementId);

    if (!clockElement) {
      throw "Could not find an clock element with ID " + clockElementId;
    }

    setupClock();
    startClock();
  };

  let setupClock = function() {
      clockElement.appendChild(elDigitsHr);
      clockElement.appendChild(seperator);
      clockElement.appendChild(elDigitsMin);
      clockElement.appendChild(seperator.cloneNode(true));
      clockElement.appendChild(elDigitsSec);
  };

  let startClock = function() {
    setCurrentTime();
    timeCounter = setInterval(function() {
      setCurrentTime();
    }, 1000);
  };

  let stopClock = function() {
    console.log("Stopping clock...");
    clearInterval(timeCounter);
  };

  let setCurrentTime = function() {
    let date = new Date();
    elDigitsHr.innerText = padDigits(date.getHours());
    elDigitsMin.innerText = padDigits(date.getMinutes());
    elDigitsSec.innerText = padDigits(date.getSeconds());
  };

  let clocker = {
    init: initializeClock,
    start: startClock,
    stop: stopClock
  };

  window.Clocker = clocker;
})(window);
