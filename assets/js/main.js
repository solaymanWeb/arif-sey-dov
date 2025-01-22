$(document).ready(function () {

  function passwordHideShow() {
    let InputBox = document.querySelector(".passWord");
    let toggleBtn = document.querySelector(".forToggle");

    toggleBtn?.addEventListener('click', function () {
      if (InputBox.type === "password") {
        InputBox.type = "text";
      } else {
        InputBox.type = "password";
      }
    });
  }

  passwordHideShow();

  // Nice select
  $('select').niceSelect();

  function imageUploadFunc() {
    document.querySelectorAll(".fileInput").forEach(input => {
      input.addEventListener("change", function () {
        const file = input.files[0]; // Get the selected file
        const parentBox = input.closest(".sl-single-input-box-for-image");

        // Select elements within the same parent box
        const fileImage = parentBox.querySelector(".fileImage");
        const imagePrompt = parentBox.querySelector(".imagePrompt");
        const browseText = parentBox.querySelector(".browseText");
        const fileStatus = parentBox.querySelector(".fileStatus");

        // Reset visibility of all elements
        fileImage.style.display = "none";
        imagePrompt.style.display = "block";
        browseText.style.display = "block";
        fileStatus.style.display = "none";

        if (file) {
          // Check if the file is an image
          if (file.type.startsWith("image")) {
            // Show the image preview
            fileImage.src = URL.createObjectURL(file);
            fileImage.style.display = "block";
            imagePrompt.style.display = "none";
            browseText.style.display = "none";
            fileStatus.style.display = "none";
          } else {
            // Handle non-image files
            browseText.textContent = `${file.name} file added successfully!`;
            browseText.style.color = "green";

            // Show the upload success message
            fileStatus.style.display = "block";
            fileStatus.style.opacity = 0;
            fileStatus.style.transition = "opacity 0.5s ease-in";
            setTimeout(() => {
              fileStatus.style.opacity = 1;
            }, 50);

            // Hide irrelevant elements
            imagePrompt.style.display = "none";
            fileImage.style.display = "none";
          }
        }
      });
    });
  }

  imageUploadFunc();

  function profileFunc() {
    const chorvotDown = document.querySelector(".chorvotDown");
    const ProfileMenuWrapper = document.querySelector(".profile-menu-wrapper");

    if (chorvotDown && ProfileMenuWrapper) {
      chorvotDown.addEventListener("click", function () {
        ProfileMenuWrapper.classList.toggle("active");
        this.classList.toggle("active");
      });
    }
  }

  profileFunc();

  function filterFunc() {
    const filterItes = document.querySelector(".filter-items");
    const dataFilterWrapper = document.querySelector(".dataFilterWrapper");
    const filterCalanderWrap = document.querySelector(".filter-calander-wrap");
    const dateByFilter = document.querySelector(".date-by-filter");
    const calanderMainWrapper = document.querySelector(".calander-main-wrapper");


    if (filterItes && dataFilterWrapper && filterCalanderWrap && dateByFilter && calanderMainWrapper) {
      dataFilterWrapper.addEventListener("click", function () {
        dateByFilter.classList.remove("active");
        filterCalanderWrap.classList.remove("active");
        filterItes.classList.toggle("active");
        this.classList.toggle("active");
      });

      dateByFilter.addEventListener("click", function () {
        dataFilterWrapper.classList.remove("active");
        filterItes.classList.remove("active");

        this.classList.toggle("active");
        filterCalanderWrap.classList.toggle("active");
      });

      window.addEventListener("click", function (event) {
        if (!calanderMainWrapper.contains(event.target)) {
          dateByFilter.classList.remove("active");
          filterCalanderWrap.classList.remove("active");
        }
      });
    }
  }

  filterFunc();


  function dateFilterFunc() {
    const dayFilterMainWraper = document.querySelector(".day-filter-main-wrapper");
    const dataFilterWrapper = document.querySelector(".dataFilterWrapper");
     const filterItes = document.querySelector(".filter-items");

        window.addEventListener("click", function (event) {
          if (!dayFilterMainWraper.contains(event.target)) {
            dataFilterWrapper.classList.remove("active")
            filterItes.classList.remove("active")
          
        }
      })
  }

  dateFilterFunc();


  function flatPickerFunc() {
    flatpickr("#datePicker", {
      dateFormat: "d-m-Y",
      inline: true,
      defaultDate: new Date(),
    });
  }

  flatPickerFunc();
});
