$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".navbar").toggle();
  });

  function hideElementsOnWidth() {
    if ($(window).width() <= 768) {
      $(".navbar").hide(); // Replace with your class name
      $(".navbar, .navbar a").click(function () {
        $(".navbar").hide();
      });
    } else {
      $(".navbar").show(); // Replace with your class name
    }
  }

  // Listen for resize events
  $(window).resize(hideElementsOnWidth);

  // Initial check
  $(document).ready(hideElementsOnWidth);
});
