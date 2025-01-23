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


  function fileUploadFunc() {
     const fileIcons = {
                pdf: './assets/images/pdf-logo.png',
               doc: './assets/images/docs-logo.png',                
                docx: './assets/images/docs-logo.png',              
                xls: './assets/images/excel-logo.png',
                xlsx: './assets/images/excel-logo.png',
                 default: './assets/images/any-file.png',
  };

  // Attach event listener to all `.file-input` elements
  $('.file-input').on('change', function (e) {
    const $container = $(this).closest('.file-upload-container'); // Get the specific container
    const $previewContainer = $container.find('.file-preview-container');
    $previewContainer.empty(); // Clear previous previews
    const files = e.target.files;

    for (let file of files) {
      const fileType = file.type.split('/')[1] || file.name.split('.').pop().toLowerCase();
      const isImage = file.type.startsWith('image/');
      const previewElement = $('<div class="file-preview"></div>');
      const deleteIcon = $('<button class="delete-icon">x</button>');

      if (isImage) {
        const imgPreview = $('<img />');
        const reader = new FileReader();
        reader.onload = (e) => imgPreview.attr('src', e.target.result); // Load image preview
        reader.readAsDataURL(file);
        previewElement.append(imgPreview);
      } else {
        const iconSrc = fileIcons[fileType] || fileIcons.default;
        const fileIcon = $('<img class="file-icon" />').attr('src', iconSrc);
        previewElement.append(fileIcon);
      }

      previewElement.append(deleteIcon);
      $previewContainer.append(previewElement);

      // Remove file on delete icon click
      deleteIcon.on('click', function () {
        const index = [...files].indexOf(file);
        const dt = new DataTransfer();
        for (let i = 0; i < files.length; i++) {
          if (i !== index) dt.items.add(files[i]);
        }
        $(e.target).prop('files', dt.files);
        previewElement.remove();
      });
    }
  });
  }

  fileUploadFunc()




  
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

    flatpickr("#arivalDay", {
      dateFormat: "d-m-Y",
      inline: false,
      defaultDate: new Date(),
    });

    flatpickr("#daliveryDate", {
      dateFormat: "d-m-Y",
      inline: false,
      defaultDate: new Date(),
    });

    flatpickr("#trakingSedule", {
      dateFormat: "d-m-Y",
      inline: false,
      defaultDate: new Date(),
    });

    flatpickr("#releaseDay", {
      dateFormat: "d-m-Y",
      inline: false,
      defaultDate: new Date(),
    });


  }

  flatPickerFunc();
});
