particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#56a0d3"  // will be dynamically updated
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.9,
      "random": false
    },
    "size": {
      "value": 15,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "size_min": 5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 130,
      "color": "#8ec5fc",
      "opacity": 0.3,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.6
        }
      },
      "bubble": {
        "distance": 200,
        "size": 20,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 160,
        "duration": 0.5
      },
      "push": {
        "particles_nb": 3
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


document.addEventListener("click", () => {
  const colors = [
    "000000", "ffffff", "#56a0d3"
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  if (window.pJSDom && window.pJSDom[0]) {
    const particles = window.pJSDom[0].pJS.particles;

    // Update main particle color
    particles.color.value = randomColor;
    particles.color.rgb = hexToRgb(randomColor);

    // Update each particle individually
    particles.array.forEach(p => {
      p.color.value = randomColor;
      p.color.rgb = hexToRgb(randomColor);
      // optional: update line link color too
      p.line_linked_color_rgb_line = hexToRgb(randomColor);
    });

    // Update line_linked setting globally if you want the links to match
    particles.line_linked.color = randomColor;
  }
});

function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}