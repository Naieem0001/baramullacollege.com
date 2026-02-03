(function(){

  const slider = document.querySelector(".campus-slider");
  if(!slider) return;

  const track = slider.querySelector(".campus-slider-track");
  const slides = slider.querySelectorAll(".campus-slide");
  const prevBtn = slider.querySelector(".campus-prev");
  const nextBtn = slider.querySelector(".campus-next");
  const dotsWrap = slider.querySelector(".campus-dots");

  let index = 0;
  let autoTimer = null;
  let startX = 0;
  let isDragging = false;

  slides.forEach((_,i)=>{
    const d = document.createElement("span");
    d.className = "campus-dot" + (i===0 ? " active":"");
    d.addEventListener("click",()=>goTo(i));
    dotsWrap.appendChild(d);
  });

  const dots = dotsWrap.querySelectorAll(".campus-dot");

  function update(){
    track.style.transform = `translateX(-${index*100}%)`;
    dots.forEach((d,i)=>d.classList.toggle("active", i===index));
  }

  function goTo(i){
    index = (i + slides.length) % slides.length;
    update();
    restartAuto();
  }

  nextBtn.addEventListener("click",()=>goTo(index+1));
  prevBtn.addEventListener("click",()=>goTo(index-1));

  function autoPlay(){
    autoTimer = setInterval(()=>goTo(index+1), 4000);
  }

  function restartAuto(){
    clearInterval(autoTimer);
    autoPlay();
  }

  slider.addEventListener("mouseenter",()=>clearInterval(autoTimer));
  slider.addEventListener("mouseleave",autoPlay);

  /* touch support */

  track.addEventListener("touchstart",e=>{
    startX = e.touches[0].clientX;
    isDragging = true;
  },{passive:true});

  track.addEventListener("touchend",e=>{
    if(!isDragging) return;
    const diff = e.changedTouches[0].clientX - startX;

    if(diff > 50) goTo(index-1);
    else if(diff < -50) goTo(index+1);

    isDragging = false;
  });

  autoPlay();

})();
