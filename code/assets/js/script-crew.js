var links = document.querySelector(".crew-links");
var link = document.querySelectorAll(".crew-link");
var notActive = document.querySelectorAll("div.content-body:not(.content-active)").forEach(item => {
  item.style.opacity = 0;
});
var content = document.querySelectorAll(".content-body");
var member = document.querySelector(".member");

function contentSelect(e) {
  if(e.target.classList.contains("crew-links")){

    console(links);

  } else {
    alert("opakara");
  }
}

links.addEventListener("click", contentSelect);
