document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
menuButton.addEventListener("click", function () { navLinks.classList.toggle("open"); });
navLinks.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", function () { navLinks.classList.remove("open"); }); });
const revealItems = document.querySelectorAll(".section, .project-card, .skill-group");
revealItems.forEach(function (item) { item.classList.add("reveal"); });
const revealObserver = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.12 });
revealItems.forEach(function (item) { revealObserver.observe(item); });