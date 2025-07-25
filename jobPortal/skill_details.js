
// List of suggested skills
const suggestedSkillsArr = [
  "Programming languages",
  "C programming",
  "C++ programming",
  "C++/C",
  "C++",
  "C",
  "C#",
  "Assembly Language",
  "MCP",
  "Computer technology"
];

// Extended list of tech skills for search/autocomplete
const allTechSkills = [
  "JavaScript",
  "TypeScript", 
  "Python", 
  "Java", 
  "C", 
  "C++", 
  "C#", 
  "Go", 
  "Rust", 
  "Ruby",
  "PHP", 
  "Swift", 
  "Kotlin", 
  "Scala", 
  "Perl", 
  "Objective-C", 
  "R", 
  "SQL", 
  "Dart",
  "HTML", 
  "CSS", 
  "SASS", 
  "Less", 
  "Shell Scripting", 
  "Bash", 
  "PowerShell", 
  "Assembly Language",
  "MATLAB", 
  "Groovy", 
  "Visual Basic", 
  "Fortran", 
  "COBOL", 
  "PL/SQL", 
  "VHDL", 
  "Verilog",
  "Computer science", 
  "Programming language", 
  "Computer technology", 
  "C programming",
  "C++ programming", 
  "C++/C", 
  "MCP", 
  "Machine Learning", 
  "Deep Learning", 
  "Data Science",
  "Artificial Intelligence", "Cloud Computing", "AWS", "Azure", "Google Cloud", "DevOps",
  "Docker", "Kubernetes", "Linux", "Unix", "Networking", "Blockchain", "React", "Vue",
  "Angular", "Node.js", "Express.js", "Spring Boot", "Flask", "Django", "Laravel", "Symfony"
];

// Default selected skills
let selectedSkills = ["programming languages"];

// DOM elements
const skillsList = document.getElementById('skillsList');
const suggestedSkills = document.getElementById('suggestedSkills');
const skillsInput = document.getElementById('skillsInput');

// Render selected skills as chips
function renderSkills() {
  skillsList.innerHTML = '';
  selectedSkills.forEach(skill => {
    const chip = document.createElement('div');
    chip.className = 'skill-chip';
    chip.textContent = skill;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'skill-remove';
    removeBtn.innerHTML = '&times;';
    removeBtn.onclick = function() {
      selectedSkills = selectedSkills.filter(s => s !== skill);
      renderSkills();
    };
    chip.appendChild(removeBtn);
    skillsList.appendChild(chip);
  });
}

// Render suggested skills as buttons (not already selected)
function renderSuggested(filtered = null) {
  suggestedSkills.innerHTML = '';
  const skillsToDisplay = filtered || suggestedSkillsArr;
  skillsToDisplay.forEach(skill => {
    if (!selectedSkills.includes(skill)) {
      const btn = document.createElement('button');
      btn.className = 'suggested-btn';
      btn.textContent = skill;
      btn.onclick = function() {
        if (!selectedSkills.includes(skill)) {
          selectedSkills.push(skill);
          renderSkills();
          renderSuggested();
        }
      };
      suggestedSkills.appendChild(btn);
    }
  });
}

// Show autocomplete dropdown for tech skills
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
    autocomplete.style.width = skillsInput.offsetWidth + 'px';
    autocomplete.style.maxHeight = '150px';
    autocomplete.style.overflowY = 'auto';
    autocomplete.style.left = skillsInput.getBoundingClientRect().left + 'px';
    autocomplete.style.top = (skillsInput.getBoundingClientRect().bottom + window.scrollY) + 'px';
    document.body.appendChild(autocomplete);
  }
  autocomplete.innerHTML = '';
  matches.forEach(skill => {
    if (!selectedSkills.includes(skill)) {
      const item = document.createElement('div');
      item.style.padding = '8px 14px';
      item.style.cursor = 'pointer';
      item.style.fontSize = '1rem';
      item.onmousedown = function(e) {
        e.preventDefault();
        selectedSkills.push(skill);
        renderSkills();
        renderSuggested();
        skillsInput.value = '';
        closeAutocomplete();
      };
      item.textContent = skill;
      autocomplete.appendChild(item);
    }
  });
  if (matches.length === 0) closeAutocomplete();
}

function closeAutocomplete() {
  const autocomplete = document.getElementById('autocomplete-list');
  if (autocomplete) autocomplete.remove();
}

// Handle skill input (add on Enter, filter suggested, show tech skills)
skillsInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const value = skillsInput.value.trim();
    if (value && !selectedSkills.includes(value)) {
      selectedSkills.push(value);
      skillsInput.value = '';
      renderSkills();
      renderSuggested();
      closeAutocomplete();
    }
  }
});

skillsInput.addEventListener('input', function() {
  const value = skillsInput.value.trim().toLowerCase();
  // Filter suggested skills section
  if (!value) {
    renderSuggested();
    closeAutocomplete();
    return;
  }
  const filteredSuggested = suggestedSkillsArr.filter(skill =>
    skill.toLowerCase().includes(value) && !selectedSkills.includes(skill)
  );
  renderSuggested(filteredSuggested);

  // Autocomplete: filter all tech skills
  const matches = allTechSkills
    .filter(skill =>
      skill.toLowerCase().includes(value) && !selectedSkills.includes(skill)
    )
    .slice(0, 10); // limit results
  if (matches.length > 0) {
    showAutocomplete(matches);
  } else {
    closeAutocomplete();
  }
});

document.addEventListener('click', function(e) {
  if (e.target !== skillInput) closeAutocomplete();
});

// Navigation for back arrow
document.querySelector('.back-arrow').addEventListener('click', function () {
  window.history.back();
});

// Action for Next button (placeholder)
document.querySelector('.next-btn').addEventListener('click', function () {
  
});

// Initial render
renderSkills();
renderSuggested();