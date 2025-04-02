document.addEventListener("DOMContentLoaded", function() {
  // Get all major sections for animation
  const sections = document.querySelectorAll('.About-Section, .Experience-Section, .Project-Section, .Contact-Section, .CLUB-SECTION');
  const sectionTitles = document.querySelectorAll('.section-titles');
  const containers = document.querySelectorAll('.content-wrapper, .proj-containers, .aboutcontainer, .club-container, .intro-container');
  
  // Add initial classes
  sections.forEach(section => section.classList.add('section-hidden'));
  sectionTitles.forEach(title => title.classList.add('section-hidden'));
  containers.forEach(container => container.classList.add('section-hidden'));
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Function to handle scroll
  function handleScroll() {
    // Animate sections
    sections.forEach(section => {
      if (isInViewport(section) && section.classList.contains('section-hidden')) {
        section.classList.add('section-visible');
      }
    });
    
    // Animate section titles
    sectionTitles.forEach(title => {
      if (isInViewport(title) && title.classList.contains('section-hidden')) {
        title.classList.add('section-visible');
      }
    });
    
    // Animate content containers with alternating directions
    containers.forEach((container, index) => {
      if (isInViewport(container) && container.classList.contains('section-hidden')) {
        container.classList.add('section-visible');
      }
    });
  }
  
  // Check on initial load
  setTimeout(handleScroll, 300);
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
}); 