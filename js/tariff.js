const items = document.querySelectorAll(".empty-tariff");

items.forEach((item) => {
  if (window.matchMedia("(max-width: 1290px)").matches) {
    item.parentNode.removeChild(item);
  }
});
