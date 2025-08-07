// Demo handler for required form
document.querySelector('.right-section').addEventListener('submit', function(e) {
  e.preventDefault();
  // Optionally, add validation or post logic here
  alert('Job post form submitted!');
});

function companyNameInput() {
  const userType = document.getElementById('user_type').value;
  const companyInputDiv = document.getElementById('companyNameInput');

  if (userType === 'company') {
    companyInputDiv.classList.remove('hidden');
  } else {
    companyInputDiv.classList.add('hidden');
  }
}
