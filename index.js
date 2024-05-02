function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 50;
var p = document.querySelector("p");
var delay = speed + speed;

// type affect to header

// type affect to body
setTimeout(function () {
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);
