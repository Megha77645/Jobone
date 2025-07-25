// List of suggested job roles
const suggestedRolesArr = [
  "Software Project Management",
  "Data Science & Machine Learning",
  "Software Backend Development",
  "Teacher / Faculty / Tutor",
  "IT Infrastructure Services",
  "Technology / IT Project Management",
  "DBA / Data warehousing",
  "Software Development",
  "IT Support",
  "DevOps"
];

// Extended list of job roles for search/autocomplete
const allJobRoles = [
  "Software Project Management",
  "Data Science & Machine Learning",
  "Software Backend Development",
  "Teacher / Faculty / Tutor",
  "IT Infrastructure Services",
  "Technology / IT Project Management",
  "DBA / Data warehousing",
  "Software Development",
  "IT Support",
  "DevOps",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Android Developer",
  "iOS Developer",
  "Mobile Application Developer",
  "QA Engineer",
  "Test Engineer",
  "Automation Engineer",
  "Business Analyst",
  "Product Manager",
  "Scrum Master",
  "UI/UX Designer",
  "Graphic Designer",
  "System Administrator",
  "Network Engineer",
  "Cloud Engineer",
  "AWS Engineer",
  "Azure Engineer",
  "Google Cloud Engineer",
  "Security Analyst",
  "Cybersecurity Specialist",
  "Database Administrator",
  "Data Analyst",
  "Data Engineer",
  "Big Data Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Support Engineer",
  "Desktop Support",
  "Technical Writer",
  "IT Consultant",
  "ERP Consultant",
  "SAP Consultant",
  "Blockchain Developer",
  "Game Developer",
  "Embedded Systems Engineer",
  "IoT Engineer",
  "Web Developer",
  "PHP Developer",
  "Java Developer",
  "Python Developer",
  "C++ Developer",
  "C# Developer",
  "Ruby Developer",
  "Scala Developer",
  "DevOps Engineer",
  "Release Manager",
  "Build Engineer"
];

// Default selected roles (empty)
let selectedRoles = [];

// DOM elements
const rolesList = document.getElementById('rolesList');
const suggestedRoles = document.getElementById('suggestedRoles');
const roleInput = document.getElementById('roleInput');
const nextttBtn = document.getElementById('nextttBtn');

// Show autocomplete dropdown for job roles
function showAutocomplete(matches) {
  let autocomplete = document.getElementById('autocomplete-list');
  if (!autocomplete) {
    autocomplete = document.createElement('div');
    autocomplete.id = 'autocomplete-list';
    autocomplete.style.position = 'absolute';
    autocomplete.style.background = '#fff';
    autocomplete.style.border = '1px solid #d2d2d2';
    autocomplete.style.borderTop = 'none';
    autocomplete.style.zIndex = 1000;
    autocomplete.style.width = roleInput.offsetWidth + 'px';
    autocomplete.style.maxHeight = '170px';
    autocomplete.style.overflowY = 'auto';
    autocomplete.style.left = roleInput.getBoundingClientRect().left + 'px';
    autocomplete.style.top = (roleInput.getBoundingClientRect().bottom + window.scrollY) + 'px';
    document.body.appendChild(autocomplete);
  }
  autocomplete.innerHTML = '';
  matches.forEach(role => {
    if (!selectedRoles.includes(role)) {
      const item = document.createElement('div');
      item.style.padding = '8px 14px';
      item.style.cursor = 'pointer';
      item.style.fontSize = '1rem';
      item.onmousedown = function(e) {
        e.preventDefault();
        if (!selectedRoles.includes(role) && selectedRoles.length < 5) {
          selectedRoles.push(role);
          renderRoles();
          renderSuggested();
          updateNextBtn();
          roleInput.value = '';
          closeAutocomplete();
        }
      };
      item.textContent = role;
      autocomplete.appendChild(item);
    }
  });
  if (matches.length === 0) closeAutocomplete();
}

function closeAutocomplete() {
  const autocomplete = document.getElementById('autocomplete-list');
  if (autocomplete) autocomplete.remove();
}

// Render selected roles as chips
function renderRoles() {
  rolesList.innerHTML = '';
  selectedRoles.forEach(role => {
    const chip = document.createElement('div');
    chip.className = 'role-chip';
    chip.textContent = role;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'role-remove';
    removeBtn.innerHTML = '&times;';
    removeBtn.onclick = function() {
      selectedRoles = selectedRoles.filter(r => r !== role);
      renderRoles();
      renderSuggested();
      updateNextBtn();
    };
    chip.appendChild(removeBtn);
    rolesList.appendChild(chip);
  });
}

// Render suggested roles as buttons (not already selected)
function renderSuggested(filtered = null) {
  suggestedRoles.innerHTML = '';
  const rolesToDisplay = filtered || suggestedRolesArr;
  rolesToDisplay.forEach(role => {
    if (!selectedRoles.includes(role)) {
      const btn = document.createElement('button');
      btn.className = 'suggested-btn';
      btn.textContent = role;
      btn.onclick = function() {
        if (!selectedRoles.includes(role) && selectedRoles.length < 5) {
          selectedRoles.push(role);
          renderRoles();
          renderSuggested();
          updateNextBtn();
        }
      };
      suggestedRoles.appendChild(btn);
    }
  });
}

// Handle role input (add on Enter, filter suggested, show autocomplete)
roleInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const value = roleInput.value.trim();
    if (value && !selectedRoles.includes(value) && selectedRoles.length < 5) {
      selectedRoles.push(value);
      roleInput.value = '';
      renderRoles();
      renderSuggested();
      updateNextBtn();
      closeAutocomplete();
    }
  }
});

roleInput.addEventListener('input', function() {
  const value = roleInput.value.trim().toLowerCase();
  // Filter suggested roles section
  if (!value) {
    renderSuggested();
    closeAutocomplete();
    return;
  }
  const filteredSuggested = suggestedRolesArr.filter(role =>
    role.toLowerCase().includes(value) && !selectedRoles.includes(role)
  );
  renderSuggested(filteredSuggested);

  // Autocomplete: filter all job roles
  const matches = allJobRoles
    .filter(role =>
      role.toLowerCase().includes(value) && !selectedRoles.includes(role)
    )
    .slice(0, 10); // limit results
  if (matches.length > 0) {
    showAutocomplete(matches);
  } else {
    closeAutocomplete();
  }
});

document.addEventListener('click', function(e) {
  if (e.target !== roleInput) closeAutocomplete();
});

function updateNextBtn() {
  if (selectedRoles.length > 0) {
    nextBtn.classList.add('enabled');
    nextBtn.disabled = false;
    nextBtn.style.cursor = "pointer";
  } else {
    nextBtn.classList.remove('enabled');
    nextBtn.disabled = true;
    nextBtn.style.cursor = "not-allowed";
  }
}

// Navigation for back arrow
document.querySelector('.back-arrow').addEventListener('click', function () {
  window.history.back();
});

// Action for Next button (placeholder)
nextttBtn.addEventListener('click', function () {
  
});

// Initial render
renderRoles();
renderSuggested();
updateNextBtn();