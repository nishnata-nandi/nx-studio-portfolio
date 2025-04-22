 <script>
    AOS.init();
    function toggleCard(card) {
      const isActive = card.classList.contains('active');
      document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
      if (!isActive) card.classList.add('active');
    }
  </script>