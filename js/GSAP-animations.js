// page animations

document.addEventListener("DOMContentLoaded", function () {
  // Select the navbar element
  const navbar = document.getElementById("navbar-animate");
  const nav_contents = document.getElementById("nav-contents");

  // Float down animation
  gsap.to(navbar, { top: 1, duration: 0.5, ease: "power2.out" });
  gsap.to(nav_contents, {
    opacity: 1,
    duration: 0.6,
    delay: 0.4,
    ease: "power2.out",
  });
});

// header

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".float-item");

  // Loop through each item and animate them with a stagger
  items.forEach((item, index) => {
    gsap.to(item, {
      top: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: index * 0.2, // Stagger delay
    });
  });
});

// header element
document.addEventListener("DOMContentLoaded", function () {
  const floatingImg1 = document.querySelector(".floating-img1");
  const floatingImg2 = document.querySelector(".floating-img2");
  const Img1 = document.getElementById("img1");

  gsap.to(floatingImg1, {
    opacity: 1,
    width: "45%",
    duration: 1,
    ease: "power2.out",
  });
  gsap.to(Img1, {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  });
  gsap.to(floatingImg2, {
    opacity: 1,
    width: "55%",
    duration: 1,
    ease: "power2.out",
  });

  // Initial positions
  gsap.set(floatingImg1, { yPercent: -10 });
  gsap.set(floatingImg2, { yPercent: 10 });

  // Scroll animation
  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    // Calculate the new position based on scroll percentage
    const newPosition1 = 15 + scrollPercentage * 0.15; // Calculate position for image 1
    const newPosition2 = -15 - scrollPercentage * 0.15; // Calculate position for image 2

    // Animate the images
    gsap.to(floatingImg1, { yPercent: newPosition1, duration: 4 });
    gsap.to(floatingImg2, { yPercent: newPosition2, duration: 4 });
  });

  // Scroll animation for scrolling up
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      // Return elements to their initial positions
      gsap.to(floatingImg1, { yPercent: -10, duration: 5 });
      gsap.to(floatingImg2, { yPercent: 10, duration: 5 });
    }
  });
});

// -----section 4 --------
if (window.matchMedia("(min-width: 992px)").matches) {
  ScrollTrigger.create({
    trigger: "#scrollable-column",
    start: "top",
    pin: "#static-column",
    endTrigger: "#scrollable-column .card:nth-last-child(2)", // Targeting the second-last card
    end: "bottom top", // Adjust as needed
    anticipatePin: 1,
  });
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the item you want to fade up
  const item = document.getElementById("floatup");

  // Set initial opacity
  gsap.set(item, { top: "80%", opacity: 0 });

  // Create a ScrollTrigger to trigger the animation when the item comes into view
  ScrollTrigger.create({
    trigger: item,
    start: "top 80%", // Adjust the start position as needed
    onEnter: () =>
      gsap.to(item, {
        top: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }),
  });
});

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".floatitem");

  // Loop through each item and set initial opacity
  items.forEach((item) => gsap.set(item, { opacity: 0 }));

  // Loop through each item and create a ScrollTrigger for each one
  items.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item, // Set the trigger to be the current item
      start: "top 90%", // Adjust the start position as needed
      onEnter: () => {
        // Callback when the item enters the viewport
        gsap.to(item, {
          top: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: index * 0.2, // Stagger delay
        });
      },
    });
  });
});
