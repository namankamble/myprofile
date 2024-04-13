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
toggleButton.addEventListener('click', function() {
  this.classList.toggle('active');
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  const navbar = document.querySelector('.navbar');
  const toggleButton = document.getElementById('toggleButton');

  if (!navbar.contains(event.target) && event.target !== toggleButton) {
    toggleButton.classList.remove('active');
    navbar.classList.remove('active');
  }
});


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

document.getElementById("downloadButton").addEventListener("click", function() {
  // Create a dynamic link element
  var downloadLink = document.createElement("a");

  // Set the href attribute to the path of your resume file
  downloadLink.href = "assets/resume/Naman_Kamble.pdf";

  // Set the download attribute to specify the filename for the downloaded file
  downloadLink.download = "Naman_Kamble.pdf";

  // Append the link to the document body
  document.body.appendChild(downloadLink);

  // Trigger a click event on the link
  downloadLink.click();

  // Remove the link from the document body
  document.body.removeChild(downloadLink);
});
=======
>>>>>>> e348322dc8a2793315d06b6d0bfe8cf37df2d13a
