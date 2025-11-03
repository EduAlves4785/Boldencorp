document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 60,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.3,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "resize": true
        }
      },
      "retina_detect": true
    });
  } else {
    console.error("particles.js não foi carregado corretamente.");
  }
});