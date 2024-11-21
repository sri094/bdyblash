function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
// This script automatically scrolls the images in the carousel
// It ensures that after the last image, it loops back to the first one

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

// Clone the images and append them to create a seamless loop
images.forEach(img => {
    const clone = img.cloneNode(true);
    carousel.appendChild(clone);
});