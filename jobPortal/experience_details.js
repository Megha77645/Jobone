
// Button toggle logic
document.addEventListener('DOMContentLoaded', function () {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  yesBtn.addEventListener('click', function () {
    yesBtn.classList.add('active');
    noBtn.classList.remove('active');
  });

  noBtn.addEventListener('click', function () {
    noBtn.classList.add('active');
    yesBtn.classList.remove('active');
  });

  // Add navigation for back arrow (optional)
  document.querySelector('.back-arrow').addEventListener('click', function () {
    window.history.back();
  });

  // Add action for Next button (placeholder)
  document.querySelector('.next-btn').addEventListener('click', function () {
    alert('Next button clicked! (Implement your navigation here)');
  });
});