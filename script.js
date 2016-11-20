function togglePic() {
	var innerSlider = document.getElementById('beatles'),
		sliderStyle = window.getComputedStyle(innerSlider),
		leftMargin = sliderStyle.getPropertyValue("margin-left");
	if (leftMargin === "0px") {
		innerSlider.style.marginLeft = "-300px";
	} else if (leftMargin === "-300px") {
		innerSlider.style.marginLeft = "-600px"
	} else if (leftMargin === "-600px") {
		innerSlider.style.marginLeft = "-900px"
	} else if (leftMargin === "-900px") {
		innerSlider.style.marginLeft = "0px"
	}
};
document.getElementById('beatles').addEventListener("click", togglePic);

console.log('this workded! :)');