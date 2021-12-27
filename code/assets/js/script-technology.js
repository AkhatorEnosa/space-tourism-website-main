var links = document.querySelector(".tech-links");
var link = document.querySelectorAll(".tech-link");
var notActive = document.querySelectorAll("div.content-body:not(.content-active)").forEach(item => {
  item.style.opacity = 0;
});
var content = document.querySelectorAll(".content-body");
var machine = document.querySelector(".machine");


function contentSelect(e) {
  if(e.target.matches("div.tech-link") && !e.target.classList.contains("active")){
    
    if(e.target.matches("div.two")) { //check if second dot has been clicked
      machine.src = "../code/assets/technology/image-spaceport-portrait.jpg";
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
      machine.src = "../code/assets/technology/image-space-capsule-portrait.jpg";
      
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
      machine.src = "../code/assets/technology/image-launch-vehicle-portrait.jpg";
      
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

links.addEventListener("click", contentSelect);
