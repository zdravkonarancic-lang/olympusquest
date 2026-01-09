const navLinks = [
{name: "Home", link: "index.html", active: false},
{name: "Destinations", link: "destinations.html", active: true},
{name: "Accommodations", link: "accommodations.html", active: false},
{name: "About", link: "about.html", active: false},
{name: "Author", link: "author.html", active: false},
{name: "Documentation", link: "assets/documents/Dokumentacija.pdf", isDownload: true},
{name: "Website ZIP", link: "assets/documents/Zdravko_Narancic_II_godina_Web_Sajt.zip", isDownload: true}
];

const menuNavigation = document.getElementById("main-nav");

function createNavigation(){
    let navigation = `<ul class="nav-list">`;
    
    navLinks.forEach(link => {
        let activeClass = link.active ? "active-link" : "";
        let downloadAttr = link.isDownload ? "download" : "";
        
        navigation += `
            <li class="nav-item">
                <a href="${link.link}" class="nav-link ${activeClass}" ${downloadAttr}>
                    ${link.name}
                </a>
            </li>`;
    });
    
    navigation += `</ul>`;
    menuNavigation.innerHTML = navigation;
}
createNavigation();

const allDestinations = [
    { name: "Athens", region: false, type: "both", transport: ["plane", "bus"], price: 120, days: [3, 7], img: "assets/img/athens2.jpg" },
    { name: "Chios", region: true, type: "solo", transport: ["plane"], price: 110, days: [3, 7], img: "assets/img/chios.jpg" },
    { name: "Corfu", region: true, type: "family", transport: ["plane"], price: 150, days: [3, 7, 14], img: "assets/img/corfu.jpg" },
    { name: "Crete", region: true, type: "both", transport: ["plane"], price: 180, days: [7, 14], img: "assets/img/crete3.jpg" },
    { name: "Epirus", region: false, type: "solo", transport: ["bus", "car"], price: 70, days: [3, 7], img: "assets/img/epirus.jpg" },
    { name: "Halkidiki", region: false, type: "family", transport: ["car", "bus"], price: 85, days: [7, 14], img: "assets/img/halkidiki.jpg" },
    { name: "Kefalonia", region: true, type: "both", transport: ["plane"], price: 160, days: [7], img: "assets/img/kefalonia.jpg" },
    { name: "Mykonos", region: true, type: "solo", transport: ["plane"], price: 300, days: [3, 7], img: "assets/img/mykonos.jpg" },
    { name: "Paros", region: true, type: "both", transport: ["plane"], price: 140, days: [3, 7], img: "assets/img/paros.jpg" },
    { name: "Peloponnese", region: false, type: "family", transport: ["car"], price: 100, days: [7, 14], img: "assets/img/peleponnese.jpg" },
    { name: "Rhodes", region: true, type: "family", transport: ["plane"], price: 130, days: [7, 14], img: "assets/img/rhodes3.jpg" },
    { name: "Santorini", region: true, type: "both", transport: ["plane"], price: 250, days: [3, 7, 14], img: "assets/img/santorini4.jpg" },
    { name: "Skiathos", region: true, type: "family", transport: ["plane"], price: 125, days: [7], img: "assets/img/skiathos.jpg" },
    { name: "Thessaloniki", region: false, type: "both", transport: ["plane","bus", "car"], price: 80, days: [3, 7, 14], img: "assets/img/thessaloniki1.jpg" },
    { name: "Zante", region: true, type: "family", transport: ["plane"], price: 145, days: [7], img: "assets/img/zante.jpg" }
];

const grid = document.getElementById("destinations-grid");
const nameSelect = document.getElementById("search-input");

function populateNames() {
    const sortedNames = [...allDestinations].sort((a, b) => a.name.localeCompare(b.name));
    sortedNames.forEach(dest => {
        const option = document.createElement("option");
        option.value = dest.name.toLowerCase();
        option.textContent = dest.name;
        nameSelect.appendChild(option);
    });
}

function displayDestinationCards(destination) {
    grid.innerHTML = "";
    if (destination.length === 0) {
        grid.innerHTML = `
            <div class="col-12 d-flex justify-content-center align-items-center">
                <h3 class="no-results-msg">Unfortunately, we can't satisfy your preferences :(</h3>
            </div>`;
        return;
    }
    
    destination.forEach(dest => {
        grid.innerHTML += `
            <div class="col">
                <div class="destination-card">
                    <div class="card-img-container">
                        <img src="${dest.img}" alt="${dest.name}">
                    </div>
                    <div class="card-info">
                        <h5>${dest.name}</h5>
                        <p class="text-muted small">${dest.region ? 'ISLAND' : 'MAINLAND'}</p>
                        <p><strong class="highlight-blue">${dest.price}€</strong> / Per Person /  Per Day</p>
                        <p>Duration: <span class="highlight-blue">${dest.days.join(', ')} Days</span></p>
                        <p>Transport: <span class="highlight-blue">${dest.transport.join(', ')}</span></p>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterDestination() {
    const searchValue = nameSelect.value.toLowerCase();
    const locationValue = document.getElementById("location-filter").value;
    const tripType = document.getElementById("trip-filter").value;
    const transportationType = document.getElementById("transport-filter").value;
    const numberOfDays = document.getElementById("days-filter").value;
    const budgetSort = document.getElementById("price-sort").value;

    let filteredData = allDestinations.filter(dest => {
        const exactName = searchValue === "all" || dest.name.toLowerCase() === searchValue;
        const exactLocation = locationValue === "all" || (locationValue === "island" && dest.region === true) || (locationValue === "mainland" && dest.region === false);
        const exactTripType = tripType === "all" || dest.type === tripType || (tripType === "both" && (dest.type === "solo" || dest.type === "family" || dest.type === "both"));
        const exactTransportation = transportationType === "all" || dest.transport.includes(transportationType);
        const exactNumberOfDays = numberOfDays === "all" || dest.days.includes(parseInt(numberOfDays));
        
        return exactName && exactLocation && exactTripType && exactTransportation && exactNumberOfDays;
    });

    budgetSort === "low" ? filteredData.sort((a, b) => a.price - b.price) : filteredData.sort((a, b) => b.price - a.price);
    displayDestinationCards(filteredData);
}

document.querySelectorAll(".filter-input").forEach(el => el.addEventListener('input', filterDestination));

populateNames();
displayDestinationCards(allDestinations.sort((a, z) => a.name.localeCompare(z.name)));

window.onload = function() {
    const footerDisplay = this.document.getElementById("main-footer");
    if(footerDisplay)
    {
        footerDisplay.innerHTML =  `<div class="footer-wrapper">
        <div class="container py-5">
            <div class="row text-white">
                
                <div class="col-md-4 mb-4">
                    <h4 class="fw-bold mb-4 footer-text-outline">CONTACT:</h4>
                    <div class="mb-4">
                        <span class="u-bold footer-text-outline">Location</span>
                        <p class="mt-2 fw-bold fs-5 footer-text-outline">Zdravka Čelara 16, Belgrade Serbia</p>
                    </div>
                    <div class="mb-4">
                        <span class="u-bold footer-text-outline">Phone Number</span>
                        <p class="mt-2 fw-bold fs-5 footer-text-outline">+381 63 123 456</p>
                    </div>
                    <div class="mb-4">
                        <span class="u-bold footer-text-outline">Email</span>
                        <p class="mt-2 fw-bold fs-5 footer-text-outline">zdravko.narancic.68.24@ict.edu.rs</p>
                    </div>
                </div>

                <div class="col-md-4 mb-4 text-center">
                    <h4 class="fw-bold mb-4 footer-text-outline">MAIN PAGES:</h4>
                    <ul class="list-unstyled footer-links footer-text-outline">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="destinations.html">DESTINATIONS</a></li>
                        <li><a href="accommodations.html">ACCOMMODATIONS</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="author.html">AUTHOR</a></li>
                    </ul>
                </div>

                <div class="col-md-4 mb-4 text-md-end text-center">
                    <h4 class="fw-bold mb-4 footer-text-outline">WEBSITE DOCUMENTS:</h4>
                    <ul class="list-unstyled footer-links mb-5 footer-text-outline">
                        <li><a href="assets/documents/Dokumentacija.pdf">DOCUMENTATION</a></li>
                        <li><a href="assets/documents/Zdravko_Narancic_II_godina_Web_Sajt.zip">WEBSITE ZIP</a></li>
                    </ul>
                    
                    <div class="socials-wrapper d-flex align-items-center justify-content-md-end justify-content-center gap-3 mt-5">
                        <span class="fw-bold fs-4 footer-text-outline">SOCIALS:</span>
                        <a href="https://www.instagram.com/" class="social-circle" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/" class="social-circle" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com/" class="social-circle" target="_blank">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://rs.linkedin.com/" class="social-circle" target="_blank">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

            </div> <div class="row mt-3">
                <div class="col-12 text-center">
                    <p class="copyright-line footer-text-outline fs-5">
                        &copy; Zdravko Narančić 68/24 - Olympus Quest 2025/2026
                    </p>
                </div>
            </div>
        </div>
    </div>`;
    }
}