
  function selectFilter(element, targetId) {
    document.getElementById(targetId).innerText = element.innerText;

    let parentDiv = element.closest('.list-options');
    parentDiv.querySelectorAll('.option-link').forEach(el => el.classList.remove('active'));

    element.classList.add('active');
  }

  document.querySelectorAll('.dropdown-search').forEach(input => {
    input.addEventListener('keyup', function() {
      let filter = this.value.toUpperCase();
      let listContainer = this.closest('.dropdown-menu').querySelector('.list-options');
      let items = listContainer.querySelectorAll('.option-link');

      items.forEach(item => {
        let txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  /* =========================================================
        Select City - Dropdown
     =========================================================*/

     

  /* =============================================
        Lucknow About Us - JS
   ============================================= */
// Initial height matches CSS max-height
let currentHeight = 220; 

// How much to open per click (400px covers approx 2-3 paragraphs)
const stepHeight = 400; 

function loadMoreContent(btn) {
  const contentBox = document.getElementById('aboutContentArea');
  const fadeOverlay = document.getElementById('aboutFade');
  const spanText = btn.querySelector('span');
  const icon = btn.querySelector('i');
  
  // Get the full height of the content
  const totalHeight = contentBox.scrollHeight;

  // CHECK: If button says "Show Less", Collapse everything
  if (spanText.innerText === "Show Less") {
    contentBox.style.maxHeight = "220px"; // Reset to initial CSS height
    currentHeight = 220; // Reset counter
    spanText.innerText = "Read More";
    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    fadeOverlay.style.opacity = "1"; // Show fade again
    
    // Smooth scroll back to top of section
    contentBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // LOGIC: Increase height by stepHeight
  currentHeight += stepHeight;

  // Check if we have reached the end
  if (currentHeight >= totalHeight) {
    contentBox.style.maxHeight = totalHeight + "px"; // Open fully
    spanText.innerText = "Show Less";
    icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    fadeOverlay.style.opacity = "0"; // Hide fade
  } else {
    contentBox.style.maxHeight = currentHeight + "px"; // Open step
  }
}