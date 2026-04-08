// Button logic (Home page)
/*onst button = document.querySelector("button");

if (button) {
button.addEventListener("click", () => {
alert("Listings coming soon!");
});
}*/

// Property data
const properties = [
{
id: 1,
name: "Modern City Apartment",
city: "Cape Town",
price: 850,
image: "images/cityapartment.jpg",
description: "A modern apartment in the heart of the city.",
lat: -33.9249,
lng: 18.4241
},
{
id: 2,
name: "Cozy Studio",
city: "Johannesburg",
price: 600,
image: "images/cozystudio.jpg",
description: "A cozy studio perfect for short stays.",
lat: -33.9249,
lng: 18.4241
},
{
id: 3,
name: "Beachside Escape",
city: "Durban",
price: 1200,
image: "images/beachescape.jpg",
description: "Relax by the ocean in this beautiful beachside stay.",
lat: -33.9249,
lng: 18.4241
},
{
id: 4,
name: "Ocean View Loft",
city: "Durban",
price: 950,
image: "images/oceanview.jpg",
description: "A stylish loft with ocean views.",
lat: -33.9249,
lng: 18.4241
},
{
id: 5,
name: "City Bowl Apartment",
city: "Cape Town",
location: "Bretten Coastal Esate",
price: 1100,
image: "images/citybowel.jpg",
description: "Comfortable stay in the City Bowl.",
lat: -33.9249,
  lng: 18.4241
},
{
id: 6,
name: "Gem Cottage",
city: "Johannesburg",
location: "Germiston Central",
price: 1345,
image: "images/cottage.jpg",
description: "Plush bedding, warm lighting cottage.",
lat: -33.9249,
  lng: 18.4241
},
{
  id: 7,
  name: "Kelway Hotel",
  city: "Port Elizabeth",
  location: "Summerstrand",
  price: 1600,
  image: "images/peone.jpg",
  decription: "4-star hotel features spacious rooms and views of Nelson Mandela Bay",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 8,
  name: "Courtyard Logde",
  city: "Port Elizabeth",
  location: "Walmer",
  price: 900,
  image: "images/petwo.jpg",
  decription: "Features accomodation with an outdoor swimming pool",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 9,
  name: "Paxton Guesthouse",
  city: "Port Elizabeth",
  location: "Brucee Lee",
  price: 2000,
  image: "images/pethree.jpg",
  decription: "Short walk from thr beach, close to the airpot",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 10,
  name: "The Beach Hotel",
  city: "Port Elizabeth",
  location: "Timberland",
  price: 1500,
  image: "images/pefour.jpg",
  decription: "Located along the beachfront in Port Elizabeth and with views of the indian ocean",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 11,
  name: "Lagoon Hotel & Spa",
  city: "Cape Town",
  location: "Waterfront",
  price: 880,
  image: "images/capethree.jpg",
  decription: "Spacious two-bedroom, self catering hotel",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 12,
  name: "Manor on the Bay",
  city: "Cape Town",
  location: "Gordan's Bay",
  price: 2100,
  image: "images/capefour.jpg",
  decription: "Situated at the foot of the Steenbras Mountain overlooking the Ocean and Table Mountain.",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 13,
  name: "Coastland inn",
  city: "Durban",
  location: "La Lucia Durban Beachfront",
  price: 999,
  image: "images/durthree.jpg",
  decription: "Plenty of family rooms, enjoy a breathtaking view of the ocean",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 14,
  name: "Shelbourne Apartment",
  city: "Durban",
  location: "29 Shelbourne Avenue",
  price: 1431,
  image: "images/durfour.jpg",
  decription: "Exceptional breakfast, outdoor swimming pool and free on-site parking",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 15,
  name: "Zebra Country Lodge",
  city: "Johannesburg",
  location: "Parkade 2 Ekurhuleni",
  price: 783,
  image: "images/joburgthree.jpg",
  decription: "Classic service, comfy rooms, enjoy breakfast, lunch and dinner",
  lat: -33.9249,
  lng: 18.4241
},
{
  id: 16,
  name: "Sandton Sun ",
  city: "Johannesburg",
  location: "Corner of Maude, Johannesburg",
  price: 1536,
  image: "images/joburgfour.jpg",
  decription: "Iconic landmark on the Sandton skyline.",
  lat: -33.9249,
  lng: 18.4241
}
];



// Listings page logic
const listingsContainer = document.querySelector(".listings");
const searchInput = document.getElementById("searchInput");

function renderListings(list) {
  if (!listingsContainer) return;

  listingsContainer.innerHTML = "";

  // Group by city
  const grouped = {};

  list.forEach(property => {
    if (!grouped[property.city]) {
      grouped[property.city] = [];
    }
    grouped[property.city].push(property);
  });

  // Render each city
  for (const city in grouped) {
    const heading = document.createElement("h2");
    heading.textContent = `Homes in ${city}`;
    listingsContainer.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "city-grid";

    grouped[city].forEach(property => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${property.image}" alt="${property.name}">
        <h3>${property.name}</h3>
        <p>R ${property.price} / night</p>
        <a href="property.html?id=${property.id}">
          <button>View Details</button>
        </a>
      `;

      grid.appendChild(card);
    });

    listingsContainer.appendChild(grid);
  }
}

// Initial render
renderListings(properties);


if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = properties.filter(p =>
      p.city.toLowerCase().includes(value)
    );
    renderListings(filtered);
  });
}

// PROPERTY PAGE ONLY
const propertyNameEl = document.getElementById("property-name");

if (propertyNameEl) {
  const params = new URLSearchParams(window.location.search);
  const propertyId = Number(params.get("id"));
  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    alert("Property not found");
    window.location.href = "listings.html";
  }

  const map = L.map("map").setView([property.lat, property.lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  L.marker([property.lat, property.lng])
    .addTo(map)
    .bindPopup(property.name)
    .openPopup();

  document.getElementById("property-name").textContent = property.name;
  document.getElementById("property-price").textContent = `R ${property.price} / night`;
  document.getElementById("property-description").textContent = property.description;
  document.getElementById("property-image").src = property.image;
}



const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("🎉 Booking confirmed! A confirmation email has been sent.");
    bookingForm.reset();
  });
}



function addReview() {
  const input = document.getElementById("reviewInput");
  const list = document.getElementById("reviews");

  if (!input || !list || !propertyId) return;

  const reviews = JSON.parse(localStorage.getItem(`reviews_${propertyId}`)) || [];

  if (input.value.trim() === "") return;

  reviews.push(input.value);
  localStorage.setItem(`reviews_${propertyId}`, JSON.stringify(reviews));

  input.value = "";
  renderReviews();
}

function renderReviews() {
  const list = document.getElementById("reviews");

  if (!list || !propertyId) return;

  const reviews = JSON.parse(localStorage.getItem(`reviews_${propertyId}`)) || [];

  list.innerHTML = "";
  reviews.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    list.appendChild(li);
  });
}

// Only run on property page
if (document.getElementById("reviews")) {
  renderReviews();
}
