const listItems = document.querySelectorAll(".menu li");

document.addEventListener("mousemove", (e) => {
  const { target } = e;
  const listItem = target.closest(".menu li");
  if (!listItem) {
    document
      .querySelectorAll(".menu .hidden-img.translateY-0")
      .forEach((item) => item.classList.remove("translateY-0"));
    return;
  }
  const list = listItem.closest("ul");
  const index = [...list.children].indexOf(listItem);
  document
    .querySelectorAll(".menu .hidden-img")
    [index]?.classList.add("translateY-0");
});
