document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });
});

function performSearch() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const items = document.querySelectorAll(".searchable-item"); // Adjust the selector to match your items

  items.forEach((item) => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
