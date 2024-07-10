

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };
  
    function scrollFunction() {
      if (document.body.scrollTop >1400 || document.documentElement.scrollTop > 1400) {
        var sideButtons = document.getElementsByClassName("sideBtn");
        for (var i = 0; i < sideButtons.length; i++) {
          sideButtons[i].style.display = "block";
        }
      } else {
        var sideButtons = document.getElementsByClassName("sideBtn");
        for (var i = 0; i < sideButtons.length; i++) {
          sideButtons[i].style.display = "none";
        }
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    // image in hero section
    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      var imageElement = document.querySelector('.bg-img-hero');
      
      // Adjust the scaling factor based on scroll position
      var scaleFactor = 1 + (scrollPosition / 3000);
      imageElement.style.transform = 'scale(' + scaleFactor + ')';
  });




  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var items = document.querySelectorAll('.hero-ads-item');
    
    items.forEach(function(item) {
        // Adjust the scaling factor based on scroll position
        var scaleFactor = 1 + (scrollPosition / 1000);
        item.style.transform = 'scale(' + scaleFactor + ')';
    });
});