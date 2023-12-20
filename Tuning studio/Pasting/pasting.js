// FORM

let butSend = document.querySelector(".send");

butSend.addEventListener("click", (event) => {
  event.preventDefault();
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
