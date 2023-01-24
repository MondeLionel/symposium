

const notifEl = document.querySelector(".notification");
const videoEl = document.querySelector("video");
const body = document.querySelector("body")

const swiper = new Swiper('#hero-swiper', {
	slidesPerView: 3,
	spaceBetween: 20,
	centeredSlides:true
})

const scroll = new LocomotiveScroll();

const notif_animation  = function(){
	anime({
		targets: notifEl,
		translateY:['-100%','0%'],
		opacity:[0,1],
		delay:1000,
		complete: function(anim) {
		  videoEl.play();
		  console.log(anim)
		}
	})
	console.log("animations done")
	// videoEl.play();
}


scroll.on('call', notif_animation);
// scroll position
// play video
// show notif div animtion

notifEl.addEventListener("click", function(e){
	console.log(e)

	anime({
		targets:this,
		translateY:['-150%'],
		opacity:0,
		duration:300
	})

	videoEl.pause()
})

window.addEventListener("scroll", (event) => {
    let scroll_position = this.scrollY;
  if(scroll_position > 300){
  	body.classList.add("menu--fixed")
  }else{
  	body.classList.remove("menu--fixed")
  }
});