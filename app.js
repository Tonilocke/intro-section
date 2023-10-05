// takes the third child of each .drop class when click
// toggling the dropdown menu

const features = document.querySelectorAll(".drop");
features.forEach((f) => {
  f.addEventListener("click",()=>{
    const x = f.childNodes[3];
    x.classList.toggle("hidden");
    const arrow = x.parentElement.childNodes[1].firstElementChild.childNodes[1];
    // console.log(arrow.src.indexOf("images/"));
    if(arrow.src.slice(arrow.src.indexOf("images/")) == "images/icon-arrow-up.svg"){
      arrow.src = "images/icon-arrow-down.svg";
    }
    else{
        arrow.src = "images/icon-arrow-up.svg";
    }
  });
});

const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");
menu.addEventListener("click",()=>{
  nav.classList.toggle("hidden");
  hamburger_img = menu.childNodes[1];
  // console.log(hamburger_img.src);
  if(hamburger_img.src.slice(hamburger_img.src.indexOf("images/")) == "images/icon-menu.svg"){
    hamburger_img.src = "images/icon-close-menu.svg";
  }
  else{
    hamburger_img.src = "images/icon-menu.svg";
  }
});

const img = document.querySelector(".image img");

window.addEventListener("load",()=>{
  if(window.innerWidth <= 1000){
      img.src = "images/image-hero-mobile.png";
      nav.classList.add("hidden");
  }
  else{
    img.src = "images/image-hero-desktop.png";
  }
});
window.addEventListener("resize",()=>{
  if(window.innerWidth <= 1000){
      img.src = "images/image-hero-mobile.png";
  }
  else{
    img.src = "images/image-hero-desktop.png";
  }
});
