const header = document.querySelector('header');
const sectionOne = document.querySelector('.background');

const sectionOneOptions = {
	rootMargin: '-150px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
	entries.forEach((entry) => {
		console.log(entry.target);
		if (!entry.isIntersecting) {
			header.classList.add('nav-scrolled');
		} else {
			header.classList.remove('nav-scrolled');
		}
	});
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
