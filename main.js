// External JS File (script.js)
function toggleText() {
  const profileText = document.getElementById("profile-text");
  const seeMoreBtn = document.getElementById("see-more");

  // Toggle the collapsed state and change the button text
  profileText.classList.toggle("collapsed");
  seeMoreBtn.textContent = profileText.classList.contains("collapsed") ? "See more >" : "See less <";
  
  // Show the 'See more' button with a fade-in effect
  const seeMoreContainer = document.querySelector(".see-more-container");
  seeMoreContainer.classList.toggle("show");
}

// Ensure JS runs after page load
document.addEventListener("DOMContentLoaded", () => {
  const profileText = document.getElementById("profile-text");
  profileText.classList.add("collapsed"); // Make sure the text starts collapsed
  const seeMoreContainer = document.querySelector(".see-more-container");
  seeMoreContainer.classList.add("show"); // Show 'See More' button right away
});
const textBase = "New content coming soon";
  const element = document.getElementById("loading");
  let dots = 1;

  setInterval(() => {
    element.textContent = textBase + ".".repeat(dots);
    dots = dots < 3 ? dots + 1 : 1;
  }, 1000);

