let carousel = document.getElementById('carousel');
        let scrollWidth = carousel.scrollWidth;
        let clientWidth = carousel.clientWidth;
        let scrollPosition = 0;

        function autoScroll() {
            scrollPosition += 1;
            carousel.scrollLeft = scrollPosition;

            if (scrollPosition >= scrollWidth - clientWidth) {
                scrollPosition = 0;
            }

            setTimeout(autoScroll, 10);
        }

        autoScroll();
