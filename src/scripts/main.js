"use strict"

// NAVIGATION
document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth

    this.querySelectorAll('.handleknapp').forEach(function(knapp) {
      knapp.addEventListener('click', function(e){
        e.preventDefault();
       const counter = document.getElementById('cart-counter')
       if (!counter.innerHTML) {
        counter.innerHTML = 1;
       } else {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
       }
      })
    })

  // Initialize slider
  const slider = document.getElementById('price-slider');
  
  if (slider){
  const lowerValueInput = document.getElementById('lower-value')
  const upperValueInput = document.getElementById('upper-value')
noUiSlider.create(slider, {
   start: [0,10000],
   connect: true,
   step: 100,
   range: {
       'min': 0,
       'max': 100000
   }
});

slider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        upperValueInput.value = parseInt(values[handle]);
    } else {
        lowerValueInput.value = parseInt(values[handle]);
    }
});
  }

}); 


// DOMContentLoaded  end