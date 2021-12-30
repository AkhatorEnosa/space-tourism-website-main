var links = document.querySelector(".tech-links");
var link = document.querySelectorAll(".tech-link");
var notActive = document.querySelectorAll("div.content-body:not(.content-active)").forEach(item => {
  item.style.opacity = 0;
});
var content = document.querySelectorAll(".content-body");
var machine = document.querySelector(".machine");

var clientWidth = document.body.clientWidth


function contentSelect(e) {
  if(e.target.matches("div.tech-link") && !e.target.classList.contains("active")){
    
    if(e.target.matches("div.two")) { //check if second dot has been clicked
      machine.src = "../assets/technology/image-spaceport-portrait.jpg";

      if(clientWidth <= 768){
        machine.src = "../assets/technology/image-spaceport-landscape.jpg";
      }

      link.forEach(x => { // add "active" class
        if(x.classList.contains("two")){
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
      });
      
      content.forEach(x => { // show content
        if(x.classList.contains("content-two")){
          x.classList.add("content-active");
          x.style.opacity = 1;
        }else {
          x.classList.remove("content-active");
          x.style.opacity = 0;
        }
      });
      
    } else if(e.target.matches("div.three")) { // check if europa link has been clicked
      machine.src = "../assets/technology/image-space-capsule-portrait.jpg";

      if(clientWidth <= 768){
        machine.src = "../assets/technology/image-space-capsule-landscape.jpg";
      }
      
      link.forEach(x => {
        if(x.classList.contains("three")){
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
      });
      
      content.forEach(x => {
        if(x.classList.contains("content-three")){
          // x.classList.remove("content-active");
          x.classList.add("content-active");
          x.style.opacity = 1;
        }else {
          x.classList.remove("content-active");
          x.style.opacity = 0;
        }
      });
      
    } else { //  check if the moon link has been clicked
      machine.src = "../assets/technology/image-launch-vehicle-portrait.jpg";

      if(clientWidth <= 768){
        machine.src = "../assets/technology/space-launch-vehicle-landscape.jpg";
      }
      
      link.forEach(x => {
        if(x.classList.contains("one")){
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
      });
      
      content.forEach(x => {
        if(x.classList.contains("content-one")){
          // x.classList.remove("content-active");
          x.classList.add("content-active");
          x.classList.add("doug");
          x.style.opacity = 1;
        }else {
          x.classList.remove("content-active");
          x.style.opacity = 0;
        }
      });
      
    }
    
  }
}

  // change page picture Orientation based on width
  function getWidth() {
    if(clientWidth <= 768){
      if(document.querySelector("content-two")) { 
        machine.src = "../assets/technology/image-spaceport-landscape.jpg";
      } else if(document.querySelector("content-three")) { 
        machine.src = "../assets/technology/image-space-capsule-landscape.jpg";
      } else {
        machine.src = "../assets/technology/image-launch-vehicle-landscape.jpg";
      }
    } else {
      if(document.querySelector("content-two")) {
        machine.src = "../assets/technology/image-spaceport-portrait.jpg";
      } else if(document.querySelector("content-three")) { 
        machine.src = "../assets/technology/image-space-capsule-portrait.jpg";
      } else { 
        machine.src = "../assets/technology/image-launch-vehicle-portrait.jpg";
      }
    }
  }

links.addEventListener("click", contentSelect);
window.onresize = getWidth;
