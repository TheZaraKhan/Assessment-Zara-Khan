document.addEventListener("DOMContentLoaded", function () {
  const floatingImg1 = document.querySelector(".floating-img1");
  const floatingImg2 = document.querySelector(".floating-img2");

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
    gsap.to(floatingImg1, { yPercent: newPosition1, duration: 3 });
    gsap.to(floatingImg2, { yPercent: newPosition2, duration: 3 });
  });

  // Scroll animation for scrolling up
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      // Return elements to their initial positions
      gsap.to(floatingImg1, { yPercent: -10, duration: 4 });
      gsap.to(floatingImg2, { yPercent: 10, duration: 4 });
    }
  });
});
