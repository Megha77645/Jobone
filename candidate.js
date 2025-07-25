// Example candidate data (10 profiles)
const candidates = [
  {
    id: 1,
    name: "Darlene Robertson",
    role: "UI Designer",
    location: "London, UK",
    rate: 99,
    featured: true,
    gender: "Female",
    postedHoursAgo: 2,
    experience: "2",
    qualification: "Bachelor Degree",
    category: "Design",
    tags: ["App", "Design", "Digital"],
    avatar: "https://www.thomas.co/sites/default/files/styles/resource_banner_image/public/2022-08/How%20to%20Create%20an%20Effective%20Candidate%20Profile.jpg?itok=evvsZs7N",
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Developer",
    location: "London, UK",
    rate: 94,
    featured: true,
    gender: "Male",
    postedHoursAgo: 20,
    experience: "1",
    qualification: "Master's Degree",
    category: "Development",
    tags: ["App", "Design", "Digital"],
    avatar: "https://media.istockphoto.com/id/1330499331/photo/portrait-of-happy-handsome-millennial-young-30s-business-man.jpg?s=612x612&w=0&k=20&c=ySdzeGX2MwG-5w6WR-o5AoORcdSu-SDQPC7sQCZXVsw=",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Marketing Expert",
    location: "London, UK",
    rate: 99,
    featured: true,
    gender: "Female",
    postedHoursAgo: 36,
    experience: "3",
    qualification: "Bachelor Degree",
    category: "Marketing",
    tags: ["App", "Design", "Digital"],
    avatar: "https://media.istockphoto.com/id/1309798073/photo/head-shot-portrait-confident-attractive-young-woman-standing-at-home.jpg?s=612x612&w=0&k=20&c=ikKNHb3UmyiIIeCwrHTqvtCpsV7B6mVLsMHS9U4gTq8=",
  },
  {
    id: 4,
    name: "Floyd Miles",
    role: "Charted Accountant",
    location: "London, UK",
    rate: 88,
    featured: true,
    gender: "Male",
    postedHoursAgo: 3,
    experience: "4",
    qualification: "Doctorate Degree",
    category: "Accountant",
    tags: ["App", "Design", "Digital"],
    avatar: "https://media.istockphoto.com/id/1415053281/photo/profile-picture-of-happy-startup-project-leader-entrepreneur.jpg?s=612x612&w=0&k=20&c=UMcSR6B6DGmmDFGZfYp_2keuR-BohDoWQcwg4Qs3NXM=",
  },
  {
    id: 5,
    name: "Jane Cooper",
    role: "UX Researcher",
    location: "Manchester, UK",
    rate: 85,
    featured: false,
    gender: "male",
    postedHoursAgo: 10,
    experience: "1",
    qualification: "Master's Degree",
    category: "Design",
    tags: ["Research", "UX", "Design"],
    avatar: "https://media.istockphoto.com/id/2189658271/photo/young-man-dressed-in-professional-attire-posing-in-office.jpg?s=612x612&w=0&k=20&c=vWQVpObuDxMvb5j15wLxBaWkotD9nOHPwF7WXXiDqy4=",
  },
  {
    id: 6,
    name: "Cameron Williamson",
    role: "Backend Developer",
    location: "Birmingham, UK",
    rate: 100,
    featured: false,
    gender: "Male",
    postedHoursAgo: 5,
    experience: "2",
    qualification: "Bachelor Degree",
    category: "Development",
    tags: ["API", "Backend", "Node.js"],
    avatar: "https://media.istockphoto.com/id/2202433578/photo/headshot-portrait-of-company-boss-executive-manager-or-business-trainer.jpg?s=612x612&w=0&k=20&c=nYYreMpVuowu-g1_U1RTjAHcrl9RZ604QzTpV9eJjvI=",
  },
  {
    id: 7,
    name: "Kristin Watson",
    role: "Content Marketer",
    location: "Leeds, UK",
    rate: 76,
    featured: false,
    gender: "Female",
    postedHoursAgo: 50,
    experience: "3",
    qualification: "Certificate",
    category: "Marketing",
    tags: ["Content", "SEO", "Writing"],
    avatar: "https://media.istockphoto.com/id/1316878045/photo/profile-picture-of-serious-beautiful-woman-in-casual.jpg?s=612x612&w=0&k=20&c=now-5xKYXKVP3krkidLr-StDhhxD6nF3nTiG8xjrApM=",
  },
  {
    id: 8,
    name: "Brooklyn Simmons",
    role: "Financial Analyst",
    location: "London, UK",
    rate: 120,
    featured: true,
    gender: "Female",
    postedHoursAgo: 18,
    experience: "4",
    qualification: "Master's Degree",
    category: "Accountant",
    tags: ["Finance", "Analysis", "Excel"],
    avatar: "https://media.istockphoto.com/id/2202440670/photo/young-woman-online-telemeeting-participant-looking-at-camera.jpg?s=612x612&w=0&k=20&c=AqxdtUrxfTCDgSOVl5m53wbGT1wczqNFCSpjxLbj7Ys=",
  },
  {
    id: 9,
    name: "Guy Hawkins",
    role: "Frontend Developer",
    location: "Liverpool, UK",
    rate: 95,
    featured: false,
    gender: "Male",
    postedHoursAgo: 8,
    experience: "1",
    qualification: "Associate Degree",
    category: "Development",
    tags: ["Frontend", "React", "JavaScript"],
    avatar: "https://media.istockphoto.com/id/1316878036/photo/happy-handsome-male-millennial-posing-in-white-interior.jpg?s=612x612&w=0&k=20&c=N7EsrfuEn_TDxX5SqbCyelGfYHZyztQHCvwWdkLnQRk=",
  },
  {
    id: 10,
    name: "Savannah Nguyen",
    role: "Design Lead",
    location: "London, UK",
    rate: 133,
    featured: true,
    gender: "Female",
    postedHoursAgo: 30,
    experience: "4",
    qualification: "Doctorate Degree",
    category: "Design",
    tags: ["Design", "Leadership", "UI/UX"],
    avatar: "https://media.istockphoto.com/id/2212029392/photo/head-shot-of-employee-posing-in-boardroom.jpg?s=612x612&w=0&k=20&c=5hr4yQmzVEHEuAEe5JFUVqRByuzYNpckJlx7IYgJxes=",
  },
  {
    id: 11,
    name: "Marry Smithson",
    role: "Web Designer",
    location: "London, UK",
    rate: 120,
    featured: false,
    gender: "Female",
    postedHoursAgo: 1,
    experience: "5",
    qualification: "Bachelor Degree",
    category: "Design",
    tags: ["Web", "Design", "Creative"],
    avatar: "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg",
  },
  {
    id: 12,
    name: "John Doe",
    role: "Graphic Designer",
    location: "London, UK",
    rate: 100,
    featured: true,
    gender: "male",
    postedHoursAgo: 12,
    experience: "6",
    qualification: "Master's Degree",
    category: "Design",
    tags: ["Graphic", "Design", "Creative"],
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

];

// DOM Elements
const candidatesGrid = document.getElementById('candidatesGrid');
const jobsCount = document.getElementById('jobsCount');

// Filter Elements
const keywordInput = document.getElementById('keywordInput');
const locationInput = document.getElementById('locationInput');
const radiusInput = document.getElementById('radiusInput');
const radiusValue = document.getElementById('radiusValue');
const categoryInput = document.getElementById('categoryInput');
const genderInput = document.getElementById('genderInput');
const datePostedGroup = document.getElementById('datePostedGroup');
const experienceGroup = document.getElementById('experienceGroup');
const qualificationGroup = document.getElementById('qualificationGroup');
const sortSelect = document.getElementById('sortSelect');
const categorySelect = document.getElementById('categorySelect');

// Mobile filter logic
const openFilterBtn = document.getElementById('openFilterBtn');
const sidebarFilters = document.getElementById('sidebarFilters');
const closeFilterBtn = document.getElementById('closeFilterBtn');
const filterOverlay = document.getElementById('filterOverlay');

// // Set initial radius value
// radiusValue.textContent = radiusInput.value + "km";
// radiusInput.addEventListener('input', () => {
//   radiusValue.textContent = radiusInput.value + "km";
//   renderCandidates();
// });

// Mobile filter events
if (openFilterBtn && sidebarFilters && closeFilterBtn && filterOverlay) {
  openFilterBtn.addEventListener('click', function() {
    sidebarFilters.classList.add('open');
    filterOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  closeFilterBtn.addEventListener('click', function() {
    sidebarFilters.classList.remove('open');
    filterOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });
  filterOverlay.addEventListener('click', function() {
    sidebarFilters.classList.remove('open');
    filterOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// Get selected experience
function getCheckedValues(group) {
  return Array.from(group.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
}
// Get selected qualification
function getCheckedQual(group) {
  return Array.from(group.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
}
// Get selected date posted
function getDatePosted() {
  const checked = datePostedGroup.querySelector('input[type="radio"]:checked');
  return checked ? checked.value : "all";
}

// Filtering logic
function filterCandidates() {
  const keyword = keywordInput.value.trim().toLowerCase();
  const location = locationInput.value.trim().toLowerCase();
  const category = categoryInput.value;
  const gender = genderInput.value;
  const experience = getCheckedValues(experienceGroup);
  const qualification = getCheckedQual(qualificationGroup);
  const datePosted = getDatePosted();
  const selectedCategory = categorySelect.value;

  // Date posted logic: convert hours to filter
  let maxPostedHours = null;
  if (datePosted !== "all") maxPostedHours = parseInt(datePosted);

  return candidates.filter(c => {
    // Keyword filter (name, role, tags)
    if (keyword && !(
      c.name.toLowerCase().includes(keyword) ||
      c.role.toLowerCase().includes(keyword) ||
      c.tags.join(" ").toLowerCase().includes(keyword)
    )) return false;
    // Location filter (just a demo, simple contains)
    if (location && !c.location.toLowerCase().includes(location)) return false;
    // Category filter
    if (category && c.category !== category) return false;
    // Gender filter
    if (gender && c.gender !== gender) return false;
    // Experience filter
    if (experience.length > 0 && !experience.includes(c.experience)) return false;
    // Qualification filter
    if (qualification.length > 0 && !qualification.includes(c.qualification)) return false;
    // Date posted filter
    if (maxPostedHours !== null && c.postedHoursAgo > maxPostedHours) return false;
    // Top filter bar category select
    if (selectedCategory && c.category !== selectedCategory) return false;
    return true;
  });
}

// Sorting logic
function sortCandidates(list) {
  const sortValue = sortSelect.value;
  if (sortValue === "name") {
    return list.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortValue === "rate") {
    return list.slice().sort((a, b) => a.rate - b.rate);
  }
  return list;
}

// Render
function renderCandidates() {
  let filtered = filterCandidates();
  filtered = sortCandidates(filtered);

  jobsCount.textContent = filtered.length + " jobs";

  candidatesGrid.innerHTML = "";
  if (filtered.length === 0) {
    candidatesGrid.innerHTML = "<div style='grid-column: 1/-1; text-align:center; color:#888; padding:46px 0;'>No candidates found.</div>";
    return;
  }
  filtered.forEach(c => {
    candidatesGrid.innerHTML += `
    <div class="candidate-card">
      ${c.featured ? `<span class="featured">Featured</span>` : ""}
      <img src="${c.avatar}" alt="${c.name}" class="candidate-avatar">
      <div class="candidate-name">${c.name}</div>
      <div class="candidate-role">${c.role}</div>
      <div class="candidate-info">
        <span title="Location">📍 ${c.location}</span>
        <span title="Hourly Rate">💵 $${c.rate} / hour</span>
      </div>
      <div class="candidate-tags">
        ${c.tags.map(tag => `<span class="candidate-tag">${tag}</span>`).join('')}
      </div>
      <button class="view-profile-btn" onclick="alert('View profile of ${c.name}')">View Profile</button>
    </div>
    `;
  });
}

// Add event listeners for all filter controls
[
  keywordInput, locationInput, categoryInput, genderInput,
  sortSelect, categorySelect
].forEach(el => el.addEventListener('input', renderCandidates));
datePostedGroup.addEventListener('change', renderCandidates);
experienceGroup.addEventListener('change', renderCandidates);
qualificationGroup.addEventListener('change', renderCandidates);

// Initial Render
renderCandidates();

