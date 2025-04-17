document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('box');
  const toggleBtn = document.getElementById('toggleBtn');
  let isExpanded = false;
  
  toggleBtn.addEventListener('click', () => {
    if (isExpanded) {
      box.style.height = '10vh';
      toggleBtn.textContent = 'Show More👇';
    } else {
      box.style.height = box.scrollHeight + 'px';
      toggleBtn.textContent = 'Show Less👆';
    }
    isExpanded = !isExpanded;
  });
});

const textBase = "New content coming soon";
  const element = document.getElementById("loading");
  let dots = 1;

  setInterval(() => {
    element.textContent = textBase + ".".repeat(dots);
    dots = dots < 3 ? dots + 1 : 1;
  }, 1000);

