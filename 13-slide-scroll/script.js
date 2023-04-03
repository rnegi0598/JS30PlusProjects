function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide() {

    sliderImages.forEach((sliderImage,ind) => {
      const imageIn=sliderImage.getBoundingClientRect().top-window.innerHeight+1.5*sliderImage.getBoundingClientRect().height;
      const imageOut=sliderImage.getBoundingClientRect().bottom;
      if(imageIn<100 && imageIn>-100){  
        sliderImage.classList.add('active');
      }
      if(imageOut<100 && imageOut>-100){
        sliderImage.classList.remove('active');

      }

    });
    

  }

  window.addEventListener('scroll', debounce(checkSlide,10));