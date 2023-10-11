//------Custom select box
//------Custom select box
var customSelects = document.querySelectorAll(".custom-select");

customSelects.forEach(function (customSelect) {
  var inputField = customSelect.querySelector("input");
  var optionsList = customSelect.querySelector(".options-list");
  var arrowIcon = customSelect.querySelector(".arrow-icon");
  inputField.addEventListener("click", function () {
    optionsList.classList.toggle("show");
    inputField.classList.toggle("rotate");
  });

  optionsList.addEventListener("click", function (event) {
    var selectedOption = event.target.innerText;
    inputField.value = selectedOption;
    optionsList.classList.remove("show");
    inputField.classList.remove("rotate");
  });

  window.addEventListener("click", function (event) {
    if (!customSelect.contains(event.target)) {
      optionsList.classList.remove("show");
      inputField.classList.remove("rotate");
    }
  });
});

//------End custom select box
//------End custom select box

//------Custom Ajax Search box
//------Custom Ajax Search box

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("focus", function () {
    searchResults.style.display = "block";
  });

  searchInput.addEventListener("blur", function () {
    searchResults.style.display = "none";
  });
});
//------End custom Ajax Search box
//------End custom Ajax Search box

//------Custom Ajax Group Search box
//------Custom Ajax Group Search box

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("groupSearchInput");
  const searchResults = document.getElementById("groupSearchResults");

  searchInput.addEventListener("focus", function () {
    searchResults.style.display = "block";
  });

  searchInput.addEventListener("blur", function () {
    searchResults.style.display = "none";
  });
});
//------End custom Ajax Group Search box
//------End custom Ajax Group Search box

//------Custom dropdown menu box
//------Custom dropdown menu box
const custom_dropdown = document.querySelectorAll(".custom-dropdown");

custom_dropdown.forEach(function (customDropdown) {
  const labelField = customDropdown.querySelector("label");
  const optionsList = customDropdown.querySelector(".options-list");
  const arrowIcon = customDropdown.querySelector(".arrow-icon");

  labelField.addEventListener("click", function () {
    optionsList.classList.toggle("show");
    labelField.classList.toggle("rotate");
  });

  optionsList.addEventListener("click", function (event) {
    const selectedOption = event.target.textContent;
    labelField.textContent = selectedOption;
    optionsList.classList.remove("show");
    labelField.classList.remove("rotate");
  });

  window.addEventListener("click", function (event) {
    if (!customDropdown.contains(event.target)) {
      optionsList.classList.remove("show");
      labelField.classList.remove("rotate");
    }
  });
});

//------End custom dropdown menu box
//------End custom dropdown menu box

//------ Custom increment and decrement buttons
//------ Custom increment and decrement buttons
const incrementBtns = document.querySelectorAll(".increment-btn");
const decrementBtns = document.querySelectorAll(".decrement-btn");
incrementBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.parentElement.querySelector(".counter-input");
    input.value = parseInt(input.value) + 1;
  });
});

decrementBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.parentElement.querySelector(".counter-input");
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
    }
  });
});
//------End custom increment and decrement buttons
//------End custom increment and decrement buttons

// Single product image upload multiple place in same page
// Single product image upload multiple place in same page

const uploadContainers = document.querySelectorAll(".dragDrop-area");
uploadContainers.forEach((container) => {
  const uploadInput = container.querySelector(".image-upload");
  const previewContainer = container.querySelector(".image-preview-container");
  const previewImage = container.querySelector(".image-preview");
  const closeIcon = container.querySelector(".close-icon");
  function handleImagePreview(file) {
    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        previewImage.src = reader.result;
        previewContainer.style.display = "block";
        closeIcon.style.display = "block";
        container.classList.add("hide-border");
      });

      reader.readAsDataURL(file);
    }
  }
  uploadInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    handleImagePreview(file);
  });

  closeIcon.addEventListener("click", function () {
    uploadInput.value = "";
    previewImage.src = "#";
    previewContainer.style.display = "none";
    closeIcon.style.display = "none";

    container.classList.remove("hide-border");
  });

  container.addEventListener("dragover", function (e) {
    e.preventDefault();
    container.classList.add("dragover");
  });

  container.addEventListener("dragleave", function (e) {
    e.preventDefault();
    container.classList.remove("dragover");
  });

  container.addEventListener("drop", function (e) {
    e.preventDefault();
    container.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    handleImagePreview(file);
  });

  container.addEventListener("click", function () {
    uploadInput.click();
  });
});

// End single product image upload multiple place in same page
// End single product image upload multiple place in same page
