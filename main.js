var likes = document.getElementsByClassName("like");
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.style.color == "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}

/* page2*/
var deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
  let del = deletes[i];
  del.addEventListener("click", function () {
    del.parentElement.remove();
    somme();
  });
}

function resetAfter() {
  alert("cldard");
}

var modal = document.querySelector(".modal-bg");
var eyes = document.querySelectorAll(".fa-eye");
var contentImg = document.querySelector("#content-img");
const images = [
  "/images/SHOP2.jpg",
  "/images/shop1.jpg",
  "/images/shop3.jpeg",
  "/images/shop4.jpg",
  "/images/SHOP5.jpg",
  "/images/SHOP4.jpeg",
];
console.log(eyes);

for (let i = 0; i < eyes.length; i++) {
  eyes[i].addEventListener("click", function () {
    modal.classList.add("show");

    contentImg.src = images[i];
  });
}
for (let i = 0; i < eyes.length; i++) {
  eyes[i].addEventListener("click", function () {
    remove.classList.remove("show");
  });
}
