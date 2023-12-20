// SERVICES

let butOkleika = document.querySelector(".okleika");
let butDeteiling = document.querySelector(".deteiling");
let cardsOkleika = document.querySelector(".cards_okleika");
let cardsDeteiling = document.querySelector(".cards_deteiling");

butDeteiling.addEventListener("click", (event) => {
  butDeteiling.style.backgroundColor = "rgb(219, 49, 56)";
  butOkleika.style.backgroundColor = "rgb(219, 49, 56, 0)";
  cardsOkleika.style.display = "none";
  cardsDeteiling.style.display = "flex";
});

butOkleika.addEventListener("click", (event) => {
  butDeteiling.style.backgroundColor = "rgb(219, 49, 56, 0)";
  butOkleika.style.backgroundColor = "rgb(219, 49, 56)";
  cardsDeteiling.style.display = "none";
  cardsOkleika.style.display = "flex";
});

// IMAGE VIEW

let butArrowLeft = document.querySelector(".but_left");
let butArrowRight = document.querySelector(".but_right");
let slider1 = document.querySelector(".slider_1");
let slider2 = document.querySelector(".slider_2");
let slider3 = document.querySelector(".slider_3");

sliderNow = 1;

butArrowRight.addEventListener("click", (event) => {
  if (sliderNow == 1) {
    slider1.style.display = "none";
    slider2.style.display = "flex";
    slider3.style.display = "none";
    sliderNow = 2;
  } else if (sliderNow == 2) {
    slider1.style.display = "none";
    slider2.style.display = "none";
    slider3.style.display = "flex";
    sliderNow = 3;
  } else if (sliderNow == 3) {
    slider1.style.display = "flex";
    slider2.style.display = "none";
    slider3.style.display = "none";
    sliderNow = 1;
  }
});

butArrowLeft.addEventListener("click", (event) => {
  if (sliderNow == 1) {
    slider1.style.display = "none";
    slider2.style.display = "none";
    slider3.style.display = "flex";
    sliderNow = 3;
  } else if (sliderNow == 3) {
    slider1.style.display = "none";
    slider2.style.display = "flex";
    slider3.style.display = "none";
    sliderNow = 2;
  } else if (sliderNow == 2) {
    slider1.style.display = "flex";
    slider2.style.display = "none";
    slider3.style.display = "none";
    sliderNow = 1;
  }
});

// INFORMATION

let butLeft = document.querySelector(".div1");
let butRight = document.querySelector(".div2");
let image = document.getElementById("info_img");
let p = document.getElementById("info_p");

imgNow = 1;

butRight.addEventListener("click", (event) => {
  if (imgNow == 1) {
    image.setAttribute("src", "../images/info_2.png");
    p.innerHTML =
      "2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dicta velit in ea, saepe ullam!";
    imgNow = 2;
  } else if (imgNow == 2) {
    image.setAttribute("src", "../images/info_1.png");
    p.innerHTML =
      "1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dicta velit in ea, saepe ullam!";
    imgNow = 1;
  }
});

butLeft.addEventListener("click", (event) => {
  if (imgNow == 1) {
    image.setAttribute("src", "../images/info_2.png");
    p.innerHTML =
      "2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dicta velit in ea, saepe ullam!";
    imgNow = 2;
  } else if (imgNow == 2) {
    image.setAttribute("src", "../images/info_1.png");
    p.innerHTML =
      "1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dicta velit in ea, saepe ullam!";
    imgNow = 1;
  }
});

// INFORMATION 2

let left = document.getElementById("arrow_left");
let right = document.getElementById("arrow_right");
let image2 = document.getElementById("info_img_2");
let p2 = document.getElementById("info_p_2");

imgNow = 1;

right.addEventListener("click", (event) => {
  if (imgNow == 1) {
    image2.setAttribute("src", "../images/info_1.png");
    p2.innerHTML =
      "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet illo ducimus quaerat.";
    imgNow = 2;
  } else if (imgNow == 2) {
    image2.setAttribute("src", "../images/info_2.png");
    p2.innerHTML =
      "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet illo ducimus quaerat.";
    imgNow = 1;
  }
});

left.addEventListener("click", (event) => {
  if (imgNow == 1) {
    image2.setAttribute("src", "../images/info_1.png");
    p2.innerHTML =
      "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet illo ducimus quaerat.";
    imgNow = 2;
  } else if (imgNow == 2) {
    image2.setAttribute("src", "../images/info_2.png");
    p2.innerHTML =
      "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet illo ducimus quaerat.";
    imgNow = 1;
  }
});

// FORM

let butSend = document.querySelector(".send");

butSend.addEventListener("click", (event) => {
  event.preventDefault();
});

// MENU

let menu = document.getElementById("menu");
let modalWindow = document.querySelector(".modal_window");
let body = document.querySelector("body");
let a = document.querySelectorAll(".a");

flag = true;

menu.addEventListener("click", (event) => {
  if (flag == true) {
    modalWindow.style.display = "block";
    menu.setAttribute("src", "../icons/krestik.png");
    body.style.overflow = "hidden";
    flag = false;
  } else {
    modalWindow.style.display = "none";
    menu.setAttribute("src", "../icons/menu.png");
    body.style.overflow = "auto";
    flag = true;
  }
});

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", (event) => {
    modalWindow.style.display = "none";
    menu.setAttribute("src", "../icons/menu.png");
    body.style.overflow = "auto";
    flag = true;
  });
}
