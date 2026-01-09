const navLinks = [
{name: "Home", link: "index.html", active: false},
{name: "Destinations", link: "destinations.html", active: false},
{name: "Accommodations", link: "accommodations.html", active: false},
{name: "About", link: "about.html", active: false},
{name: "Author", link: "author.html", active: true},
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