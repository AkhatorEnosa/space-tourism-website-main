var links = document.querySelector(".crew-links");
var link = document.querySelectorAll(".crew-link");
var notActive = document.querySelectorAll("div.content-body:not(.content-active)").forEach(item => {
  item.style.opacity = 0;
});
var content = document.querySelectorAll(".content-body");
var member = document.querySelector(".member");
var contentLeft = document.querySelector(".content-left");
var contentRight = document.querySelector(".content-right");


// increase height if douglas

   contentRight.style.height = "80vh";
   member.style.height = "82vh";


function contentSelect(e) {
  if(e.target.matches("div.crew-link") && !e.target.classList.contains("active")){
    
    if(e.target.matches("div.two")) { //check if second dot has been clicked
      member.src = "../code/assets/crew/image-mark-shuttleworth.webp";
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
          x.classList.remove("doug");
          x.style.opacity = 0;
        }
      });
      
    } else if(e.target.matches("div.three")) { // check if europa link has been clicked
      member.src = "../code/assets/crew/image-victor-glover.webp";
      
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
      
    } else if(e.target.matches("div.four")) { //  check if the titan link has been clicked
      member.src = "../code/assets/crew/image-anousheh-ansari.webp";
      
      link.forEach(x => {
        if(x.classList.contains("four")){
          x.classList.add("active");
        }else {
          x.classList.remove("active");
        }
      });
      
      content.forEach(x => {
        if(x.classList.contains("content-four")){
          // x.classList.remove("content-active");
          x.classList.add("content-active");
          x.style.opacity = 1;
        }else {
          x.classList.remove("content-active");
          x.style.opacity = 0;
        }
      });
      
    } else { //  check if the moon link has been clicked
      member.src = "../code/assets/crew/image-douglas-hurley.webp";
      
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

      // increase height if douglas
      if(document.querySelector(".content-active").classList.contains("doug")) {
         contentRight.style.height = "80vh";
         member.style.height = "80vh";
         console.log(true);
        } else {
          member.style.height = "70vh";
          contentLeft.style.width = "50vw";
        //  alert("zeh");
        console.log(false);
      }
    
  }
}

links.addEventListener("click", contentSelect);
