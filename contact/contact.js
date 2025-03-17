// Navbar
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

// Contact Us Form
function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all required fields.");
    return;
  }

  alert("Message sent successfully!");
}

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
        { platform: "Facebook", icon: "/assets/facebook-icon.webp", url: "#" },
        { platform: "X", icon: "/assets/x-icon.png", url: "#" },
        { platform: "Instagram", icon: "/assets/instagram-icon.png", url: "#" },
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
