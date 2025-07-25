document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const dropdownToggles = document.querySelectorAll('.pages-dropdown-toggle');

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





    // --- ALL YOUR JOB DATA BELOW HERE ---
    const jobs = [
      {
        id: 1,
        company: "Segment",
        logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyqp0CSoYOUX1QUT--ZLADDyr4_oEsAoE9f_ueNYuRUwfu-vYY",
        experience: "2 Year",
        title: "Software Engineer (Android), Libraries",
        companyMeta: "Segment",
        location: "London, UK",
        time: "11 hours ago",
        postedAt: "2025-07-14T10:00:00Z",
        salary: "$35k - $45k",
        badges: ["Full Time", "Private", "Urgent"],
        category: "Engineering",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas",
        responsibilities: `
<ul>
  <li>Design and implement reusable Android libraries used across multiple apps.</li>
  <li>Collaborate with product managers and designers to understand business needs.</li>
  <li>Write clean, maintainable, and scalable code with a strong focus on performance.</li>
  <li>Review code, mentor junior engineers, and enforce best practices.</li>
  <li>Participate in sprint planning, architecture discussions, and system design.</li>
</ul>
`,
      },
      {
        id: 2,
        company: "Catalyst",
        logo: "https://www.remotejobs.lk/wp-content/uploads/2020/11/catalyst-logo-150x150.jpg",
        experience: "2 Year",
        title: "Recruiting Coordinator",
        companyMeta: "Catalyst",
        location: "Canada",
        time: "11 hours ago",
        postedAt: "2025-08-13T10:00:00Z",
        salary: "$45k - $55k",
        badges: ["Freelancer", "Private", "Urgent"],
        category: "Management",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
        responsibilities: `
<ul>
  <li>Schedule and coordinate candidate interviews across multiple time zones.</li>
  <li>Maintain applicant tracking systems and update candidate statuses.</li>
  <li>Communicate with candidates to ensure a positive candidate experience.</li>
  <li>Collaborate with hiring managers to understand hiring needs and timelines.</li>
  <li>Generate reports on recruiting metrics like time-to-fill and candidate sources.</li>
</ul>
`,
      },
      {
        id: 3,
        company: "Upwork",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYDlzYS43GEt4IBZpdiBuDP2WIShC2z92dtOAI3qJzO3E_Xig",
        experience: "2 Year",
        title: "Senior Product Designer",
        companyMeta: "Upwork",
        location: "Kolkata",
        time: "11 hours ago",
        postedAt: "2025-07-12T10:00:00Z",
        salary: "$30k - $45k",
        badges: ["Temporary", "Private", "Urgent"],
        category: "Design",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
        responsibilities: `
<ul>
  <li>Lead end-to-end design process from research to prototyping and testing.</li>
  <li>Create intuitive interfaces aligned with user goals and business objectives.</li>
  <li>Develop and maintain a scalable design system across platforms.</li>
  <li>Work closely with engineers to ensure high-quality implementation of designs.</li>
  <li>Mentor junior designers and promote a culture of innovation.</li>
</ul>
`,
      },
      {
        id: 4,
        company: "Medium",
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-5.png&w=64&q=75",
        experience: "3 Year",
        title: "Senior Full Stack Engineer, Creator Success",
        companyMeta: "Medium",
        location: "Banglore",
        time: "11 hours ago",
        postedAt: "2025-07-1T10:00:00Z",
        salary: "$55k - $65k",
        badges: ["Full Time", "Private", "Urgent"],
        category: "Engineering",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
        responsibilities: `
<ul>
  <li>Develop full-stack web applications supporting creator growth and engagement.</li>
  <li>Implement features using React, Node.js, and cloud infrastructure (AWS/GCP).</li>
  <li>Ensure system scalability and performance through optimization techniques.</li>
  <li>Lead code reviews and contribute to team-wide engineering standards.</li>
  <li>Work in an agile team and collaborate across departments.</li>
</ul>
`,
      },
      {
        id: 5,
        company: "Figma",
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-6.png&w=64&q=75",
        experience: "4 Year",
        title: "Software Engineer (Android), Libraries",
        companyMeta: "Figma",
        location: "Nepal",
        time: "11 hours ago",
        postedAt: "2025-06-14T10:00:00Z",
        salary: "$25k - $35k",
        badges: ["Freelancer", "Urgent"],
        category: "Engineering",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
        responsibilities: `
<ul>
  <li>Build modular Android libraries for Figma’s mobile ecosystem.</li>
  <li>Ensure consistency and reusability across Android features.</li>
  <li>Write unit and integration tests to maintain high code coverage.</li>
  <li>Work with design teams to refine UI/UX for Android apps.</li>
  <li>Contribute to architectural decisions and codebase evolution.</li>
</ul>
`,
      },
      {
        id: 6,
        company: "Catalyst",
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-2.png&w=64&q=75",
        experience: "4 Year",
        title: "Recruiting Coordinator",
        companyMeta: "Catalyst",
        location: "Uk",
        time: "11 hours ago",
        postedAt: "2025-06-13T10:00:00Z",
        salary: "$30k - $40k",
        badges: ["Temporary", "Private"],
        category: "Management",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
        responsibilities: `
<ul>
  <li>Coordinate candidate sourcing, screening, and interview scheduling.</li>
  <li>Ensure timely feedback collection and maintain communication flow.</li>
  <li>Prepare onboarding materials and assist with HR documentation.</li>
  <li>Use ATS software to track progress and generate hiring reports.</li>
  <li>Maintain confidentiality of applicant and employee information.</li>
</ul>
`,
      },
      {
        id: 7,
        company: "Invision",
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-3.png&w=64&q=75",
        experience: "5 Year",
        title: "Product Manager, Studio",
        companyMeta: "Invision",
        location: "Thailand",
        time: "11 hours ago",
        postedAt: "2025-05-14T10:00:00Z",
        salary: "$65k - $75k",
        badges: ["Full Time", "Urgent"],
        category: "Management",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
        responsibilities: `
<ul>
  <li>Define product vision and roadmap for the Studio product line.</li>
  <li>Conduct market and competitor research to identify product gaps.</li>
  <li>Write detailed product requirements and user stories.</li>
  <li>Collaborate with design and engineering to ensure timely delivery.</li>
  <li>Track KPIs and use analytics to guide future improvements.</li>
</ul>
`,
      },
      {
        id: 8,
        company: "Figma",
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-6.png&w=64&q=75",
        experience: "5 Year",
        title: "Web Developer",
        companyMeta: "Figma",
        location: "USA",
        time: "11 hours ago",
        postedAt: "2025-07-11T10:00:00Z",
        salary: "$35k - $45k",
        badges: ["Part Time"],
        category: "Engineering",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
        responsibilities: `
<ul>
  <li>Develop and maintain responsive websites using HTML, CSS, JavaScript.</li>
  <li>Work with content, marketing, and design teams to implement web pages.</li>
  <li>Ensure site performance, accessibility, and cross-browser compatibility.</li>
  <li>Optimize assets and implement SEO best practices.</li>
  <li>Collaborate with backend developers to integrate APIs where needed.</li>
</ul>
`,
      },
      {
        id: 9,
        company: "Upwork",
        logo: "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-4.png&w=64&q=75",
        experience: "Fresh",
        title: "Senior Product Designer",
        companyMeta: "Upwork",
        location: "UK",
        time: "11 hours ago",
        postedAt: "2025-07-14T10:00:00Z",
        salary: "$50k - $60k",
        badges: ["Full Time"],
        category: "Design",
        description:
          "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
        responsibilities: `
<ul>
  <li>Lead design efforts for core marketplace experiences.</li>
  <li>Conduct user interviews and usability testing sessions regularly.</li>
  <li>Design wireframes, mockups, and interactive prototypes using Figma.</li>
  <li>Partner with product and engineering to balance feasibility and design.</li>
  <li>Contribute to and evolve the existing design system.</li>
</ul>
`,
      },
    ];

    const badgeClass = {
      "Full Time": "full-time",
      "Freelancer": "freelancer",
      "Temporary": "temporary",
      "Part Time": "part-time",
      "Private": "private",
      "Urgent": "urgent",
      "Temp": "temp",
      "Default": "default",
    };

    const jobList = document.getElementById("jp-job-list");
    const modal = document.getElementById("jp-job-modal");
    const modalContent = document.getElementById("jp-modal-job-content");
    const closeModal = document.getElementById("jp-close-modal");
    const jobCount = document.getElementById("jp-job-count");
    let savedJobs = JSON.parse(localStorage.getItem("jp-savedJobs") || "[]");

    // Search/filter form elements
    const keywordInput = document.getElementById("jp-keyword-search");
    const locationInput = document.getElementById("jp-location-search");
    const categorySelect = document.getElementById("jp-category");
    const typeFreelancer = document.getElementById("jp-type-freelancer");
    const typeFulltime = document.getElementById("jp-type-fulltime");
    const typeParttime = document.getElementById("jp-type-parttime");
    const typeTemporary = document.getElementById("jp-type-temporary");

    // Date posted
    const datePostedGroup = document.getElementById('jp-dateposted-group');
    let datePostedValue = "All";
    datePostedGroup.addEventListener('change', (e) => {
      if (e.target.name === "jp-dateposted") {
        datePostedValue = e.target.value;
        renderJobs();
      }
    });

    // Experience level
    const expGroup = document.getElementById('jp-experience-group');
    const expMore = document.getElementById('jp-experience-more');
    const expViewMore = document.getElementById('jp-experience-viewmore');
    expViewMore.addEventListener('click', () => {
      expMore.style.display = expMore.style.display === 'none' ? 'flex' : 'none';
      expViewMore.textContent = expMore.style.display === 'none' ? '+ View More' : '- View Less';
    });

    // Tag selection
    let selectedTags = [];
    const tagGroup = document.getElementById('jp-tag-group');
    tagGroup.querySelectorAll('.jp-tag').forEach(tag => {
      tag.addEventListener('click', function () {
        const tagVal = this.dataset.tag;
        if (selectedTags.includes(tagVal)) {
          selectedTags = selectedTags.filter(t => t !== tagVal);
          this.style.background = '';
          this.style.color = '';
        } else {
          selectedTags.push(tagVal);
          this.style.background = '#2476fe';
          this.style.color = '#fff';
        }
        renderJobs();
      });
    });

    // Get selected job types
    function getSelectedTypes() {
      let arr = [];
      if (typeFreelancer.checked) arr.push("Freelancer");
      if (typeFulltime.checked) arr.push("Full Time");
      if (typeParttime.checked) arr.push("Part Time");
      if (typeTemporary.checked) arr.push("Temporary");
      return arr;
    }

    // Get selected experience levels
    function getSelectedExperience() {
      let arr = [];
      expGroup.querySelectorAll('input[type="checkbox"]').forEach(inp => { if (inp.checked) arr.push(inp.value); });
      expMore.querySelectorAll('input[type="checkbox"]').forEach(inp => { if (inp.checked) arr.push(inp.value); });
      return arr;
    }

    // Get selected salary
    // const salarySlider = document.getElementById("jp-salary-slider");
    // function getSalaryMax() {
    //   return parseInt(salarySlider.value || 20000, 10);
    // }

    // Filter jobs based on sidebar
    function getFilteredJobs() {
      let keyword = keywordInput.value.toLowerCase();
      let location = locationInput.value.toLowerCase();
      let category = categorySelect.value;
      let selectedTypes = getSelectedTypes();
      let experience = getSelectedExperience();
      // let salaryMax = getSalaryMax();
      let datePosted = datePostedValue;
      let tags = selectedTags;

      return jobs.filter((job) => {
        // Keyword in title or company
        let matchKeyword =
          !keyword ||
          job.title.toLowerCase().includes(keyword) ||
          job.company.toLowerCase().includes(keyword);

        // Location
        let matchLocation =
          !location || job.location.toLowerCase().includes(location);

        // Category
        let matchCategory =
          category === "Choose a category" ||
          (job.category && job.category === category);

        // Job type
        let matchType =
          selectedTypes.length === 0 ||
          selectedTypes.some((type) => job.badges.includes(type));

        // Tags (simulate: check if any tag matches job.title, job.category, or job.description)
        let matchTags = tags.length === 0 || tags.some(tag =>
          (job.title && job.title.toLowerCase().includes(tag.toLowerCase())) ||
          (job.category && job.category.toLowerCase().includes(tag.toLowerCase())) ||
          (job.description && job.description.toLowerCase().includes(tag.toLowerCase()))
        );

        // Experience (simulate: check in description, not real field)
        let matchExp = experience.length === 0 || experience.includes(job.experience);

        // Salary (simulate: parse job.salary)
        // let matchSalary = true;
        // if (job.salary) {
        //   let nums = job.salary.match(/\$([\d,]+)/g);
        //   if (nums) {
        //     let max = Math.max(...nums.map(n => parseInt(n.replace(/\$|,/g, ''))));
        //     matchSalary = max <= salaryMax;
        //   }
        // }

        // Date posted (not implemented)
        // Date posted
        let matchDate = true;
        if (job.postedAt && datePosted !== "All") {
          const now = new Date();
          const postedDate = new Date(job.postedAt);
          let hoursAgo = (now - postedDate) / (1000 * 60 * 60); // difference in hours

          if (datePosted === "Last Hour" && hoursAgo > 1) matchDate = false;
          else if (datePosted === "Last 24 Hour" && hoursAgo > 24) matchDate = false;
          else if (datePosted === "Last 7 Days" && hoursAgo > 24 * 7) matchDate = false;
          else if (datePosted === "Last 14 Days" && hoursAgo > 24 * 14) matchDate = false;
          else if (datePosted === "Last 30 Days" && hoursAgo > 24 * 30) matchDate = false;
        }

        return matchKeyword && matchLocation && matchCategory && matchType && matchTags && matchExp  && matchDate;
      });
    }

    // Render job cards
    function renderJobs() {
      const filteredJobs = getFilteredJobs();

  const sortDropdown = document.getElementById("jp-sort-dropdown");
  const sortBy = sortDropdown.value;

  if (sortBy === "latest") {
    filteredJobs.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
  } else if (sortBy === "salary") {
    filteredJobs.sort((a, b) => {
      const aMax = getSalaryValue(a.salary);
      const bMax = getSalaryValue(b.salary);
      return bMax - aMax;
    });
  } else if (sortBy === "company") {
    filteredJobs.sort((a, b) => a.company.localeCompare(b.company));
  }


      jobCount.textContent = filteredJobs.length;
      jobList.innerHTML = "";
      filteredJobs.forEach((job) => {
        const card = document.createElement("div");
        card.className = "jp-job-card";
        card.dataset.id = job.id;

        // Bookmark
        const bookmark = document.createElement("span");
        bookmark.className = "jp-bookmark" + (savedJobs.includes(job.id) ? " jp-saved" : "");
        bookmark.innerHTML = "&#10023;";
        bookmark.title = savedJobs.includes(job.id) ? "Remove from saved" : "Save job";
        bookmark.onclick = (e) => {
          e.stopPropagation();
          toggleBookmark(job.id, bookmark);
        };

        // Logo
        const logo = document.createElement("div");
        logo.className = "jp-job-logo";
        const img = document.createElement("img");
        img.src = job.logo;
        img.alt = job.company + " logo";
        img.className = "jp-logo-img";
        logo.appendChild(img);

        // Info
        const info = document.createElement("div");
        info.className = "jp-job-info";
        // Job Title
        const jobTitle = document.createElement("div");
        jobTitle.className = "jp-job-title";
        jobTitle.textContent = job.title;
        // Meta
        const jobMeta = document.createElement("div");
        jobMeta.className = "jp-job-meta";
        jobMeta.innerHTML = `
          <span><span>&#128188;</span> ${job.companyMeta}</span>
          <span><span>&#128205;</span> ${job.location}</span>
          <span><span>&#128340;</span> ${job.time}</span>
          // <span><span>&#128181;</span> ${job.salary}</span>
        `;
        // Badges
        const jobBadges = document.createElement("div");
        jobBadges.className = "jp-job-badges";
        job.badges.forEach((b) => {
          const badge = document.createElement("span");
          badge.className = "jp-badge " + (badgeClass[b] || "default");
          badge.textContent = b;
          jobBadges.appendChild(badge);
        });

        info.appendChild(jobTitle);
        info.appendChild(jobMeta);
        info.appendChild(jobBadges);

        card.appendChild(logo);
        card.appendChild(info);
        card.appendChild(bookmark);

        card.onclick = () => showJobModal(job);

        jobList.appendChild(card);
      });

      // Show "no jobs" message if none
      if (filteredJobs.length === 0) {
        jobList.innerHTML = `<div style="padding:30px; text-align:center; color:#888;">No jobs found for your search.</div>`;
      }
    }

    // Bookmark toggle
    function toggleBookmark(id, element) {
      if (savedJobs.includes(id)) {
        savedJobs = savedJobs.filter((j) => j !== id);
        element.classList.remove("jp-saved");
        element.title = "Save job";
      } else {
        savedJobs.push(id);
        element.classList.add("jp-saved");
        element.title = "Remove from saved";
      }
      localStorage.setItem("jp-savedJobs", JSON.stringify(savedJobs));
    }

    // Show modal with job details
    function showJobModal(job) {
      modalContent.innerHTML = `
        <div class="jp-job-title">${job.title}</div>
        <div class="jp-job-meta">
          <span><span>&#128188;</span> ${job.companyMeta}</span>
          <span><span>&#128205;</span> ${job.location}</span>
          <span><span>&#128340;</span> ${job.time}</span>
          // <span><span>&#128181;</span> ${job.salary}</span>
        </div>
        <div class="jp-job-badges">
          ${job.badges.map((b) => `<span class="jp-badge ${badgeClass[b] || "default"}">${b}</span>`).join("")}
        </div>
        <h3 class="jp-job-desc-heading">Job Description</h3>
        <div class="jp-job-description">${job.description}</div>
        <h3 class="jp-job-desc-heading">Key Responsibilities</h3>
        <div class="jp-job-responsibilities">${job.responsibilities}</div>
        <h3 class="jp-job-desc-heading">Share This Job</h3>
        <div class="jp-modal-social-icons">
          <a href="https://www.facebook.com/" class="facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i> Facebook</a>
          <a href="https://www.Whatsapp.com/" class="Whatsapp" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> WhatsApp</a>
          <a href="https://www.linkedin.com/" class="linkedin" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> Linkedin</a>
        </div>
      `;
      modal.style.display = "flex";
    }
    closeModal.onclick = () => (modal.style.display = "none");
    window.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };

    // Slider UI for radius and salary (UI display only)
    // const radiusSlider = document.getElementById("jp-radius-slider");
    // const radiusValue = document.getElementById("jp-radius-value");
    // radiusSlider.oninput = function () {
    //   radiusValue.textContent = `${this.value}km`;
    //   renderJobs();
    // };
    // salarySlider.oninput = function () {
    //   salaryValue.textContent = `$0 - $${this.value}`;
    //   renderJobs();
    // };

    // Add event listeners for filter controls
    keywordInput.addEventListener("input", renderJobs);
    locationInput.addEventListener("input", renderJobs);
    categorySelect.addEventListener("change", renderJobs);
    typeFreelancer.addEventListener("change", renderJobs);
    typeFulltime.addEventListener("change", renderJobs);
    typeParttime.addEventListener("change", renderJobs);
    typeTemporary.addEventListener("change", renderJobs);
    expGroup.querySelectorAll('input[type="checkbox"]').forEach(inp => inp.addEventListener('change', renderJobs));
    expMore.querySelectorAll('input[type="checkbox"]').forEach(inp => inp.addEventListener('change', renderJobs));
    document.getElementById("jp-sort-dropdown").addEventListener("change", renderJobs);


    // Initial render
    renderJobs();

    // Filter Sidebar Drawer for Mobile
    const filterToggle = document.getElementById('jp-filter-toggle');
    const filterSidebar = document.querySelector('.jp-sidebar');
    const filterClose = document.getElementById('jp-filter-close');

    filterToggle.addEventListener('click', () => {
      filterSidebar.classList.add('open');
      document.body.classList.add('jp-filter-active');
      document.body.style.overflow = 'hidden';
    });
    filterClose.addEventListener('click', () => {
      filterSidebar.classList.remove('open');
      document.body.classList.remove('jp-filter-active');
      document.body.style.overflow = '';
    });
    window.addEventListener('click', (e) => {
      if (
        document.body.classList.contains('jp-filter-active') &&
        e.target === document.body
      ) {
        filterSidebar.classList.remove('open');
        document.body.classList.remove('jp-filter-active');
        document.body.style.overflow = '';
      }
    });

    window.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      const job = params.get("job");
      const city = params.get("city");

      // Set values in input boxes
      if (job) document.getElementById("jp-keyword-search").value = job;
      if (city) document.getElementById("jp-location-search").value = city;
      renderJobs();
    });



    function getSalaryValue(salary) {
  const match = salary.match(/\$([\d,]+)/g);
  if (!match) return 0;
  return Math.max(...match.map(s => parseInt(s.replace(/\$|,/g, ''))));
}

