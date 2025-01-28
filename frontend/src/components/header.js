document.addEventListener("DOMContentLoaded", () => {
    const infinityElement = document.querySelector(".infinity");
  
    if (infinityElement) {
      infinityElement.style.position = "relative";
      infinityElement.style.animation = "infinity-loop 2s linear infinite";
    }
  });
  