const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bigPic = $(".big img");

const smallPics = $$(".small-items");
const smallPicActive = $(".small-items.active");

const listImgs = $$(".small img");

const firstIcon = $(".big-icons ion-icon:first-child");
const secondIcon = $(".big-icons ion-icon:last-child");

var currentIndex = 0;

function updateImgByIndex(index) {
  currentIndex = index;

  bigPic.src = listImgs[index].src;

  for (let pic of smallPics) {
    pic.classList.remove("active");
  }

  listImgs[index].parentElement.parentElement.classList.add("active");
}

smallPics.forEach((val, idx) => {
  val.addEventListener("click", (e) => {
    updateImgByIndex(idx);
  });
});

firstIcon.addEventListener("click", function (e) {
  if (currentIndex === 0) {
    currentIndex = smallPics.length - 1;
  } else {
    currentIndex--;
  }

  updateImgByIndex(currentIndex);
});

secondIcon.addEventListener("click", function (e) {
  if (currentIndex === smallPics.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  updateImgByIndex(currentIndex);
});
