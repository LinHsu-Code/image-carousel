import "./style.scss";
let sliderIndex = -1;

const showSlider = (index) => {
  var images = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");
  // reset
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (index) {
    sliderIndex = index;
  } else {
    sliderIndex++;
  }

  if (sliderIndex > images.length - 1) sliderIndex = 0;
  if (sliderIndex < 0) sliderIndex = images.length - 1;

  images[sliderIndex].style.display = "block";
  dots[sliderIndex].classList.add("active");
};
setInterval(showSlider, 5000);

(function addListenertoDots() {
  const sliderDots = document.querySelectorAll(".dot");
  sliderDots.forEach((sliderDot) =>
    sliderDot.addEventListener("click", () => {
      showSlider(sliderDot.dataset.sliderId);
    })
  );
})();

(function addListenertoArrows() {
  const prevArrow = document.querySelector("#prev");
  const nextArrow = document.querySelector("#next");
  prevArrow.addEventListener("click", () => {
    showSlider(sliderIndex - 1);
  });
  nextArrow.addEventListener("click", () => {
    showSlider(sliderIndex + 1);
  });
})();
