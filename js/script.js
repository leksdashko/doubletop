gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const smoother = ScrollSmoother.create({
	wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1.5,
  effects: true,
  ignoreMobileResize: true,
  smoothTouch: 0.1,
});

//ScrollTrigger.normalizeScroll(true);

const topNavigation = document.getElementById('top-navigation');
const isMobile = window.outerWidth < 778;

window.addEventListener('scroll', () => {
	
	if(this.scrollY > 100){
		topNavigation.classList.add('filled');
	}else{
		topNavigation.classList.remove('filled');
	}
});

gsap.from("#about-i1", {
	scrollTrigger : {
		trigger: ".section-about",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	x: 100,
	duration: 3
});

gsap.from("#about-i2", {
	scrollTrigger : {
		trigger: "#about-i1",
		start: "top+=100 bottom",
		toggleActions: "restart pause resume none",
	},
	x: 100,
	duration: 3
});

gsap.from("#about-i3", {
	scrollTrigger : {
		trigger: "#about-i2",
		start: "top+=100 bottom",
		toggleActions: "restart pause resume none",
	},
	x: 100,
	duration: 3
});

gsap.from("#about-i4", {
	scrollTrigger : {
		trigger: "#about-i3",
		start: "top+=100 bottom",
		toggleActions: "restart pause resume none",
	},
	x: 100,
	duration: 3
});

gsap.from("#about-i5", {
	scrollTrigger : {
		trigger: "#about-i4",
		start: "top+=100 bottom",
		toggleActions: "restart pause resume none",
	},
	x: 100,
	duration: 3
});

gsap.from("#about-i6", {
	scrollTrigger : {
		trigger: "#about-i5",
		start: "top+=100 bottom",
		toggleActions: "restart pause resume none",
	},
	x: 100,
	duration: 3
});

gsap.from("#forwhom-i1", {
	scrollTrigger : {
		trigger: "#forwhom",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	x: -300,
	duration: 3
});

gsap.from("#forwhom-i2", {
	scrollTrigger : {
		trigger: "#forwhom",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	x: 300,
	duration: 3
});

gsap.from("#forwhom-i3", {
	scrollTrigger : {
		trigger: "#forwhom-i2",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	y: 200,
	duration: 2
});

gsap.from("#course-i1", {
	scrollTrigger : {
		trigger: "#course",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	x: -300,
	duration: 2
});

gsap.from("#course-i2", {
	scrollTrigger : {
		trigger: "#course-i1",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	x: 300,
	duration: 2
});

gsap.from("#course-i3", {
	scrollTrigger : {
		trigger: "#course-i1",
		start: "top center",
		toggleActions: "restart pause resume none",
	},
	y: 200,
	duration: 2
});

gsap.from(".item-wrapper-1", {
	scrollTrigger : {
		trigger: ".section-algorithm",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	x: 200,
	duration: 3
});

gsap.from(".image-wrapper-2", {
	scrollTrigger : {
		trigger: ".item-wrapper-1",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	x: 200,
	duration: 3
});

gsap.from(".image-wrapper-3", {
	scrollTrigger : {
		trigger: ".item-wrapper-1",
		start: "top bottom",
		toggleActions: "restart pause resume none",
	},
	x: 300,
	duration: 3
});

document.querySelectorAll('.mobile-menu .nav-item a').forEach(function(item){
	item.addEventListener('click', function(){
		document.getElementById('close-mobile-menu').click();
	});
});

document.querySelectorAll('a[href*="#"]').forEach(function(link){
	var href = link.getAttribute('href');
	var elId = href.split('#')[1];
	if(elId.length > 0) {
		var block = document.getElementById(elId);
		if(block) {
			link.addEventListener('click', function(e){
				e.preventDefault();

				// if(isMobile){
				// 	var y = block.getBoundingClientRect().top + window.pageYOffset - 80;

				// 	window.scrollTo({top: y, behavior: 'smooth'});
				// }else{
				// 	smoother.scrollTo(href, true);
				// }

				smoother.scrollTo(href, true);
			});
		}
	}
});

