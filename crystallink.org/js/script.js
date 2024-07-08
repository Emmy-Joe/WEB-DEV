
// Function to add a scroll event listener
function siteScroll() {
    // Get the header element
    var header = document.querySelector('.js-sticky-header');
  
    // Scroll event listener
    window.addEventListener('scroll', function() {
      // Get the current scroll position
      var scrollTop = window.scrollY;
  
      // Check if the scroll position is greater than 100
      if (scrollTop > 100) {
        // Add the 'shrink' class to the header
        header.classList.add('shrink');
      } else {
        // Remove the 'shrink' class from the header
        header.classList.remove('shrink');
      }
    });
  }
  
  // Execute the function to activate the scroll event listener
  siteScroll();
  