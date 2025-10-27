// document upload handler
const docForm = document.getElementById("docForm");
if (docForm) {
  docForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("docFile");
    const status = document.getElementById("docStatus");
    const progress = document.getElementById("docProgress");
    const progressBar = document.getElementById("docProgressBar");

    if (!fileInput.files.length) {
      status.textContent = "Please select a file.";
      return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const xhr = new XMLHttpRequest();
    // egbon, attach the API link for DOC upload here:
    xhr.open("POST", "https://example.com/api/upload-doc");

    xhr.upload.addEventListener("loadstart", () => {
      progress.style.display = "block";
      progressBar.style.width = "0%";
      status.textContent = "Uploading document...";
    });

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percent = (event.loaded / event.total) * 100;
        progressBar.style.width = `${percent}%`;
      }
    });

    xhr.onload = () => {
      progressBar.style.width = "100%";
      if (xhr.status === 200) {
        status.textContent = "Upload successful! Redirecting...";
        setTimeout(() => (window.location.href = "images.html"), 1000);
      } else {
        status.textContent = "Upload failed. Please check backend.";
      }
    };

    xhr.onerror = () => {
      status.textContent = "Error connecting to backend.";
    };

    xhr.send(formData);
  });
}

//image upload handler
const imageForm = document.getElementById("imageForm");
if (imageForm) {
  imageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const files = document.getElementById("imageFiles").files;
    const status = document.getElementById("imgStatus");
    const progress = document.getElementById("imgProgress");
    const progressBar = document.getElementById("imgProgressBar");

    if (!files.length) {
      status.textContent = "Please select at least one image.";
      return;
    }

    const formData = new FormData();
    for (const file of files) {
      formData.append("images", file);
    }

    const xhr = new XMLHttpRequest();
    // egbon, attach the API link for IMAGE upload here:
    xhr.open("POST", "https://example.com/api/upload-images");

    xhr.upload.addEventListener("loadstart", () => {
      progress.style.display = "block";
      progressBar.style.width = "0%";
      status.textContent = "Uploading images...";
    });

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percent = (event.loaded / event.total) * 100;
        progressBar.style.width = `${percent}%`;
      }
    });

    xhr.onload = () => {
      progressBar.style.width = "100%";
      if (xhr.status === 200) {
        status.textContent = "Images uploaded successfully! Redirecting...";
        setTimeout(() => (window.location.href = "result.html"), 1000);
      } else {
        status.textContent = "Image upload failed. Please check backend.";
      }
    };

    xhr.onerror = () => {
      status.textContent = "Error connecting to backend.";
    };

    xhr.send(formData);
  });
}
