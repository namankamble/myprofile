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
