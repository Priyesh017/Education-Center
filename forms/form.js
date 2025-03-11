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

  document.querySelectorAll(".openModal").forEach((link) => {
    link.addEventListener("click", () => {
      modal.classList.add("active");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});

// Upload Profile Image
function previewProfileImage() {
  const fileInput = document.getElementById("ProfilePicfile");
  const preview = document.getElementById("profilePreview");
  const img = document.getElementById("previewProfileImg");

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
}

// Upload Certificate Image
function removeProfileImage(event) {
  event.preventDefault();
  document.getElementById("ProfilePicfile").value = "";
  document.getElementById("profilePreview").style.display = "none";
}

function previewUploadImage() {
  const fileInput = document.getElementById("UploadPic");
  const preview = document.getElementById("uploadPreview");
  const img = document.getElementById("previewUploadImg");

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
}

function removeUploadImage(event) {
  event.preventDefault();
  document.getElementById("UploadPic").value = "";
  document.getElementById("uploadPreview").style.display = "none";
}
