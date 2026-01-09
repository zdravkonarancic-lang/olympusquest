//Provera povezivanja sa JavaSkriptom
/* alert("RADI"); */
const navLinks = [
{name: "Home", link: "index.html", active: true},
{name: "Destinations", link: "destinations.html", active: false},
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

const btnReadMore = document.getElementById("btn-read-more");
const readMoreDots = document.getElementById("dots");
const moreText = document.getElementById("additional-text");

btnReadMore.addEventListener("click",function(){
    if (readMoreDots.style.display === "none") 
    {
        readMoreDots.style.display = "inline";
        moreText.style.display =  "none";
        btnReadMore.textContent = "Read More";
    }
    else
    {
         readMoreDots.style.display = "none";
         moreText.style.display =  "inline";
         btnReadMore.textContent = "Read Less";
    }
});

let popularAccommodations = [
    {id : 1, name:"Armonia Hotel", type:"Hotel", location:"Santorini, Greece", price:"$300",stars: 5, desc:"The hotel is located in Kamari, in a quiet area just 100m from the beach and 200m from the town center. Numerous restaurants, cafes and shops can be found in the immediate vicinity along the seaside promenade.", img:["assets/img/aromonia_hotel.jpg","assets/img/aromonia_hotel_2.jpg","assets/img/aromonia_hotel_3.jpg","assets/img/aromonia_hotel_4.jpg","assets/img/aromonia_hotel_5.jpg","assets/img/aromonia_hotel_6.jpg"]},
    {id : 2, name:"Mediterranean Hotel", type:"Hotel", location:"Rhodes, Greece", price:"$425", stars: 5, desc:"Hotel Mediterranean is perfectly located in Rhodes Town, just 50m from the popular Elli beach. Guests can enjoy the freshwater pool or head to the hotel's sandy beach for exciting water sports. Most rooms features a balcony or terrace, perfect for enjoying spectacular sunsets or relaxing with friends.", img:["assets/img/mediterranean_rhodes.jpg","assets/img/mediterranean_rhodes_2.jpg","assets/img/mediterranean_rhodes_3.jpg","assets/img/mediterranean_rhodes_4.jpg","assets/img/mediterranean_rhodes_5.jpg","assets/img/mediterranean_rhodes_6.jpg"]},
    {id : 3, name:"Star Beach Village", type:"Resort", location:"Crete, Greece", price:"$320",stars: 5 , desc:"Star Beach Village & Water Park is a modern hotel situated by a sandy beach in a peaceful area near Hersonissos. The complex is connected to the beach via a convenient underground tunnel. It features an extensive pool area with exciting water slides, a children’s playground, and a rich animation program, including traditional Greek folklore nights and special events.", img:["assets/img/hotel_star_beach.jpg","assets/img/hotel_star_beach_2.jpg","assets/img/hotel_star_beach_3.jpg","assets/img/hotel_star_beach_4.jpg","assets/img/hotel_star_beach_5.jpg","assets/img/hotel_star_beach_6.jpg","assets/img/hotel_star_beach_7.jpg"]},
    {id : 4, name:"Petridis House", type:"Aparatment / Hotel", location:"Halkidi, Greece", price:"$125", stars: 3, desc:"Petridis House is a charming, family-run property in Pefkohori, just a short walk from the beach. It features a lovely outdoor pool and a friendly atmosphere, making it the perfect choice for a peaceful and authentic Greek holiday.", img:["assets/img/petridis.jpg","assets/img/petridis_2.jpg","assets/img/petridis_3.jpg","assets/img/petridis_4.jpg","assets/img/petridis_5.jpg","assets/img/petridis_6.jpg"]},
    {id : 5, name:"Heated Pool Villa", type:"Villa", location:"Thessaloniki, Greece", price:"$120", stars: 4, desc: "A luxurious private villa featuring a state-of-the-art heated infinity pool, panoramic sea views, and modern minimalist design. Located just minutes away from the city, it offers the perfect balance of serenity and accessibility for an unforgettable Greek getaway.", img:["assets/img/heated_pool_villa.jpg","assets/img/heated_pool_villa_2.jpg","assets/img/heated_pool_villa_3.jpg","assets/img/heated_pool_villa_4.jpg","assets/img/heated_pool_villa_5.jpg","assets/img/heated_pool_villa_6.jpg","assets/img/heated_pool_villa_7.jpg",]},
    {id : 6, name:"Athenaeum Eridanus Hotel", type:"Hotel", location:"Athens, Greece", price:"$165",stars: 4 , desc:"Athenaeum Eridanus Hotel is a sophisticated boutique hotel located in the heart of Athens. It offers a perfect blend of modern luxury and classical elegance, featuring a rooftop terrace with breathtaking views of the Acropolis. Guests can enjoy elegantly designed rooms, a high-end fitness center, and exquisite dining options, all within walking distance of the city's historic landmarks.", img:["assets/img/athenaeum_eridanus.jpg","assets/img/athenaeum_eridanus_2.jpg","assets/img/athenaeum_eridanus_3.jpg","assets/img/athenaeum_eridanus_4.jpg","assets/img/athenaeum_eridanus_5.jpg","assets/img/athenaeum_eridanus_6.jpg"]}
];

const allAccommodations = document.querySelector("#accommodations-container");
const btnLoadMore = document.getElementById("load-more-btn");
let showingNumber = 3;

function generateDestinationCards(limit){
    allAccommodations.innerHTML = "";
    const showAllAccommodations = popularAccommodations.slice(0,limit);
    
    showAllAccommodations.forEach(acc => {
        const singularCard = document.createElement("div");
        singularCard.className = "col-lg-4 col-md-6 px-4 py-2"; 
        const cardImg = Array.isArray(acc.img) ? acc.img[0] : acc.img;
        
        let accommodationRatings = "";
        for (let i = 0; i < acc.stars; i++) 
        {
            accommodationRatings += `<i class="fa fa-star star-blue"></i>`;
        }

        singularCard.innerHTML = `
                <div class="destination-card">
                    <img src="${cardImg}" alt="${acc.name}">
                    <div class="destination-description">
                        <h3>${acc.name}</h3>
                        <div class='stars-container'>${accommodationRatings}</div>
                        <p>${acc.type} | ${acc.location}</p>
                        <p class="price-container"><span class="price-blue">${acc.price}</span> / Per Night</p>
                    </div>
                </div>`;
                
        const btnMore = document.createElement("button");
        btnMore.className = "btn-acc-more mt-2"; 
        btnMore.innerText = "ABOUT";
        
        btnMore.addEventListener("click", () => {
            showAboutAccommodation(acc);
        });

        singularCard.querySelector(".destination-description").appendChild(btnMore);
        allAccommodations.appendChild(singularCard);
    });
}

function showAboutAccommodation(acc){
    const accommDiv = document.createElement("div");
    accommDiv.className = "custom-modal-overlay";
    const Images = Array.isArray(acc.img) ? acc.img : [acc.img];

    let accommodationRatings = "";
    for (let i = 0; i < acc.stars; i++) 
    {
        accommodationRatings += `<i class="fa fa-star star-blue"></i>`;
    }

    accommDiv.innerHTML = `
        <div class="custom-modal-content">
            <span class="close-btn">&times;</span>
            <img src="${Images[0]}" class="modal-img" id="modal-slider-img">
            <h2 class="mt-3">${acc.name}</h2>
            <div class='stars-container'>${accommodationRatings}</div>
            <p><strong>Location:</strong> ${acc.location}</p>
            <p>${acc.desc}</p>
            <p><strong>Price:</strong> <span class="modal-price-val">${acc.price}</span> / Per Night</p>
        </div>
    `;
    document.body.appendChild(accommDiv);
    
    const sliderImg = document.getElementById("modal-slider-img");
    let intervalID = null;
    
    if (window.initSliderAnimation) {
        intervalID = window.initSliderAnimation(sliderImg, Images);
    }
    
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.onclick = function() {
        if(intervalID) clearInterval(intervalID);
        accommDiv.remove();
    };

    accommDiv.onclick = function(obj) {
        if (obj.target === accommDiv) {
            if(intervalID) clearInterval(intervalID);
            accommDiv.remove();
        }
    };
}

btnLoadMore.addEventListener("click", () => {
    if(showingNumber === 3) {
        showingNumber = 6;
        generateDestinationCards(showingNumber);
        const displayNotice = document.getElementById("short-notice-display")
        displayNotice.innerHTML= `<p class="short-notice-text">
                    <strong>SHORT NOTICE:</strong>The current prices are valid from <strong>May 15th, 2026</strong> to <strong>September 15th, 2026</strong>.The prices apply for <strong>one person only</strong>.
                </p>`
        btnLoadMore.textContent = "SHOW ALL";
    } else {
        window.location.href = "pages/accommodations.html";
    }
});

generateDestinationCards(showingNumber);

function generateForm() {
    const formWrapper = document.querySelector("#form-wrapper");
    if (!formWrapper) return;
    formWrapper.innerHTML = `
    <div class="container-fluid">
        <div class="custom-form-container">
            <form id="discount-form">
                <div class="form-flex-row"> 
                    <div class="left-side">
                        <div class="row g-4 mb-5">
                            <div class="col-sm-6">
                                <input type="text" id="fname" class="form-control custom-input" placeholder="First Name"> 
                                <span id="fname-error" class="field-error"></span>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" id="lname" class="form-control custom-input" placeholder="Last Name">
                                <span id="lname-error" class="field-error"></span>
                            </div>
                        </div>
                        <div class="mb-5">
                            <input type="email" id="email" class="form-control custom-input" placeholder="Email Address">
                            <span id="email-error" class="field-error"></span>
                        </div>
                        <p class="label-text">Set your birthdate:</p>
                        <div class="row g-3">
                            <div class="col-4">
                                <select id="birth-day" class="form-select custom-select" onchange="this.setAttribute('value', this.value)">
                                    <option value="0">Day</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <select id="birth-month" class="form-select custom-select" onchange="this.setAttribute('value', this.value)">
                                    <option value="0">Month</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <select id="birth-year" class="form-select custom-select" onchange="this.setAttribute('value', this.value)">
                                    <option value="0">Year</option>
                                </select>
                            </div>
                        </div>
                        <span id="date-error" class="field-error mb-5"></span>

                        <div class="row g-3">
                            <div class="col-sm-5">
                                <p class="label-text">Pick Your Gender:</p>
                                <div class="form-check mb-3 d-flex align-items-center">
                                    <input type="radio" name="gender" id="female" value="female" class="form-check-input">
                                    <label for="female" class="form-check-label">Female</label>
                                </div>
                                <div class="form-check d-flex align-items-center">
                                    <input type="radio" name="gender" id="male" value="male" class="form-check-input">
                                    <label for="male" class="form-check-label">Male</label>
                                </div>
                                <span id="gender-error" class="field-error"></span>
                            </div>
                            <div class="col-sm-7">
                                <p class="label-text">Pick your dream destination:</p>
                                <select id="destination-select" class="form-select custom-select" onchange="this.setAttribute('value', this.value)">
                                    <option value="0">SELECT A DESTINATION</option>
                                    <option value="Santorini">Santorini</option>
                                    <option value="Rhodes">Rhodes</option>
                                    <option value="Crete">Crete</option>
                                </select>
                                <span id="dest-error" class="field-error"></span>
                            </div>
                        </div>
                    </div>
                    <div class="right-side">
                        <div id="apply-btn-block" class="w-100 text-center mb-4">
                            <button type="button" id="btnApply" class="btn-apply">apply</button>
                        </div>
                        <div class="terms-box">
                            <div class="form-check d-flex align-items-center">
                                <input type="checkbox" class="form-check-input" id="terms">
                                <label class="form-check-label" for="terms">I agree on Terms & Conditions</label>
                            </div>
                            <span id="terms-error" class="field-error text-center"></span>
                            <p id="error-log" class="error-msg-text mt-3 text-center"></p>
                        </div>
                    </div>
                </div>
            </form>        
        </div>
    </div>`;

    fillDateDropDown();
    document.querySelector("#btnApply").addEventListener("click", validateForm);
}
 generateForm()

function validateForm() {
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const day = parseInt(document.getElementById("birth-day").value);
    const month = parseInt(document.getElementById("birth-month").value);
    const year = parseInt(document.getElementById("birth-year").value);
    const gender = document.querySelector('input[name="gender"]:checked');
    const destination = document.getElementById("destination-select").value;
    const termsAndConditions = document.getElementById("terms").checked;
    
    const errorLog = document.getElementById("error-log");
    const applyBlock = document.getElementById("apply-btn-block");

    errorLog.innerHTML = "";
    document.querySelectorAll(".field-error").forEach(span => span.innerText = "");

    let hasErrors = false;

    if (!fname && !lname && !email && day === 0 && month === 0 && year === 0 && !gender && destination === "0" && !termsAndConditions) {
        errorLog.innerHTML = "You haven't filled the form and you haven't accepted the terms of use.";
        return;
    }

    const f_l_nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fname || !f_l_nameRegex.test(fname)) {
        document.getElementById("fname-error").innerText = "Invalid First Name!";
        hasErrors = true;
    }

    if (!lname || !f_l_nameRegex.test(lname)) {
        document.getElementById("lname-error").innerText = "Invalid Last Name!";
        hasErrors = true;
    }

    if (!email || !emailRegex.test(email)) {
        document.getElementById("email-error").innerText = "Invalid E-mail address!";
        hasErrors = true;
    }

    if (day === 0 || month === 0 || year === 0) {
        document.getElementById("date-error").innerText = "You must complete your birthdate!";
        hasErrors = true;
    } else {
        const today = new Date();
        const birthDate = new Date(year, month - 1, day);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthOfBirth = today.getMonth() - birthDate.getMonth();
        if (monthOfBirth < 0 || (monthOfBirth === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            document.getElementById("date-error").innerText = "You must be 18+ years old!";
            hasErrors = true;
        }
    }

    if (!gender) {
        document.getElementById("gender-error").innerText = "You must pick a gender!";
        hasErrors = true;
    }

    if (destination === "0") {
        document.getElementById("dest-error").innerText = "You must pick a destination!";
        hasErrors = true;
    }

    if (!termsAndConditions) {
        document.getElementById("terms-error").innerText = "You must accept the Terms and Conditions!";
        hasErrors = true;
    }

    if (hasErrors) return;

    const formal_title = gender.value === "male" ? "Mr." : "Mrs.";
    const discountNumber = Math.floor(100000 + Math.random() * 900000);

    applyBlock.innerHTML = `
    <div class="success-msg-container success-blue">
        Dear ${formal_title} ${lname},<br><br>
        Your discount number is <strong>${discountNumber}</strong>. You MUST take a photo of the filled form and send it to us via email 
        zdravko.narancic.68.24@ict.edu.rs 
        or visit us at Zdravka Čelara 16, Belgrade Serbia.
    </div>`;

    document.querySelector(".terms-box").style.display = "none";
}

function fillDateDropDown() {
    const selectedDay = document.getElementById("birth-day");
    const selectedMonth = document.getElementById("birth-month");
    const selectedYear = document.getElementById("birth-year");
    
    if(!selectedDay || !selectedMonth || !selectedYear) return;

    for(let i = 1; i <= 31; i++) {
        let o = document.createElement("option");
        o.value = i;
        o.innerHTML = i;
        selectedDay.appendChild(o);
    }

    for(let i = 1; i <= 12; i++) {
        let o = document.createElement("option");
        o.value = i;
        o.innerHTML = i;
        selectedMonth.appendChild(o);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) { 
        let o = document.createElement("option");
        o.value = i;
        o.innerHTML = i;
        selectedYear.appendChild(o);
    }
}
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