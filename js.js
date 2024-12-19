// Dropdown Menu Interaction
const dropdownButton = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", () => {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

// Close dropdown if clicking outside
window.addEventListener("click", (e) => {
  if (!e.target.matches(".dropbtn")) {
    dropdownContent.style.display = "none";
  }
});

