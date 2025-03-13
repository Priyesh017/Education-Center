document.getElementById("searchButton").addEventListener("click", function () {
  let subject = document.getElementById("searchInput").value;
  let location = document.getElementById("locationInput").value;
  alert(`Searching for ${subject} teachers in ${location}`);
});

// Navigation Bar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  // Show Navbar on Scroll
  // setTimeout(() => {
  //   navbar.classList.add("show");
  // }, 200);

  document.querySelectorAll(".section").forEach((links) => {
    links.addEventListener("click", () => {
      navbar.classList.add("scrolled");
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle Mobile Menu
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  // Close Menu with Button
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });

  // Close Menu on Link Click
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
});

// Modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () => {
      window.location.href = "forms/tutor/co-curricular.html"; // Redirect URL
    });
  });

  document.querySelectorAll(".openModal").forEach((link) => {
    link.addEventListener("click", () => {
      modal.classList.add("active");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});

// About Section
document.addEventListener("DOMContentLoaded", () => {
  // Feature Data Array with Image Icons
  const features = [
    {
      title: "Verified Teachers",
      description:
        "All our teachers are thoroughly verified to ensure they meet our high standards of expertise and professionalism.",
      image: "assets/verified-person-icon.png",
    },
    {
      title: "Personalized Learning",
      description:
        "Get customized learning experiences tailored to your specific needs, learning style, and pace.",
      image: "assets/learning-icon.png",
    },
    {
      title: "Flexible Options",
      description:
        "Choose between online and in-person sessions based on your preference and convenience.",
      image: "assets/flexible-icon.svg",
    },
  ];

  // Get the container
  const featuresContainer = document.getElementById("features-container");

  // Dynamically generate feature cards
  features.forEach((feature) => {
    const card = document.createElement("div");
    card.classList.add("feature-card");

    card.innerHTML = `
          <div class="cstm-icons">
              <img src="${feature.image}" alt="${feature.title}">
          </div>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
      `;

    featuresContainer.appendChild(card);
  });

  // Function to add animation when scrolling
  function checkVisibility() {
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add("show");
      }
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check on load
});

document.addEventListener("DOMContentLoaded", function () {
  const stats = document.querySelectorAll(".stat-item h3");

  stats.forEach((stat) => {
    let count = 0;
    const target = parseInt(stat.innerText.replace("+", ""));

    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(target / 100); // Increase in small steps
        stat.innerText = count + "+";
        setTimeout(updateCount, 20);
      } else {
        stat.innerText = target + "+"; // Final value
      }
    };

    updateCount();
  });
});

// Category Data
const categories = [
  { name: "Tamil", icon: "fas fa-language" },
  { name: "Flute", icon: "fas fa-music" },
  { name: "Art & Design", icon: "fas fa-paint-brush" },
  { name: "Badminton", icon: "fas fa-volleyball-ball" },
  { name: "Telugu", icon: "fas fa-language" },
  { name: "Vocal Coach", icon: "fas fa-microphone" },
  { name: "Spanish", icon: "fas fa-globe" },
  { name: "Micro", icon: "fas fa-microchip" },
];

const categoryContainer = document.querySelector(".category");

// Generate buttons dynamically
categories.forEach((category) => {
  const button = document.createElement("button");
  button.classList.add("catBtn", "grow-shadow");
  button.innerHTML = `<i class="${category.icon}"></i> ${category.name}`;
  categoryContainer.appendChild(button);
});

//
document.addEventListener("DOMContentLoaded", function () {
  const stats = document.querySelectorAll(".stat-item h3");

  stats.forEach((stat) => {
    let count = 0;
    const target = parseInt(stat.innerText.replace("+", ""));

    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(target / 100); // Increase in small steps
        stat.innerText = count + "+";
        setTimeout(updateCount, 20);
      } else {
        stat.innerText = target + "+"; // Final value
      }
    };

    updateCount();
  });
});

// Tutor Section
// Tutor Data Array
const tutors = [
  {
    name: "Manisha",
    location: "Bengaluru (Online)",
    subject: "Yoga - A blessing that gives a deep understanding...",
    price: "₹2,000/hr",
    freeClass: "1st free class",
    rating: "⭐ 4.9 (25 reviews)",
    image: "assets/demo.jpg",
  },
  {
    name: "Gunjan",
    location: "New Delhi (Face-to-face & Online)",
    subject: "Guitar - Learn guitar/ukulele from a pro...",
    price: "₹1,500/hr",
    freeClass: "1st free class",
    rating: "⭐ 5.0 (171 reviews)",
    image: "assets/demo.jpg",
  },
  {
    name: "Dinesh",
    location: "Pune (Face-to-face & Online)",
    subject: "Maths - Masters in theoretical physics...",
    price: "₹899/hr",
    freeClass: "1st free class",
    rating: "⭐ 5.0 (172 reviews)",
    image: "assets/demo.jpg",
  },
  {
    name: "Priya",
    location: "Mumbai (Online & Face-to-face)",
    subject: "English - Improve your communication skills...",
    price: "₹1,200/hr",
    freeClass: "1st free class",
    rating: "⭐ 4.8 (98 reviews)",
    image: "assets/demo.jpg",
  },
];

// Get the container where cards will be displayed
const tutorsContainer = document.getElementById("tutorsContainer");

// Function to create tutor cards dynamically
function displayTutors() {
  tutors.forEach((tutor) => {
    const tutorCard = document.createElement("div");
    tutorCard.classList.add("tutor-card");

    tutorCard.innerHTML = `
          <div class="parallax">
            <div class="parallax-top-left" tabindex="1"></div>
            <div class="parallax-top-right" tabindex="2"></div>
            <div class="parallax-bottom-left" tabindex="3"></div>
            <div class="parallax-bottom-right" tabindex="4"></div>
            <div class="parallax-content">
              <div class="parallax-back">
                <img src="${tutor.image}" alt="${tutor.name}" class="img-responsive" ... />
              </div>
              <div class="tutor-info">
                <h3>${tutor.name}</h3>
                <p class="location">${tutor.location}</p>
                <p class="subject">${tutor.subject}</p>
                <p class="price">${tutor.price} <span class="free-class">${tutor.freeClass}</span></p>
                <p class="rating">${tutor.rating}</p>
                <button class="fav-btn">♡</button>
              </div>
            </div>
          </div>
      `;

    tutorsContainer.appendChild(tutorCard);
  });
}

// Call the function to display tutors on page load
displayTutors();

// Review Section
const reviews = [
  {
    image: "assets/demo.jpg",
    title: "The perfect alchemy",
    text: "More than a million students gave <strong>5 stars to their teacher.</strong>",
    reviewerName: "Abhay",
    reviewerRole: "PHP Teacher",
    testimonial:
      "Currently doing an R tutorial with Abhay sir and so far it has been really nice...",
    reviewerFooter: "Zuhair ⭐⭐⭐⭐⭐",
    bgColor: "#ffcc00",
  },
  {
    image: "assets/demo.jpg",
    title: "A great learning experience",
    text: "Students love the way lessons are explained with real-world examples.",
    reviewerName: "Neha",
    reviewerRole: "JavaScript Mentor",
    testimonial:
      "The JavaScript course has been really well-structured and informative...",
    reviewerFooter: "Arjun ⭐⭐⭐⭐⭐",
    bgColor: "#ff7f50",
  },
  {
    image: "assets/demo.jpg",
    title: "Highly recommended",
    text: "The practical approach makes learning much more engaging.",
    reviewerName: "Vikram",
    reviewerRole: "Data Science Instructor",
    testimonial:
      "I have been learning Data Science, and the step-by-step approach is fantastic...",
    reviewerFooter: "Riya ⭐⭐⭐⭐⭐",
    bgColor: "#6a5acd",
  },
];

let currentIndex = 0;
const rightSection = document.getElementById("right-section");

function createReviewCard(index, animationClass) {
  const review = reviews[index];

  const card = document.createElement("div");
  card.classList.add("testimonial-card", animationClass);
  card.style.backgroundColor = review.bgColor;

  card.innerHTML = `
      <div class="testimonial-image">
          <img src="${review.image}" alt="${review.reviewerName}" class="img-responsive" />
          <h1>${review.reviewerName}</h1>
      </div>
      <div class="testimonial-header">
          <h4>${review.reviewerRole}</h4>
      </div>
      <h6>${review.testimonial}</h6>
      <div class="testimonial-footer">
          <div>${review.reviewerFooter}</div>
      </div>
  `;

  return card;
}

function updateReview(direction) {
  const animationClass =
    direction === "next" ? "perspectiveLeftReturn" : "perspectiveRightReturn";

  const newCard = createReviewCard(currentIndex, animationClass);
  rightSection.appendChild(newCard);

  // Reorder stacking
  const cards = rightSection.querySelectorAll(".testimonial-card");
  cards.forEach((card, i) => {
    card.style.zIndex = i;
    card.style.transform = `translateY(${
      (cards.length - i - 1) * 15
    }px) scale(${1 - (cards.length - i - 1) * 0.05})`;
    card.style.opacity = `${1 - (cards.length - i - 1) * 0.2}`;
  });

  // Limit stack to 3 cards max
  if (cards.length > 3) {
    cards[0].remove();
  }
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateReview("next");
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  updateReview("prev");
});

// Initial Load
updateReview("next");

// Cities Section
document.addEventListener("DOMContentLoaded", function () {
  const citiesData = [
    { name: "Mumbai", courses: ["English", "Guitar", "Driving"] },
    { name: "New Delhi", courses: ["Guitar", "Yoga", "French"] },
    { name: "Bengaluru", courses: ["Yoga", "Singing", "Dance"] },
    { name: "Kolkata", courses: ["Guitar", "Singing", "Maths"] },
    { name: "Ahmedabad", courses: ["Yoga", "Singing", "French"] },
    { name: "Hyderabad", courses: ["Singing", "Yoga", "English"] },
    { name: "Pune", courses: ["English", "Piano", "Singing"] },
    { name: "Surat", courses: ["Maths", "English", "Sanskrit"] },
    { name: "Jaipur", courses: ["Yoga", "English", "Guitar"] },
    { name: "Navi Mumbai", courses: ["Yoga", "Guitar", "Singing"] },
    { name: "Lucknow", courses: ["Guitar", "Dance", "Singing"] },
    { name: "Nagpur", courses: ["Singing", "Physics", "French"] },
  ];

  const citiesContainer = document.getElementById("cities-container");

  citiesData.forEach((city) => {
    const cityDiv = document.createElement("div");
    cityDiv.classList.add("city");

    const cityTitle = document.createElement("h3");
    cityTitle.textContent = city.name;
    cityDiv.appendChild(cityTitle);

    if (city.courses.length > 0) {
      const courseList = document.createElement("ul");
      city.courses.forEach((course) => {
        const courseItem = document.createElement("li");
        courseItem.textContent = course;
        courseList.appendChild(courseItem);
      });
      cityDiv.appendChild(courseList);
    }

    citiesContainer.appendChild(cityDiv);
  });
});

// Footer
document.addEventListener("DOMContentLoaded", () => {
  const footerData = [
    {
      title: "About",
      links: [
        { text: "Who are we?", url: "#" },
        { text: "Terms & Conditions", url: "#" },
        { text: "Privacy Policy", url: "#" },
        { text: "Superprof around the world", url: "#" },
        { text: "Online Classes", url: "#" },
        { text: "States", url: "#" },
        { text: "Superprof recruits", url: "#" },
      ],
    },
    {
      title: "All subjects",
      links: [
        { text: "Arts & hobbies", url: "#" },
        { text: "Professional Development", url: "#" },
        { text: "Computer Sciences", url: "#" },
        { text: "Languages", url: "#" },
        { text: "Music", url: "#" },
        { text: "Health & well-being", url: "#" },
        { text: "Academic tutoring", url: "#" },
        { text: "Sports", url: "#" },
      ],
    },
    {
      title: "Join the adventure",
      links: [{ text: "The Superprof Blog", url: "#" }],
    },
    {
      title: "Help",
      links: [
        { text: "Need help?", url: "#" },
        { text: "Contact", url: "#" },
      ],
    },
    {
      title: "Follow us",
      social: [
        { platform: "Facebook", icon: "assets/facebook-icon.webp", url: "#" },
        { platform: "X", icon: "assets/x-icon.png", url: "#" },
        { platform: "Instagram", icon: "assets/instagram-icon.png", url: "#" },
      ],
    },
  ];

  const footerContainer = document.getElementById("footer-links");

  footerData.forEach((section) => {
    const sectionElement = document.createElement("div");
    sectionElement.classList.add("footer-section");

    const title = document.createElement("h3");
    title.textContent = section.title;
    sectionElement.appendChild(title);

    if (section.links) {
      const ul = document.createElement("div");
      section.links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
      });
      sectionElement.appendChild(ul);
    }

    if (section.social) {
      const socialDiv = document.createElement("div");
      socialDiv.classList.add("social-icons");

      section.social.forEach((social) => {
        const a = document.createElement("a");
        a.href = social.url;
        const img = document.createElement("img");
        img.src = social.icon;
        img.alt = social.platform;
        a.appendChild(img);
        socialDiv.appendChild(a);
      });

      sectionElement.appendChild(socialDiv);
    }

    footerContainer.appendChild(sectionElement);
  });

  console.log("Footer links rendered dynamically.");
});
