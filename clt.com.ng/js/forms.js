
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  const formData = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Send the data to the server using fetch
  fetch('https://example.com/submit-form', { // Replace with your server URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    document.getElementById("error-output").innerHTML = "<h3>" + 'There was an error sending your message at this time! Please use other alternatives (such as whatsApp, sms, or call) while we work on the server. Thank You!!' + "</h3>";
  })
  .catch((error) => {
    console.error('Error:', error);
    document.getElementById("error-output").innerHTML = "<h3>" + 'There was an error sending your message at this time! Please use other alternatives (such as whatsApp, sms, or call) while we work on the server. Thank You!!' + "</h3>";
    //alert('There was an error sending your message. Please try again later.');
  });
});



