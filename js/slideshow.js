document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  
  // Show the first slide initially
  showSlides();
  
  // Set up auto slideshow
  let slideInterval = setInterval(function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlides();
  }, 5000); // Change image every 5 seconds
  
  // Function to switch slides
  function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active-dot");
    }
    
    // Show the current slide
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active-dot");
  }
  
  // Make the dots clickable
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
      slideIndex = i;
      showSlides();
      
      // Reset the interval to prevent quick transitions
      clearInterval(slideInterval);
      slideInterval = setInterval(function() {
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        showSlides();
      }, 5000);
    });
  }
  
  // Function for next/previous controls
  window.plusSlides = function(n) {
    slideIndex += n;
    
    // Wrap around if at the end or beginning
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    
    showSlides();
    
    // Reset the interval
    clearInterval(slideInterval);
    slideInterval = setInterval(function() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlides();
    }, 5000);
  };
  
  // Expose function for dot navigation
  window.currentSlide = function(n) {
    slideIndex = n - 1;
    showSlides();
    
    // Reset the interval
    clearInterval(slideInterval);
    slideInterval = setInterval(function() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlides();
    }, 5000);
  };
}); 