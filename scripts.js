function showSection(id) {
      hideSections();
      const section = document.getElementById(id);
      section.classList.add('active');
      setTimeout(() => section.style.opacity = '1', 10);
    }

    function hideSections() {
      document.querySelectorAll('.overlay-section').forEach(section => {
        section.classList.remove('active');
        section.style.opacity = '0';
      });
    }