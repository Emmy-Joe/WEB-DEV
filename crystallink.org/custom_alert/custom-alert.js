function showCustomAlert() {
    var overlay = document.getElementById("custom-alert-overlay");
    overlay.style.display = "block";
    
    var message = "Contact Us for Registration/Tutorials.";
    document.getElementById("custom-alert-message").textContent = message;

  }
  
  function hideCustomAlert() {
    var overlay = document.getElementById("custom-alert-overlay");
    overlay.style.display = "none";
  }


  
  