      let prevScrollPos = window.pageYOffset;
      const navbar = document.querySelector('.navbar');
      function toggleNavbar() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) { 
          navbar.classList.remove('hidden');
        } else {
          navbar.classList.add('hidden');
        }
        // updates   the position of the bar
        prevScrollPos = currentScrollPos;
      }
      // yipee
      window.addEventListener('scroll', toggleNavbar);
 //scroll up = show nav  but scroll down = bye bye navbar :D
