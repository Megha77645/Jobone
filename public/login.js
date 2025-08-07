
    // Open modal when Login button is clicked
    document.getElementById('openLogin').onclick = function() {
      document.getElementById('modalOverlay').style.display = 'flex';
    };

    // Close modal when X is clicked or overlay is clicked
    document.getElementById('closeModal').onclick = function() {
      document.getElementById('modalOverlay').style.display = 'none';
    };
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
      if (e.target === this) this.style.display = 'none';
    });

    // Tab switching logic
    const studentTab = document.getElementById('studentTab');
    const employerTab = document.getElementById('employerTab');
    const googleLogin = document.getElementById('google-login');

    studentTab.onclick = function() {
      studentTab.classList.add('active');
      employerTab.classList.remove('active');
      googleLogin.style.display = 'block';
    };

    employerTab.onclick = function() {
      employerTab.classList.add('active');
      studentTab.classList.remove('active');
      googleLogin.style.display = 'none';
    };

    // Form validation and demo login
    document.getElementById('loginForm').onsubmit = function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      if (email && password.length >= 6) {
        fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        }).then(response => response.json())
        .then(data => {
          console.log(data);
          alert('Login successful (demo only)');
          document.getElementById('modalOverlay').style.display = 'none';
        })
        .catch(error => {
          console.error('Error:', error);
        });
      } else {
        alert('Please enter valid credentials.');
      }
    };
