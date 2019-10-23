  $(window).on('scroll', function() {

      $('.flip').each(function() {

        var scrollTop = $(window).scrollTop(),
          parentElementOffsetTop = $(this).parent().offset().top,
          parentDistanceTop = (parentElementOffsetTop - scrollTop);
        var elementHeight = $(this).height();
        var distanceBottom = (parentDistanceTop + elementHeight);
        var opacity = (distanceBottom / elementHeight);
        var rotateSpeed = ((parentDistanceTop / 8).toFixed(2) * -1);

        if (rotateSpeed <= 0) {
          rotateSpeed = 0;
        } else if (rotateSpeed >= 90) {
          rotateSpeed = 90;
        }
        $(this).find(".pixel-counter").html(distanceBottom + "px is the parents bottom-               distance to top of viewport");
        $(this).css({
          "transform": " translateY(0px)  rotateX(" + rotateSpeed + "deg)",
          "opacity": opacity
        });
      });
    });







    particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#253746"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4.5,"random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
  










    $('html').on('mousemove',function(e){
      $('.parallax-text-1').offset({
        left : '-'+e.pageX/100,
        top : 100+e.pageY/100
      })
        $('.parallax-text-2').offset({
        left : +e.pageX/80,
        top : 240+e.pageY/60
      })
      })

      var makeItRain = function() {
        //clear out everything
        $('.rain').empty();
      
        var increment = 0;
        var drops = "";
        var backDrops = "";
      
        while (increment < 100) {
          //couple random numbers to use for various randomizations
          //random number between 98 and 1
          var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
          //random number between 5 and 2
          var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
          //increment
          increment += randoFiver;
          //add in a new raindrop with various randomizations to certain CSS properties
          drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
          backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        }
      
        $('.rain.front-row').append(drops);
        $('.rain.back-row').append(backDrops);
      }
      
      $('.splat-toggle.toggle').on('click', function() {
        $('body').toggleClass('splat-toggle');
        $('.splat-toggle.toggle').toggleClass('active');
        makeItRain();
      });
      
      $('.back-row-toggle.toggle').on('click', function() {
        $('body').toggleClass('back-row-toggle');
        $('.back-row-toggle.toggle').toggleClass('active');
        makeItRain();
      });
      
      $('.single-toggle.toggle').on('click', function() {
        $('body').toggleClass('single-toggle');
        $('.single-toggle.toggle').toggleClass('active');
        makeItRain();
      });
      
      makeItRain();