const textBase = "New content coming soon";
  const element = document.getElementById("loading");
  let dots = 1;

  setInterval(() => {
    element.textContent = textBase + ".".repeat(dots);
    dots = dots < 3 ? dots + 1 : 1;
  }, 1000);

function toggleProfile() {
  const moreText = document.getElementById("more-text");
  const button = document.getElementById("toggle-btn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    button.textContent = "Show less";
  } else {
    moreText.style.display = "none";
    button.textContent = "Show more";
  }
}
