/* Fixed Header when scroll*/
window.onscroll = function(){
	const webScrollTop_tag = document.documentElement.scrollTop;
	let index = section_section.length;
	if (window.innerWidth > 768 ) {
		if (webScrollTop_tag > 100) {
			document.querySelector("header").classList.add("fixed");
		} else {
			document.querySelector("header").classList.remove("fixed");
		}
	}

	/*Need to understand*/ /*Add active class on scroll between pages*/
	while(index-- && window.scrollY + 50 < section_section[index].offsetTop) {}
	navLinks_a.forEach((navLinks_a) => navLinks_a.classList.remove('active'));
	navLinks_a[index].classList.add('active');
}
/* End Fixed Header when scroll*/

/* Nav button click */
const navButton = document.getElementById("nav-toggle-btn");
const navMenu = document.querySelector(".nav-menu");

navButton.addEventListener("click", function(event) {
	navMenu.classList.toggle("toggle");
})
/* End Nav button click */

/* Add or Remove class active for navigation bar on click */
const navMenu_div = document.querySelector(".nav-menu");
const navLinks_a = navMenu_div.querySelectorAll("a");
const section_section = document.querySelectorAll("section");

navLinks_a.forEach(function(element) {
	element.addEventListener("click", function(event) {
		for (let i=0; i < navLinks_a.length; i++) {
			navLinks_a[i].classList.remove("active");
		}
		event.target.classList.add("active");
		navMenu.classList.toggle("toggle");;
	})
})
/* End Add or Remove class active for navigation bar on click */