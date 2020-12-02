const spekerBtn = document.querySelector(".speakers-switch");
const spekerBtnItem = document.querySelectorAll(".speakers-switch__btn");
const speakersList = document.querySelectorAll(".speakers-list");
const speakersImg = document.querySelectorAll(".speakers-img");
const speakersSwitch = document.querySelectorAll(".speakers-switch");

spekerBtn.addEventListener("click", openInfo);

function openInfo(e) {
  spekerBtnItem.forEach((item) => {
    item.classList.remove("active");
  });

  speakersList.forEach((item) => {
    const list = item.dataset.list;
    const btn = e.target.dataset.speaker;
    if (list === btn) {
      item.classList.add("active");
      e.target.classList.add("active");
      return;
    }
    item.classList.remove("active");
  });

  speakersImg.forEach((item) => {
    const img = item.dataset.img;
    const btn = e.target.dataset.speaker;

    if (img === btn) {
      item.classList.add("active");
      return;
    }
    item.classList.remove("active");
  });
}
