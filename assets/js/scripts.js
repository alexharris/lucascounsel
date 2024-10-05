

jQuery(function() {
  $('.slides').slick({
    arrows: true,
    autoplay: true,
    prevArrow: $('.slider-left'),
    nextArrow: $('.slider-right'),
    dots: true,
    autoplaySpeed: 5000,
    customPaging : function(slider, i) {
      return '<span class="dot"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg></span>';
  },    
  });
});

// document.addEventListener('DOMContentLoaded', function() {

//   const testimonials = document.querySelectorAll('.slide');
//   let currentIndex = 0;

//   function showNextTestimonial() {
//     testimonials[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex + 1) % testimonials.length;
//     testimonials[currentIndex].classList.add('active');
//   }

//   // Initialize the first testimonial
//   testimonials[currentIndex].classList.add('active');

//   // Set interval to rotate testimonials
//   setInterval(showNextTestimonial, 6000); // Change every 3 seconds
// });