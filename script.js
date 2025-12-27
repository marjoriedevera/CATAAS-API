const getImageBtn = document.getElementById("getImageBtn");
const getGifBtn = document.getElementById("getGifBtn");
const gallery = document.getElementById("gallery");
const modeToggle = document.getElementById("modeToggle");

// Function to create gallery item
function addCatToGallery(src) {
  const item = document.createElement("div");
  item.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = src;
  img.crossOrigin = "anonymous";
  img.alt = "Cat";

  const overlay = document.createElement("div");
  overlay.className = "download-text";
  overlay.innerText = "Click to Download";

  img.addEventListener("click", () => {
    fetch(src)
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "cat-picture.png";
        a.click();
        URL.revokeObjectURL(url);
      });
  });

  item.appendChild(img);
  item.appendChild(overlay);
  gallery.appendChild(item);
}

// Add Cat Image
getImageBtn.addEventListener("click", () => {
  const src = `https://cataas.com/cat?${Date.now()}`;
  addCatToGallery(src);
});

// Add Cat GIF
getGifBtn.addEventListener("click", () => {
  const src = `https://cataas.com/cat/gif?${Date.now()}`;
  addCatToGallery(src);
});

// Dark/Light Mode Toggle
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")) {
    modeToggle.innerText = "☀️ Light Mode";
  } else {
    modeToggle.innerText = "🌙 Dark Mode";
  }
});
