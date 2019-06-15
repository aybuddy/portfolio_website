Barba.Pjax.start();

document.addEventListener('DOMContentLoaded', () => {
	// wraper animation
	anime
		.timeline({
			targets: '#welcome',
			easing: 'easeOutExpo'
		})
		.add({
			width: [ '0vw', '100vw' ],
			opacity: 1,
			duration: 2400
		});

	// Heading animation
	anime({
		targets: '.heading',
		delay: 400,
		opacity: 1,
		duration: 1800,
		translateY: [ '-30px', '0px' ],
		easing: 'easeOutExpo'
	});
	// sub-Heading animation
	anime({
		targets: '.sub-heading',
		delay: 500,
		opacity: 1,
		duration: 1800,
		translateY: [ '-30px', '0px' ],
		easing: 'easeOutExpo'
	});
	// navigation animation
	anime({
		targets: '#header',
		delay: 700,
		opacity: 1,
		duration: 1800,
		translateY: [ '-100px', '0px' ],
		easing: 'easeOutExpo'
	});
	// footer animation
	anime({
		targets: '#social',
		delay: 800,
		opacity: 1,
		duration: 1800,
		translateY: [ '150px', '0px' ],
		easing: 'easeOutExpo'
	});
});

var FadeTransition = Barba.BaseTransition.extend({
	start: function() {
		/**
		 * This function is automatically called as soon the Transition starts
		 * this.newContainerLoading is a Promise for the loading of the new container
		 * (Barba.js also comes with an handy Promise polyfill!)
		 */

		// As soon the loading is finished and the old page is faded out, let's fade the new page
		Promise.all([ this.newContainerLoading, this.fadeOut() ]).then(this.fadeIn.bind(this));
	},

	fadeOut: function() {
		this.oldContainer; // HOME
	},

	fadeIn: function() {
		this.newContainer.classList.add('slide-in'); // PROJECTS

		var that = this;
		this.newContainer.addEventListener('animationend', function() {
			that.newContainer.classList.remove('slide-in');
		});
	}
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
	/**
	 * Here you can use your own logic!
	 * For example you can use different Transition based on the current page or link...
	 */

	return FadeTransition;
};

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navbar-links');
	const navLinks = document.querySelectorAll('.navbar-links li');

	burger.addEventListener('click', () => {
		// toggle nav
		nav.classList.toggle('nav-active');
		// animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		// burger animation
		burger.classList.toggle('toggle');
	});
};

navSlide();
