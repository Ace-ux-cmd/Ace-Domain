

const textBase = "New content coming soon";
  const element = document.getElementById("loading");
  let dots = 1;

  setInterval(() => {
    element.textContent = textBase + ".".repeat(dots);
    dots = dots < 3 ? dots + 1 : 1;
  }, 1000);

