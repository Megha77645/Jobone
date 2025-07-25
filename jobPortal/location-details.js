const searchCityBtn = document.getElementById('searchCityBtn');
const pickLocationBtn = document.getElementById('pickLocationBtn');
const cityModal = document.getElementById('cityModal');
const closeModal = document.getElementById('closeModal');
const cityInput = document.getElementById('cityInput');
const citySuggestions = document.getElementById('citySuggestions');
const locationResult = document.getElementById('locationResult');
const nextBtn = document.getElementById('nextBtn');

// City list (add more as needed)
const cities = [
  "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai",
  "Kolkata", "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur",
  "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Agra",
  "Ludhiana", "Vadodara", "Nashik", "Meerut", "Faridabad", "Rajkot", "Varanasi",
  "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
  "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada",
  "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur",
  "Hubli–Dharwad", "Bareilly", "Moradabad", "Mysore", "Gurgaon", "Aligarh",
  "Jalandhar", "Tiruchirappalli", "Bhubaneswar", "Salem", "Mira-Bhayandar",
  "Thiruvananthapuram", "Bhiwandi", "Saharanpur", "Gorakhpur", "Guntur",
  "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack",
  "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun", "Durgapur",
  "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer", "Akola", "Gulbarga",
  "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Jammu",
  "Sangli-Miraj & Kupwad", "Mangalore", "Erode", "Belgaum", "Kurnool",
  "Ambattur", "Noida", "Bokaro", "South Dumdum", "Bellary", "Patiala",
  "Gopalpur", "Agartala", "Gandhinagar", "Bathinda"
];

let selectedAddress = "";

// Show Next button only when a location is picked
function showNext(address) {
  selectedAddress = address;
  nexttBtn.style.display = "block";
}

function hideNext() {
  nexttBtn.style.display = "none";
  selectedAddress = "";
}

// Open city search modal and populate all cities by default
searchCityBtn.addEventListener('click', () => {
  cityModal.style.display = 'flex';
  cityInput.value = '';
  populateCitySuggestions(cities); // Show all cities by default
  locationResult.innerText = '';
  hideNext();
});

// Helper to populate the city suggestions list
function populateCitySuggestions(list) {
  citySuggestions.innerHTML = '';
  if (list.length === 0) {
    citySuggestions.innerHTML = '<li style="color:#888;">No cities found</li>';
    return;
  }
  list.forEach(city => {
    const li = document.createElement('li');
    li.textContent = city;
    li.onclick = () => selectCity(city);
    citySuggestions.appendChild(li);
  });
}

// Filter the city list as user types
cityInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  if (!query) {
    populateCitySuggestions(cities);
    return;
  }
  const filtered = cities.filter(city => city.toLowerCase().startsWith(query));
  populateCitySuggestions(filtered);
});

function selectCity(city) {
  cityInput.value = city; // Show picked city in search bar
  locationResult.innerHTML = `Selected city: <strong>${city}</strong>`;
  showNext(city);
  setTimeout(() => { cityModal.style.display = 'none'; }, 200);
}

// Close modal
closeModal.addEventListener('click', () => {
  cityModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target == cityModal) cityModal.style.display = 'none';
});

// Pick current location: Show city and state
pickLocationBtn.addEventListener('click', () => {
  locationResult.innerText = 'Detecting your location...';
  hideNext();
  if (!navigator.geolocation) {
    locationResult.innerText = "Geolocation is not supported by your browser.";
    return;
  }
  navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true, timeout: 10000 });
  function success(position) {
    const { latitude, longitude } = position.coords;
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
      .then(res => res.json())
      .then(data => {
        const addr = data.address;
        let city = addr.city || addr.town || addr.village || addr.hamlet || addr.municipality || addr.locality;
        let state = addr.state || addr.state_district || "";
        // Fallback: if city is missing, show only state
        if (city && state) {
          locationResult.innerHTML = `Detected location: <strong>${city}, ${state}</strong>`;
          showNext(`${city}, ${state}`);
          cityInput.value = city; // Show the city in the search bar as well
        } else if (city) {
          locationResult.innerHTML = `Detected location: <strong>${city}</strong>`;
          showNext(city);
          cityInput.value = city;
        } else if (state) {
          locationResult.innerHTML = `Detected state: <strong>${state}</strong>`;
          showNext(state);
          cityInput.value = state;
        } else {
          locationResult.innerText = "Could not detect your city. Please try again.";
          hideNext();
        }
      })
      .catch(() => {
        locationResult.innerText = "Could not detect your city. Please try again.";
        hideNext();
      });
  }
  function error(err) {
    if (err.code === 1) locationResult.innerText = "Location access denied. Please allow location permission.";
    else if (err.code === 2) locationResult.innerText = "Location unavailable.";
    else if (err.code === 3) locationResult.innerText = "Location detection timed out.";
    else locationResult.innerText = "An error occurred while getting location.";
    hideNext();
  }
});

// Next button click (customize as needed)
nexttBtn.addEventListener('click', () => {
  alert("Location saved: " + selectedAddress);
  function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

    }

}
});