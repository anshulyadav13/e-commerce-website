let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


$('.owl1').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1446: {
      items: 4
    },
    1546: {
      items: 5
    }
  }
})
$('.owl2').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    },
    1446: {
      items: 4
    }
  }
})

$('.owl3').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  responsive: {
    0:{
      items:1
    },
    1120: {
      items: 1
    },
    1140:{
      items:2
    },
    1446: {
      items: 3
    }
    ,
    1780: {
      items: 4
    }
  }
})

$('.owl4').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  responsive: {
    0:{
      items:2
    },
    490: {
      items: 2
    },
     668: {
      items: 3
    },
    886: {
      items: 4
    },
    1000: {
      items: 6
    },
    1820: {
      items: 9
    }
  }
})


$('.owl5').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    774: {
      items: 2
    },
    1210: {
      items: 3
    },
    
  }
})

$('.owl6').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    582:{
      items:2
    },
    1000: {
      items: 3
    },
    1818: {
      items: 4
    } 
    
  }
})