const categories = document.querySelectorAll(".category");
const menuItems = document.querySelectorAll(".menu-item");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const categoryName = category.textContent;
    menuItems.forEach((item) => {
      const itemCategory = item.querySelector("h3").textContent.split(" ")[0];
      if (categoryName === itemCategory) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
