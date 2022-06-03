//dom selectors
const slider = document.getElementById("slideMe");
const content = document.getElementById("content");

content.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
  }