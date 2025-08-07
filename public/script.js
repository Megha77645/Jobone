document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const dropdownToggles = document.querySelectorAll('.pages-dropdown-toggle');
  checkAuthStatus();


  // Toggle mobile menu
  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  // Handle dropdowns on mobile
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const dropdown = this.parentElement;
        dropdown.classList.toggle('active');

        // Close other open dropdowns
        dropdownToggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            otherToggle.parentElement.classList.remove('active');
          }
        });
      }
    });
  });

  // Close menu when clicking outside on mobile
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 992 && navMenu.classList.contains('active')) {
      if (!e.target.closest('.header-container') && !e.target.closest('.hamburger')) {
        navMenu.classList.remove('active');

        // Close all dropdowns
        dropdownToggles.forEach(toggle => {
          toggle.parentElement.classList.remove('active');
        });
      }
    }
  });

  // Close dropdowns when clicking a link
  const dropdownLinks = document.querySelectorAll('.pages-dropdown-content a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 992) {
        navMenu.classList.remove('active');
        this.closest('.pages-dropdown').classList.remove('active');
      }
    });
  });
});
// async function checkAuthStatus() {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     // User is not logged in
//     return;
//   }
//   try {
//     const response = await fetch('/api/auth/user', {
//       headers: {
//         'Authorization': token
//       }
//     });
//     if (response.ok) {
//       const data = await response.json();
//       // User is logged in
//       console.log('User data:', data.user);
//     } else {
//       // Token is invalid or expired
//       console.log('User is not authenticated');
//     }
//   } catch (error) {
//     console.error('Error checking auth status:', error);
//   }
// }
// function updateUIForLoggedInUser(user) {
//  const loginBtn = document.querySelector('.login-btn');
//  const registerBtn = document.querySelector('.register-btn');
//  if(loginBtn) {
//   loginBtn.innerHTML = '<a href="#">logout</a>';
//   document.getElementById("logoutBtn").addEventListener("click", function() {
//     preventDefault();
//     logout();
//   });
  
// }
const jobs = [
  {
    id: 1,
    title: "Software Engineer (Android), Libraries",
    company: "Segment",
    location: "London, UK",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyqp0CSoYOUX1QUT--ZLADDyr4_oEsAoE9f_ueNYuRUwfu-vYY",
    time: "11 hours ago",
    posted: "Posted 1 hour ago",
    expiration: "April 06, 2021",
    salary: "$35k - $45k",
    tags: [
      { text: "Full Time", class: "fulltime" },
      { text: "Private", class: "private" },
      { text: "Urgent", class: "urgent" }
    ],
    apply_url: "upload_cv.html",
    description: `As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent and help to design beautiful interface.`,
    responsibilities: [
      "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
      "Work with BAs, product managers and tech teams to lead the Product Design"
    ],
    skills: [
      "You have at least 3 years’ experience working as a Product Designer.",
      "You have experience using Sketch and InVision or Framer X",
      "You have some previous experience working in an agile environment — Think two-week sprints.",
      "You are familiar using Jira and Confluence in your workflow"
    ]
  },
  {
    id: 2,
    title: "Recruiting Coordinator",
    company: "Catalyst",
    location: "London, UK",
    logo: "https://www.remotejobs.lk/wp-content/uploads/2020/11/catalyst-logo-150x150.jpg",
    time: "8 hours ago",
    posted: "Posted 2 hours ago",
    expiration: "June 18, 2025",
    salary: "$32k - $40k",
    tags: [
      { text: "Freelancer", class: "freelancer" },
      { text: "Private", class: "private" },
      { text: "Urgent", class: "urgent" }
    ],
    apply_url: "upload_cv.html",
    description: `As a Recruiting Coordinator, you'll support the talent acquisition team in scheduling interviews, communicating with candidates, and ensuring a seamless hiring process.`,
    responsibilities: [
      "Schedule and coordinate interviews between candidates and hiring managers.",
      "Communicate effectively with candidates and internal stakeholders.",
      "Maintain accurate records of candidate interactions and interview feedback."
    ],
    skills: [
      "Bachelor’s degree or equivalent work experience.",
      "Excellent organizational and communication skills.",
      "Experience with applicant tracking systems (ATS) preferred."
    ]
  },
  {
    id: 3,
    title: "Product Manager, Studio",
    company: "Invision",
    location: "London, UK",
    logo: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/37feba98-c295-4fdf-991e-523d025a0e7c.png?w=100&q=50",
    time: "7 hours ago",
    posted: "Posted 4 hours ago",
    expiration: "June 25, 2025",
    salary: "$38k - $50k",
    tags: [
      { text: "Part Time", class: "parttime" },
      { text: "Private", class: "private" },
      { text: "Urgent", class: "urgent" }
    ],
    apply_url: "upload_cv.html",
    description: `As a Product Manager, you will drive the vision, strategy, and roadmap for Invision’s Studio product. You will work with cross-functional teams to deliver features.`,
    responsibilities: [
      "Define product vision and strategy for Studio.",
      "Work closely with design, engineering, and marketing teams.",
      "Gather and prioritize requirements from stakeholders and users."
    ],
    skills: [
      "Proven experience as a Product Manager.",
      "Strong analytical and problem-solving skills.",
      "Excellent communication and leadership abilities."
    ]
  },
  {
    id: 4,
    title: "Senior Product Designer",
    company: "Upwork",
    location: "London, UK",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYDlzYS43GEt4IBZpdiBuDP2WIShC2z92dtOAI3qJzO3E_Xig",
    time: "6 hours ago",
    posted: "Posted 2 hours ago",
    expiration: "June 30, 2025",
    salary: "$45k - $60k",
    tags: [
      { text: "Temporary", class: "temporary" },
      { text: "Private", class: "private" },
      { text: "Urgent", class: "urgent" }
    ],
    apply_url: "upload_cv.html",
    description: `As a Senior Product Designer at Upwork, you will lead UX initiatives and collaborate with cross-functional teams to deliver intuitive and impactful product experiences.`,
    responsibilities: [
      "Lead design projects from concept to launch.",
      "Collaborate with product managers, developers, and stakeholders.",
      "Advocate for the user through research and data-driven insights."
    ],
    skills: [
      "5+ years’ experience in product design.",
      "Expertise in Figma, Sketch, or similar tools.",
      "Strong portfolio showcasing end-to-end product design."
    ]
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Spotify",
    location: "London, UK",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rLGNA_B4JtqNUc3evU2N_Et5gHuP55H9uw&s",
    time: "9 hours ago",
    posted: "Posted 3 hours ago",
    expiration: "July 10, 2025",
    salary: "$50k - $65k",
    tags: [
      { text: "Full Time", class: "fulltime" },
      { text: "Urgent", class: "urgent" },
      { text: "Private", class: "private" }
    ],
    apply_url: "upload_cv.html",
    description: `Spotify is looking for a Data Analyst to support our business intelligence team. You will help to analyze user data, generate reports, and provide actionable insights.`,
    responsibilities: [
      "Analyze and interpret complex data sets.",
      "Create reports and dashboards for business teams.",
      "Work with cross-functional stakeholders to identify opportunities."
    ],
    skills: [
      "Experience with SQL and data visualization tools.",
      "Strong analytical and critical thinking skills.",
      "Excellent communication and presentation abilities."
    ]
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Figma",
    location: "London, UK",
    logo: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fskill_page%2F34403%2Flogo%2Foptimized%2Fui-24b9a12e4e385375647fd19e9b5ebc2d.png",
    time: "10 hours ago",
    posted: "Posted 30 minutes ago",
    expiration: "July 15, 2025",
    salary: "$40k - $55k",
    tags: [
      { text: "Part Time", class: "parttime" },
      { text: "Private", class: "private" }
    ],
    apply_url: "upload_cv.html",
    description: `Join Figma as a UI/UX Designer. You will work with product teams to design compelling user interfaces and experiences that delight our customers globally.`,
    responsibilities: [
      "Design intuitive, beautiful digital user experiences.",
      "Work closely with engineers and product managers.",
      "Conduct usability tests and implement feedback."
    ],
    skills: [
      "2+ years of UI/UX design experience.",
      "Proficiency in Figma, Sketch, or Adobe XD.",
      "Strong portfolio of user-centered design projects."
    ]
  }
];

// --- The rest of your code remains the same ---

function renderJobCards() {
  const grid = document.getElementById('jobsGrid');
  grid.innerHTML = jobs.map(job => `
    <div class="job-card" data-id="${job.id}">
      <div class="job-card-header">
        <img src="${job.logo}" alt="${job.company} logo" class="job-logo"/>
        <div>
          <div class="job-title">${job.title}</div>
        </div>
        <button class="bookmark-btn" title="Save">&#x1F516;</button>
      </div>
      <div class="job-info-row">
        <span><svg width="18" height="18" fill="none" style="vertical-align:middle"><path d="M6 7V6a3 3 0 1 1 6 0v1" stroke="#7c7c7c" stroke-width="1.4" stroke-linecap="round"/><rect x="3.5" y="7" width="11" height="7.5" rx="2.5" stroke="#7c7c7c" stroke-width="1.4"/></svg> ${job.company}</span>
        <span><svg width="18" height="18" fill="none" style="vertical-align:middle"><path d="M9 15c-3.5-3.9-5.25-6.3-5.25-8.25A4.25 4.25 0 0 1 9 2.5a4.25 4.25 0 0 1 5.25 4.25C14.25 8.7 12.5 11.1 9 15Z" stroke="#7c7c7c" stroke-width="1.4"/></svg> ${job.location}</span>
        <span><svg width="18" height="18" fill="none" style="vertical-align:middle"><circle cx="9" cy="9" r="7.5" stroke="#7c7c7c" stroke-width="1.4"/><path d="M9 4.5v5l3.5 2" stroke="#7c7c7c" stroke-width="1.4" stroke-linecap="round"/></svg> ${job.time}</span>
        <span class="job-salary"><svg width="18" height="18" fill="none" style="vertical-align:middle"><path d="M4.5 9a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM2.5 9h13M9 13.5V4.5" stroke="#7c7c7c" stroke-width="1.4"/></svg> ${job.salary}</span>
      </div>
      <div class="job-tags">
        ${job.tags.map(tag => `<span class="job-tag ${tag.class}">${tag.text}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderJobModal(job) {
  return `
    <div>
      <div class="job-modal-header">
        <div class="job-modal-header-left">
          <img src="${job.logo}" class="job-modal-logo" alt="${job.company} logo" />
          <div>
            <div class="job-modal-title">${job.title}</div>
            <div class="job-modal-info">
              <span>
                <svg width="20" height="20" fill="none"><path d="M6 7V6a3 3 0 1 1 6 0v1" stroke="#7c7c7c" stroke-width="1.4" stroke-linecap="round"/><rect x="3.5" y="7" width="11" height="7.5" rx="2.5" stroke="#7c7c7c" stroke-width="1.4"/></svg>
                ${job.company}
              </span>
              <span>
                <svg width="18" height="18" fill="none"><path d="M9 15c-3.5-3.9-5.25-6.3-5.25-8.25A4.25 4.25 0 0 1 9 2.5a4.25 4.25 0 0 1 5.25 4.25C14.25 8.7 12.5 11.1 9 15Z" stroke="#7c7c7c" stroke-width="1.4"/></svg>
                ${job.location}
              </span>
              <span>
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="#7c7c7c" stroke-width="1.4"/><path d="M9 4.5v5l3.5 2" stroke="#7c7c7c" stroke-width="1.4" stroke-linecap="round"/></svg>
                ${job.time}
              </span>
              <span>
                <svg width="18" height="18" fill="none"><path d="M4.5 9a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM2.5 9h13M9 13.5V4.5" stroke="#7c7c7c" stroke-width="1.4"/></svg>
                ${job.salary}
              </span>
            </div>
            <div class="job-modal-tags">
              ${job.tags.map(tag => `<span class="job-tag ${tag.class}">${tag.text}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="job-modal-header-right">
          <a href="${job.apply_url}" class="job-modal-apply-btn" target="_blank">Apply For Job</a>
          <button class="job-modal-bookmark">&#x1F516;</button>
        </div>
      </div>
      <div class="job-modal-body-row">
        <div class="job-modal-body-left">
          <div class="job-modal-section">
            <div class="job-modal-section-title">Job Description</div>
            <div class="job-modal-section-content">${job.description}</div>
          </div>
          <div class="job-modal-section">
            <div class="job-modal-section-title">Key Responsibilities</div>
            <ul class="job-modal-list">${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
          </div>
          <div class="job-modal-section">
            <div class="job-modal-section-title">Skill & Experience</div>
            <ul class="job-modal-list">${job.skills.map(s => `<li>${s}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="job-modal-body-right">
          <div class="job-modal-overview-box">
            <div class="job-modal-overview-title">Job Overview</div>
            <div class="job-modal-overview-row">
              <svg width="24" height="24" fill="none"><rect x="4" y="6" width="16" height="14" rx="2" stroke="#3b82f6" stroke-width="1.6"/><path d="M8 2v4" stroke="#3b82f6" stroke-width="1.6"/><path d="M16 2v4" stroke="#3b82f6" stroke-width="1.6"/></svg>
              <span>
                <strong>Date Posted:</strong><br>
                ${job.posted}
              </span>
            </div>
            <div class="job-modal-overview-row">
              <svg width="24" height="24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#3b82f6" stroke-width="1.6"/><path d="M12 6v6l4 2" stroke="#3b82f6" stroke-width="1.6"/></svg>
              <span>
                <strong>Expiration date:</strong><br>
                ${job.expiration}
              </span>
            </div>
            <div class="job-modal-overview-row">
              <svg width="24" height="24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#3b82f6" stroke-width="1.6"/><circle cx="12" cy="12" r="3" stroke="#3b82f6" stroke-width="1.6"/></svg>
              <span>
                <strong>Location:</strong><br>
                ${job.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function findJobs() {
  const jobTitle = document.getElementById('jobTitle').value.trim();
  const city = document.getElementById('city').value.trim();

  // Encode the values to safely include in URL
  const queryString = `?job=${encodeURIComponent(jobTitle)}&city=${encodeURIComponent(city)}`;

  // Redirect with parameters
  window.location.href = 'findjob.html' + queryString;
}

function setupModalLogic() {
  const overlay = document.getElementById('jobModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  const content = document.getElementById('modalContent');
  document.getElementById('jobsGrid').addEventListener('click', function (e) {
    let card = e.target.closest('.job-card');
    if (card) {
      const jobId = +card.getAttribute('data-id');
      const job = jobs.find(j => j.id === jobId);
      if (job) {
        content.innerHTML = renderJobModal(job);
        overlay.classList.add('active');
        document.body.classList.add('modal-open');
      }
    }
  });
  closeBtn.onclick = () => overlay.classList.remove('active');
  document.body.classList.remove('modal-open');
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderJobCards();
  setupModalLogic();
}); 2








//Feedback Akanksha
document.addEventListener("DOMContentLoaded", function () {
  const row = document.querySelector(".feedback-row");
  const containers = document.querySelectorAll(".feedback-container");
  const gap = 20;
  let index = 0;

  function slide() {
    const screenWidth = window.innerWidth;
    const showCount = screenWidth <= 768 ? 1 : 2;
    const itemWidth = containers[0].offsetWidth + gap;
    const maxIndex = containers.length - showCount;

    index = index + showCount > maxIndex ? 0 : index + showCount;
    row.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  setInterval(slide, 5000);
});









document.addEventListener("DOMContentLoaded", function () {
  const row = document.querySelector(".feedback-row");
  const containers = document.querySelectorAll(".feedback-container");
  const gap = 20;
  let index = 0;

  function slide(showCount) {
    const itemWidth = containers[0].offsetWidth + gap;
    const maxIndex = containers.length - showCount;
    row.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  function autoSlide() {
    const screenWidth = window.innerWidth;
    const showCount = screenWidth <= 768 ? 1 : 2;
    const maxIndex = containers.length - showCount;

    index = index + showCount > maxIndex ? 0 : index + showCount;
    slide(showCount);
  }

  // Auto slide every 5 seconds
  let interval = setInterval(autoSlide, 8000);

  // Arrows
  document.querySelector(".left-arrow").addEventListener("click", function () {
    clearInterval(interval);
    const screenWidth = window.innerWidth;
    const showCount = screenWidth <= 768 ? 1 : 2;
    const maxIndex = containers.length - showCount;

    index = index - showCount < 0 ? maxIndex : index - showCount;
    slide(showCount);
  });

  document.querySelector(".right-arrow").addEventListener("click", function () {
    clearInterval(interval);
    const screenWidth = window.innerWidth;
    const showCount = screenWidth <= 768 ? 1 : 2;
    const maxIndex = containers.length - showCount;

    index = index + showCount > maxIndex ? 0 : index + showCount;
    slide(showCount);
  });

  window.addEventListener("resize", () => {
    slide(window.innerWidth <= 768 ? 1 : 2);
  });
});
















//Footer js
document.addEventListener("DOMContentLoaded", function () {
  var scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.pointerEvents = "auto";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.pointerEvents = "none";
    }
  });
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  scrollBtn.style.opacity = "0";
  scrollBtn.style.pointerEvents = "none";
});