var listfillter = document.querySelectorAll(".fillter > li");
const allimages = document.querySelectorAll('.portfolio .item');


//!================================add calss active in this click nav================================ 

document.querySelector(".navbar-nav").addEventListener("click" ,addactiveclass)

function addactiveclass(e) {
    if (document.querySelector('.navbar-nav li a.active') !== null) {
      document.querySelector('.navbar-nav li a.active').classList.remove('active');
    }
    e.target.className = "nav-link active";
    const terget=e.target.dataset.target;
    scrollToDiv(terget);
  }
//!================================scoll to div click ================================ 

  function scrollToDiv(elem){
    var elemgo = document.querySelector(`#${elem}`);
    window.scroll({
          top: elemgo.offsetTop, 
          left: 0, 
          behavior: 'smooth' 
    });
    }

//!================================add calss active in this click ================================ 
function toggleActiveClass(active) {
    listfillter.forEach(item => {
        item.classList.remove('active');
    })
    active.classList.add('active');
}

//!================================disspaly all img or fillter ================================ 
function toggleimages(dataClass) {
    if (dataClass === 'all') {
        for (let i = 0; i < allimages.length; i++) {
            allimages[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < allimages.length; i++)
            allimages[i].dataset.class === dataClass ? allimages[i].style.display = 'block' : allimages[i].style.display = 'none';
    }
}
//!================================lop all img or fillter ================================ 
for (let i = 0; i < listfillter.length; i++) {
    listfillter[i].addEventListener('click', function () {
        toggleActiveClass(listfillter[i]);
        toggleimages(listfillter[i].dataset.class);
    });
}

//!================================create lightbox ================================ 

const galleryItem = document.getElementsByClassName("imges");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;
//!================================show lightbox ================================ 
function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index - 1].children[1].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

//!================================currten lightbox ================================ 
function currentImage() {
    lightBoxContainer.style.display = "block";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

//!================================close lightbox ================================ 

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);


