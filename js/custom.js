// Open dropdown on hover
document.querySelector(".dropdown").addEventListener("mouseover", function () {
  var dropdownToggle = this.querySelector('[data-bs-toggle="dropdown"]');
  if (!dropdownToggle.classList.contains("show")) {
    dropdownToggle.click();
  }
});

// Close dropdown when cursor moves out of the dropdown area
document.body.addEventListener("mouseover", function (event) {
  var dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(event.target)) {
    var dropdownToggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
    if (dropdownToggle.classList.contains("show")) {
      dropdownToggle.click();
    }
  }
});
