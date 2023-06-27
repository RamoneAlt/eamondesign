var lastScrollTop = 0;

      window.addEventListener("scroll", function() {
        var textElements = document.querySelectorAll(".text-top-right, .text-bottom-left");
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          textElements.forEach(function(element) {
            if (isElementInViewport(element) && !element.classList.contains("slide-in")) {
              element.classList.add("slide-in");
            }
          });

        }

        lastScrollTop = scrollTop;

      });

      function isElementInViewport(element) {

        var rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

      }
