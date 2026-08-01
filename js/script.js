// ================================
// Active Navigation Highlight
// ================================

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#22c55e";
        link.style.fontWeight = "600";
    }
});

// ================================
// Scroll Reveal Animation
// ================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.display = "none";

window.onscroll = () => {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// ================================
// Welcome Message
// ================================

window.addEventListener("load", () => {
    console.log("Welcome to Ahammed Yazin S Portfolio");
});