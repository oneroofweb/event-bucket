
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