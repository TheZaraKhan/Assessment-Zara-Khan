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

// Wait for the DOM content to be fully loaded
$(document).ready(function () {
  // Select the navbar toggler button
  const navbarToggleIcon = $("#navbarToggleIcon");

  // Add a click event listener to the navbar toggler button
  $(".navbar-toggler").click(function () {
    // Toggle between the two icons when the button is clicked
    navbarToggleIcon.toggleClass("bi-list bi-x-lg");
  });
});
