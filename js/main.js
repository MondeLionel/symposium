

const notifEl = document.querySelector(".notification");

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
		delay:1000
	})
	console.log("animations done")
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
})