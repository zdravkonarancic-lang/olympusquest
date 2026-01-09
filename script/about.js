const navLinks = [
{name: "Home", link: "index.html", active: false},
{name: "Destinations", link: "destinations.html", active: false},
{name: "Accommodations", link: "accommodations.html", active: false},
{name: "About", link: "about.html", active: true},
{name: "Author", link: "author.html", active: false},
{name: "Documentation", link: "../assets/documents/Dokumentacija.pdf", isDownload: true},
{name: "Website ZIP", link: "../assets/documents/Zdravko_Narancic_II_godina_Web_Sajt.zip", isDownload: true}
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

const tourGuides = [
    { id: 1, name: "Elena Papadopoulos", origin: "Belgrade, Serbia", img: "assets/img/guide1.jpg", languages: ["English", "Greek", "Serbian"], desc: "Hello! I'm Elena, and I've spent the last decade uncovering the secrets of Greece's most iconic landmarks. My goal is to make history come alive for you, moving beyond dates to tell the real stories of the people who built this civilization. Whether we are exploring ancient ruins or hidden local cafes in Athens, I promise an authentic and unforgettable experience!"},
    { id: 2, name: "Alexander Ioannou", origin: "Charlotte, North Carolina", img: "assets/img/guide2.jpg", languages: ["English", "Greek", "Spanish"], desc: "Hey there, I'm Alexander! Originally from the States but with Greek roots, I offer a unique perspective on this beautiful country. I'm an adrenaline junkie and a nature lover, so if you're looking for the best hiking trails, secret beaches, or mountain biking paths, I'm your guy. Let’s skip the tourist traps and find some real adventure together!"},
    { id: 3, name: "Andre Santos", origin: "Sao Paulo, Brazil", img: "assets/img/guide3.jpg", languages: ["English", "Greek", "Portuguese"], desc: "Hi, I'm Andre! My passion for the sea brought me to Greece years ago, and I never looked back. As a specialist in maritime history and coastal tours, I love showing people the magic of the Greek islands from the deck of a boat. From sunset cruises to exploring underwater caves, I’ll help you experience the Aegean Sea like a true local."}
];

function showAboutGuide(guide) {
    const tourGuideDiv = document.createElement("div");
    tourGuideDiv.className = "custom-modal-overlay";

    tourGuideDiv.innerHTML = `
        <div class="custom-modal-content guide-modal">
            <span class="close-btn">&times;</span>
            <h2 class="modal-title">ABOUT TOUR GUIDE</h2>
            <div class="guide-modal-body">
                <div class="guide-modal-left">
                    <div class="image-wrapper-modal">
                        <img src="${guide.img}" alt="${guide.name}">
                    </div>
                </div>
                <div class="guide-modal-right">
                    <p class="guide-full-desc">${guide.desc}</p>
                </div>
            </div>
            <div class="guide-modal-footer">
                <p><strong>LANGUAGES:</strong> ${guide.languages.map(l => `${l}`).join(", ")}</p>
            </div>
        </div>
    `;

    document.body.appendChild(tourGuideDiv);

    const closeBtn = tourGuideDiv.querySelector(".close-btn");
    
    closeBtn.onclick = function() {
        tourGuideDiv.remove();
    };

    tourGuideDiv.onclick = function(obj) {
        if (obj.target === tourGuideDiv) {
            tourGuideDiv.remove();
        }
    };
}

document.querySelector(".guides-container").addEventListener("click", function(e) {
    if (e.target.classList.contains("about-btn")) {
        const card = e.target.closest(".guide-card");
        const guideName = card.querySelector(".guide-name").innerText;
        const selectedGuide = tourGuides.find(g => g.name === guideName);
        
        if (selectedGuide) {
            showAboutGuide(selectedGuide);
        }
    }
});

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