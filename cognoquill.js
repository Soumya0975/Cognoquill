// ===============================
// NAVIGATION DRAWER LOGIC
// ===============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    // Open/Close toggle for mobile viewports
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Close mobile drawer when an inner item links away
    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}

// Dynamic Header Border Shadow Effect on Page Scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        if (window.scrollY > 40) {
            nav.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.18)";
        } else {
            nav.style.boxShadow = "none";
        }
    }
});




// ===================================================
// POETRY PAGE — DYNAMIC CAROUSEL
// ===================================================

// Sample poem data (replace with real submissions later)
const poemData = [
    {
        image: "placeholder.jpg",
        title: "Whispers of Autumn",
        author: "Elena Marsh",
        preview: "The leaves fall softly, one by one, carrying secrets the summer had begun...",
    },
    {
        image: "placeholder.jpg",
        title: "Ink and Silence",
        author: "Rowan Blake",
        preview: "In the quiet hush of midnight ink, my thoughts unravel faster than I think...",
    },
    {
        image: "placeholder.jpg",
        title: "The Old Library",
        author: "Clara Whitmore",
        preview: "Dust and dreams upon the shelf, each book a piece of someone's self...",
    },
    {
        image: "placeholder.jpg",
        title: "Letters Never Sent",
        author: "Amara Voss",
        preview: "I write to you in words unspoken, folded pages, promises broken...",
    },
    {
        image: "placeholder.jpg",
        title: "Candlelight Confessions",
        author: "Theo Ashworth",
        preview: "By flickering flame I speak the truth, hidden long since reckless youth...",
    },
    {
        image: "placeholder.jpg",
        title: "The Garden of Forgotten Names",
        author: "Isla Renfield",
        preview: "Beneath the ivy, names grow faint, like watercolor without paint...",
    }
];

const carouselTrack = document.getElementById("carouselTrack");
const carouselDots = document.getElementById("carouselDots");
const poemCarousel = document.getElementById("poemCarousel");

if (carouselTrack && carouselDots && poemCarousel) {

    let currentIndex = 0;
    let autoSlideInterval;

    // Build carousel cards dynamically from poemData array
    poemData.forEach(poem => {
        const card = document.createElement("div");
        card.className = "poem-card";
        card.innerHTML = `
            <img src="${poem.image}" alt="${poem.title}">
            <div class="poem-card-info">
                <h3>${poem.title}</h3>
                <p class="poem-author">by ${poem.author}</p>
                <p class="poem-preview">${poem.preview}</p>
                <button class="read-more-btn">Read More</button>
            </div>
        `;
        carouselTrack.appendChild(card);
    });

    // Build navigation dots dynamically
    poemData.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "dot" + (index === 0 ? " active" : "");
        dot.addEventListener("click", () => {
            goToSlide(index);
            resetAutoSlide();
        });
        carouselDots.appendChild(dot);
    });

    const dots = carouselDots.querySelectorAll(".dot");

    // Moves the track to show the given slide index
    function goToSlide(index) {
        currentIndex = index;
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Advances to the next slide, looping back to the start
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % poemData.length;
        goToSlide(nextIndex);
    }

    // Starts the automatic slide timer
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    // Restarts the timer (used after manual dot click)
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Pause on hover, resume on mouse leave
    poemCarousel.addEventListener("mouseenter", () => {
        clearInterval(autoSlideInterval);
    });

    poemCarousel.addEventListener("mouseleave", () => {
        startAutoSlide();
    });

    // Kick off the carousel
    startAutoSlide();
}
