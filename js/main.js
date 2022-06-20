// collapse navbar onclick

document.getElementById("bars").onclick = function () {
  document.getElementById("mbNav").classList.toggle("hidden");
};

document.getElementById("collapsedNav").onclick = function () {
  document.getElementById("mbNav").classList.toggle("hidden");
};

const hLinks = document.querySelectorAll("#hLink");

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mbNav").classList.toggle("hidden");
  });
});

// toggle body color
document.getElementById("dark").addEventListener("click", () => {
  document.getElementById("body").classList.toggle("bg-zinc-900");


  console.log("clicked");
});

// toggle body color on mobile
document.getElementById("Mbdark").addEventListener("click", () => {
  body.classList.toggle("bg-zinc-900");
  document.getElementById("mbNav").classList.toggle("hidden");
  console.log("clicked");
});



