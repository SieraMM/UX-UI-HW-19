//button animation
const btn = document.querySelector(".btn");
$ (".btn").on("mousemove", function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
}); 

//marquee animation
function handleMarquee() {
    const marquee = document.querySelectorAll('.marquee');
    let speed = .85;
    let lastScrollPos = 0;
    let timer;
    marquee.forEach(function(el) {
      const container = el.querySelector('.tools');
      const content = el.querySelector('.tools > *');
      //Get total width
      const elWidth = content.offsetWidth;
      //Duplicate content
      let clone = content.cloneNode(true);
      container.appendChild(clone);
      let progress = 1;
      function loop() {
        progress = progress - speed;
        if(progress <= elWidth * -1) {
          progress = 0;
        }
        container.style.transform = 'translateX(' + progress + 'px)';
        container.style.transform += 'skewX(' + speed * 0.4 + 'deg)';
        window.requestAnimationFrame(loop);
      }
      loop();
    });
  /* window.addEventListener('scroll', function() {
      const maxScrollValue = 12;
      const newScrollPos = window.scrollY;
      let scrollValue = newScrollPos - lastScrollPos;
      if(scrollValue > maxScrollValue) scrollValue = maxScrollValue;
      else if(scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
      speed = scrollValue;
      clearTimeout(timer);
      timer = setTimeout(handleSpeedClear, 10);
    }); 
    function handleSpeedClear() {
      speed = 10;
    }*/
  };
  handleMarquee();
