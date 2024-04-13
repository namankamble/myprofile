let navbar = document.querySelector('.header .navbar');
window.onscroll = () =>{
    navbar.classList.remove('active');
    if(window.scrollY > 91){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}

const toggleButton = document.getElementById('toggleButton');

// Add event listener for click event
toggleButton.addEventListener('click', function() {
  // Toggle the active class
  this.classList.toggle('active');

  // Toggle the navigation menu visibility
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});

// Add event listener to detect clicks outside the navbar
document.addEventListener('click', function(event) {
  const navbar = document.querySelector('.navbar');
  const toggleButton = document.getElementById('toggleButton');

  // Check if the clicked element is not part of the navbar or toggle button
  if (!navbar.contains(event.target) && event.target !== toggleButton) {
    // If not, hide the navbar
    toggleButton.classList.remove('active');
    navbar.classList.remove('active');
  }
});


// Add event listener for scroll event
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
<<<<<<< HEAD


// script.js
=======
>>>>>>> c6fc57fe4b181d685b304805b8e50cee75209363

document.getElementById("downloadButton").addEventListener("click", function() {
  var downloadLink = document.createElement("a");
  downloadLink.href = "assets/resume/Naman_Kamble.pdf";
  downloadLink.download = "Naman_Kamble.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});
<<<<<<< HEAD



=======
>>>>>>> c6fc57fe4b181d685b304805b8e50cee75209363
