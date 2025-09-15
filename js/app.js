$('.hero-carousel').owlCarousel({
    loop:true,
    margin:32,
    nav:true,
    navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.featured-carousel').owlCarousel({
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
$('.partner-carousel').owlCarousel({
    loop:true,
    margin:32,
    nav:false,
    navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});

  
        document.addEventListener('DOMContentLoaded', function() {
          var whiteThemeButton = document.getElementById('whiteThemeButton');
          var darkThemeButton = document.getElementById('darkThemeButton');
          var body = document.body;
    
          // Check for previously set theme
          var savedTheme = localStorage.getItem('theme');
          if (savedTheme) {
            body.classList.add(savedTheme);
          } else {
            // Default theme (dark or white)
            var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: white)').matches;
            body.classList.add(prefersDarkMode ? 'dark' : 'white');
            localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'white');
          }
    
          whiteThemeButton.addEventListener('click', function() {
            body.classList.remove('dark');
            body.classList.add('white');
            localStorage.setItem('theme', 'white');
          });
    
          darkThemeButton.addEventListener('click', function() {
            body.classList.remove('white');
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          });
        }); 

        document.addEventListener('DOMContentLoaded', function() {
        var changeFontSizeButtons = document.getElementsByClassName('changeFontSizeButton');
        var targetSections = document.getElementsByClassName('targetSection');

        // Retrieve font size from local storage
        var savedFontSize = localStorage.getItem('fontSize');
            if (savedFontSize) {
                document.body.style.fontSize = savedFontSize + '%';
                for (var i = 0; i < targetSections.length; i++) {
                var targetSection = targetSections[i];
                targetSection.style.fontSize = savedFontSize + '%';
                }
            }

            for (var i = 0; i < changeFontSizeButtons.length; i++) {
                var changeFontSizeButton = changeFontSizeButtons[i];
                changeFontSizeButton.addEventListener('click', function() {
                var newFontSize = this.dataset.fontsize;
                document.body.style.fontSize = newFontSize + '%';
                for (var i = 0; i < targetSections.length; i++) {
                    var targetSection = targetSections[i];
                    targetSection.style.fontSize = newFontSize + '%';
                }
                // Store the active font size in local storage
                localStorage.setItem('fontSize', newFontSize);
                });
            }
        });
 