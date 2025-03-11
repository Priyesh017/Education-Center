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
