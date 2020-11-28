const items = document.querySelectorAll(".empty-tariff");

items.forEach((item) => {
  if (window.matchMedia("(max-width: 990px)").matches) {
    item.parentNode.removeChild(item);
  }
});
