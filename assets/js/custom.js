document.addEventListener("DOMContentLoaded", function () {
  // Get all sidebar links
  const sidebarLinks = document.querySelectorAll(".nav-list .nav-list-item .nav-list-link");

  // Function to hide links containing "TL;DR"
  function hideTLDRLinks(link) {
    if (link.textContent.includes("TL;DR")) {
      link.style.display = "none";
    }
  }

  // Loop through all sidebar links
  sidebarLinks.forEach(function (link) {
    // Check if the link text contains "TL;DR" and hide it if true
    hideTLDRLinks(link);

    // Add click event listener to each sidebar link
    link.addEventListener("click", function () {
      hideTLDRLinks(this);
    });

    // Add event listener for when the link becomes active
    link.addEventListener("focus", function () {
      hideTLDRLinks(this);
    });
  });
});
