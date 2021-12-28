var links = document.querySelector(".destination-links");
var link = document.querySelectorAll(".destination-link");
var notActive = document.querySelectorAll("div.content-body:not(.content-active)").forEach(item => {
  item.style.opacity = 0;
});
var content = document.querySelectorAll(".content-body");
var spaceElement = document.querySelector(".space-element");

function contentSelect(e) {
  if(e.target.matches("div.destination-link") && !e.target.classList.contains("active")){

    if(e.target.matches("div.mars")) { //check if mars link has been clicked
      spaceElement.src = "../assets/destination/image-mars.webp";
      link.forEach(x => { // add "active" class
        if(x.classList.contains("mars")){
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
      });

      content.forEach(x => { // show content
        if(x.classList.contains("content-mars")){
          x.classList.add("content-active");
          x.style.opacity = 1;
        }else {
          x.classList.remove("content-active");
          x.style.opacity = 0;
        }
      });

    } else if(e.target.matches("div.europa")) { // check if europa link has been clicked
      spaceElement.src = "../assets/destination/image-europa.webp";

      link.forEach(x => {
        if(x.classList.contains("europa")){
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
      });

      content.forEach(x => {
        if(x.classList.contains("content-europa")){
          // x.classList.remove("content-active");
          x.classList.add("content-active");
          x.style.opacity = 1;
        }else {
          x.classList.remove("content-active");
          x.style.opacity = 0;
        }
      });

    } else if(e.target.matches("div.titan")) { //  check if the titan link has been clicked
      spaceElement.src = "../assets/destination/image-titan.webp";

      link.forEach(x => {
        if(x.classList.contains("titan")){
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
      });

      content.forEach(x => {
        if(x.classList.contains("content-titan")){
          // x.classList.remove("content-active");
          x.classList.add("content-active");
          x.style.opacity = 1;
        }else {
          x.classList.remove("content-active");
          x.style.opacity = 0;
        }
      });

    } else { //  check if the moon link has been clicked
      spaceElement.src = "../assets/destination/image-moon.webp";

      link.forEach(x => {
        if(x.classList.contains("moon")){
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
      });

      content.forEach(x => {
        if(x.classList.contains("content-moon")){
          // x.classList.remove("content-active");
          x.classList.add("content-active");
          x.style.opacity = 1;
        }else {
          x.classList.remove("content-active");
          x.style.opacity = 0;
        }
      });

    }

  }
}

links.addEventListener("click", contentSelect);
