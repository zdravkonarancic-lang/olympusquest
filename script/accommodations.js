const navLinks = [
{name: "Home", link: "../index.html", active: false},
{name: "Destinations", link: "destinations.html", active: false},
{name: "Accommodations", link: "accommodations.html", active: true},
{name: "About", link: "about.html", active: false},
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

let allAccommodations = [
    { id: 1, name: "Athenaeum Eridanus Hotel", type: "Hotel", dest: "Athens", loc: "City", add: "spa", board: "Breakfast Only", location: "Athens, Greece", price: 165, stars: 4, desc: "Athenaeum Eridanus Hotel is a sophisticated boutique hotel located in the heart of Athens. It offers a perfect blend of modern luxury and classical elegance, featuring a rooftop terrace with breathtaking views of the Acropolis. Guests can enjoy elegantly designed rooms, a high-end fitness center, and exquisite dining options, all within walking distance of the city's historic landmarks.", img: ["assets/img/athenaeum_eridanus.jpg","assets/img/athenaeum_eridanus_2.jpg","assets/img/athenaeum_eridanus_3.jpg","assets/img/athenaeum_eridanus_4.jpg","assets/img/athenaeum_eridanus_5.jpg","assets/img/athenaeum_eridanus_6.jpg"] },
    { id: 2, name: "Okupa Hotel", type: "Hotel", dest: "Athens", loc: "City", add: "pool", board: "All Inclusive", location: "Athens, Greece", price: 180, stars: 5, desc: "Experience the vibrant energy of Athens at Hotel Okupa. This trendy urban hotel combines industrial chic design with cozy Mediterranean hospitality. Located just minutes away from the historic Plaka district and the Acropolis, it offers guests a rooftop terrace with breathtaking city views, modern minimalist rooms, and a unique fusion restaurant that captures the true spirit of Greek street food with a gourmet twist.", img: ["assets/img/okupa.jpg","assets/img/okupa_2.jpg","assets/img/okupa_3.jpg","assets/img/okupa_4.jpg","assets/img/okupa_5.jpg","assets/img/okupa_6.jpg","assets/img/okupa_7.jpg"] },
    { id: 3, name: "Agora Residence", type: "Hotel", dest: "Chios", loc: "City", add: "parking", board: "Breakfast Only", location: "Chios, Greece", price: 210, stars: 4, desc: "Agora Residence is a beautifully restored boutique mansion located in the heart of Chios Town. Combining neoclassical elegance with modern luxury, this residence offers a unique stay in a building that breathes history. Guests can enjoy high ceilings, traditional stone walls, and bespoke furniture, all while being just steps away from the central market (Agora) and the castle. It’s the perfect sanctuary for travelers seeking an authentic Greek island experience with sophisticated comfort.", img: ["assets/img/agora_residence.jpg","assets/img/agora_residence_2.jpg","assets/img/agora_residence_3.jpg","assets/img/agora_residence_4.jpg","assets/img/agora_residence_5.jpg","assets/img/agora_residence_6.jpg","assets/img/agora_residence_7.jpg"] },
    { id: 4, name: "Mylarakia", type: "Villa", dest: "Chios", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Chios, Greece", price: 160, stars: 3, desc: "Mylarakia offers a once-in-a-lifetime stay in authentic, renovated Greek windmills. Situated on the coast of Chios, these iconic structures have been transformed into cozy, multi-level suites that blend rustic charm with sea-side serenity. Wake up to the sound of the Aegean waves and enjoy your morning coffee with an unobstructed view of the Turkish coast. It is an ideal getaway for couples and those looking for a peaceful, nostalgic atmosphere far from the crowded tourist spots.", img: ["assets/img/mylarakia.jpg","assets/img/mylarakia_2.jpg","assets/img/mylarakia_3.jpg","assets/img/mylarakia_4.jpg","assets/img/mylarakia_5.jpg","assets/img/mylarakia_6.jpg","assets/img/mylarakia_7.jpg","assets/img/mylarakia_8.jpg","assets/img/mylarakia_9.jpg"] },
    { id: 5, name: "The Calliston", type: "Villa", dest: "Corfu", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Corfu, Greece", price: 150, stars: 3, desc: "The Calliston is a sanctuary of modern luxury nestled in the lush greenery of Corfu. This high-end retreat focuses on wellness and tranquility, offering sleek suites with private balconies that overlook the Ionian Sea. With its minimalist architecture and earth-toned interiors, the hotel creates a seamless connection between indoor comfort and the island's natural beauty. Guests can indulge in fine dining featuring local Corfiot ingredients or unwind by the stunning infinity pool as the sun sets over the horizon.", img: ["assets/img/the_calliston.jpg","assets/img/the_calliston_2.jpg","assets/img/the_calliston_3.jpg","assets/img/the_calliston_4.jpg","assets/img/the_calliston_5.jpg","assets/img/the_calliston_6.jpg","assets/img/the_calliston_7.jpg","assets/img/the_calliston_8.jpg"] },
    { id: 6, name: "Anita Hotel", type: "Hotel", dest: "Corfu", loc: "Beach", add: "pool", board: "All Inclusive", location: "Corfu, Greece", price: 190, stars: 4, desc: "Anita Hotel is a charming, family-run establishment located in the Perama area, just a short distance from the iconic Mouse Island and the historic center of Corfu Town. Surrounded by lush Mediterranean gardens, the hotel offers a warm and welcoming environment with a large outdoor pool as its centerpiece. It is an ideal choice for travelers who want to explore the island's culture while enjoying a relaxed stay. The hotel is particularly famous for its traditional Greek breakfast and the personalized care provided by the owners, making every guest feel right at home.", img: ["assets/img/anita_hotel.jpg","assets/img/anita_hotel_2.jpg","assets/img/anita_hotel_3.jpg","assets/img/anita_hotel_4.jpg","assets/img/anita_hotel_5.jpg","assets/img/anita_hotel_6.jpg","assets/img/anita_hotel_7.jpg","assets/img/anita_hotel_8.jpg"] },
    { id: 7, name: "Star Beach Village", type: "Resort", dest: "Crete", loc: "Beach", add: "pool", board: "All Inclusive", location: "Crete, Greece", price: 320, stars: 5, desc: "Star Beach Village & Water Park is a modern hotel situated by a sandy beach in a peaceful area near Hersonissos. The complex is connected to the beach via a convenient underground tunnel. It features an extensive pool area with exciting water slides, a children’s playground, and a rich animation program, including traditional Greek folklore nights and special events.", img: ["assets/img/hotel_star_beach.jpg","assets/img/hotel_star_beach_2.jpg","assets/img/hotel_star_beach_3.jpg","assets/img/hotel_star_beach_4.jpg","assets/img/hotel_star_beach_5.jpg","assets/img/hotel_star_beach_6.jpg","assets/img/hotel_star_beach_7.jpg"] },
    { id: 8, name: "Villa Irini", type: "Villa", dest: "Crete", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Crete, Greece", price: 180, stars: 3, desc: "Villa Irini is a stunning traditional retreat perched on a cliffside, offering panoramic views of the turquoise Cretan Sea. This elegant property combines authentic stone architecture with high-end comforts, featuring spacious terraces and a private pool that seems to merge with the horizon. Located near the picturesque village of Rethymno, it provides a perfect balance of privacy and accessibility. Whether you are enjoying a sunset dinner on the patio or relaxing in the sun-drenched gardens, Villa Irini offers an unforgettable experience of Cretan hospitality and serene luxury.", img: ["assets/img/villa_irini.jpg","assets/img/villa_irini_2.jpg","assets/img/villa_irini_3.jpg","assets/img/villa_irini_4.jpg","assets/img/villa_irini_5.jpg","assets/img/villa_irini_6.jpg","assets/img/villa_irini_7.jpg","assets/img/villa_irini_8.jpg"] },
    { id: 9, name: "Epirus Palace", type: "Hotel", dest: "Epirus", loc: "City", add: "spa", board: "All Inclusive", location: "Epirus, Greece", price: 210, stars: 5, desc: "Epirus Palace Congress & Spa is a true landmark of hospitality in the historic region of Epirus. This five-star hotel radiates neoclassical elegance and offers an unparalleled sense of luxury. Located in the heart of the 'Land of Legends', near the vibrant city of Ioannina, it features one of the most sophisticated spa centers in Northern Greece. Guests can enjoy spacious, marble-decorated rooms, a massive outdoor pool, and gourmet dining that celebrates the rich culinary traditions of the Epirus mountains. It is the ultimate destination for those seeking a regal experience, whether for business or a relaxing mountain escape.", img: ["assets/img/epirus_palace.jpg","assets/img/epirus_palace_2.jpg","assets/img/epirus_palace_3.jpg","assets/img/epirus_palace_4.jpg","assets/img/epirus_palace_5.jpg","assets/img/epirus_palace_6.jpg","assets/img/epirus_palace_7.jpg","assets/img/epirus_palace_8.jpg","assets/img/epirus_palace_9.jpg"] },
    { id: 10, name: "Essence Hotel", type: "Hotel", dest: "Epirus", loc: "City", add: "pool", board: "Breakfast Only", location: "Epirus, Greece", price: 170, stars: 3, desc: "Essence Hotel offers a fresh and contemporary perspective on luxury in the city of Ioannina. Designed with a philosophy of 'essential elegance,' this boutique hotel features stylish interiors, cutting-edge technology, and a focus on personalized service. Its central feature is a beautiful outdoor swimming pool area and a modern fitness center. The hotel’s bistro is a local favorite, serving creative Mediterranean dishes in a sophisticated atmosphere. Perfect for both business travelers and couples, Essence Hotel provides a tranquil retreat just minutes away from the historic Lake Pamvotis and the city's castle.", img: ["assets/img/essence_hotel.jpg","assets/img/essence_hotel_2.jpg","assets/img/essence_hotel_3.jpg","assets/img/essence_hotel_4.jpg","assets/img/essence_hotel_5.jpg","assets/img/essence_hotel_6.jpg","assets/img/essence_hotel_7.jpg","assets/img/essence_hotel_8.jpg"] },
    { id: 11, name: "Petridis House", type: "Apartment", dest: "Halkidiki", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Halkidi, Greece", price: 125, stars: 3, desc: "Petridis House is a charming, family-run property in Pefkohori, just a short walk from the beach. It features a lovely outdoor pool and a friendly atmosphere, making it the perfect choice for a peaceful and authentic Greek holiday.", img: ["assets/img/petridis.jpg","assets/img/petridis_2.jpg","assets/img/petridis_3.jpg","assets/img/petridis_4.jpg","assets/img/petridis_5.jpg","assets/img/petridis_6.jpg"] },
    { id: 12, name: "Seaside Villa", type: "Villa", dest: "Halkidiki", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Halkidiki, Greece", price: 110, stars: 4, desc: "Seaside Villa is the epitome of a Mediterranean summer dream, located just a few steps away from the crystal-clear waters of Halkidiki. This expansive property is designed for those who value privacy and immediate access to the sea. Surrounded by a lush private garden with pine trees that reach the shoreline, the villa offers a peaceful sanctuary with modern amenities and large sun-drenched terraces. It is an ideal choice for families or groups of friends looking to enjoy the golden sands of Kassandra in an exclusive, home-like atmosphere.", img: ["assets/img/seaside_villa.jpg","assets/img/seaside_villa_2.jpg","assets/img/seaside_villa_3.jpg","assets/img/seaside_villa_4.jpg","assets/img/seaside_villa_5.jpg","assets/img/seaside_villa_6.jpg","assets/img/seaside_villa_7.jpg","assets/img/seaside_villa_8.jpg"] },
    { id: 13, name: "Hotel Aeollos", type: "Hotel", dest: "Halkidiki", loc: "Beach", add: "pool", board: "Breakfast Only", location: "Halkidiki, Greece", price: 180, stars: 3, desc: "Hotel Aeollos is a hidden gem located in the popular seaside village of Pefkohori, Halkidiki. Known for its lush palm-tree gardens and a serene pool area, the hotel offers a peaceful retreat away from the main road's bustle, yet it remains within walking distance of the sandy beach. The rooms are bright and airy, decorated in a classic Mediterranean style with balconies overlooking the turquoise waters of the Toroneos Gulf or the green hills. With its friendly staff and authentic Greek atmosphere, Aeollos is a favorite choice for travelers seeking relaxation and comfort under the Kassandra sun.", img: ["assets/img/aeollos.jpg","assets/img/aeollos_2.jpg","assets/img/aeollos_3.jpg","assets/img/aeollos_4.jpg","assets/img/aeollos_5.jpg","assets/img/aeollos_6.jpg","assets/img/aeollos_7.jpg","assets/img/aeollos_8.jpg"] },
    { id: 14, name: "AETHERA Casa", type: "Villa", dest: "Kefalonia", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Kefalonia, Greece", price: 130, stars: 3, desc: "AETHERA Casa is a masterpiece of contemporary architecture, perched on a gentle slope overlooking the azure waters of Kefalonia. This boutique residence offers an exclusive living experience, blending industrial minimalism with the natural warmth of the Ionian landscape. With expansive floor-to-ceiling windows and a private infinity pool that blends into the horizon, the villa is designed to celebrate light and space. Located near the charming village of Spartia, it provides guests with total privacy and a sophisticated base to explore the island’s world-famous beaches, such as Myrtos and Antisamos.", img: ["assets/img/aethera.jpg","assets/img/aethera_2.jpg","assets/img/aethera_3.jpg","assets/img/aethera_4.jpg","assets/img/aethera_5.jpg","assets/img/aethera_6.jpg","assets/img/aethera_7.jpg","assets/img/aethera_8.jpg","assets/img/aethera_9.jpg"] },
    { id: 15, name: "Ionian Grove", type: "Villa", dest: "Kefalonia", loc: "City", add: "parking", board: "Breakfast Only", location: "Kefalonia, Greece", price: 160, stars: 4, desc: "Ionian Grove is a high-end retreat nestled in the lush greenery of Corfu. This high-end retreat focuses on wellness and tranquility, offering sleek suites with private balconies that overlook the Ionian Sea. With its minimalist architecture and earth-toned interiors, the hotel creates a seamless connection between indoor comfort and the island's natural beauty. Guests can indulge in fine dining featuring local Corfiot ingredients or unwind by the stunning infinity pool as the sun sets over the horizon.", img: ["assets/img/ionian_grove.jpg","assets/img/ionian_grove_2.jpg","assets/img/ionian_grove_3.jpg","assets/img/ionian_grove_4.jpg","assets/img/ionian_grove_5.jpg","assets/img/ionian_grove_6.jpg","assets/img/ionian_grove_7.jpg","assets/img/ionian_grove_8.jpg","assets/img/ionian_grove_9.jpg"] },
    { id: 16, name: "Niriides Homes & Villas", type: "Villa", dest: "Mykonos", loc: "Beach", add: "pool", board: "Breakfast Only", location: "Mykonos, Greece", price: 320, stars: 5, desc: "Niriides Homes & Villas represents the quintessential Mykonian lifestyle, offering a stunning collection of white-washed residences overlooking the deep blue Aegean Sea. Nestled just above the cosmopolitan Elia Beach, this property blends traditional Cycladic charm with contemporary comfort. Each villa and home features stone-paved terraces, minimalist interiors, and access to a beautiful infinity pool. It is the perfect haven for those seeking a balance between the island’s famous vibrant nightlife and a serene, private retreat where the only sound is the Mediterranean breeze.", img: ["assets/img/niriides.jpg","assets/img/niriides_2.jpg","assets/img/niriides_3.jpg","assets/img/niriides_4.jpg","assets/img/niriides_5.jpg","assets/img/niriides_6.jpg","assets/img/niriides_7.jpg","assets/img/niriides_8.jpg","assets/img/niriides_9.jpg"] },
    { id: 17, name: "Mykonos Panorama", type: "Villa", dest: "Mykonos", loc: "City", add: "parking", board: "Breakfast Only", location: "Mykonos, Greece", price: 290, stars: 4, desc: "Hotel Mykonos Panorama is a breathtaking retreat that offers one of the most iconic views on the island. True to its name, the hotel provides a stunning 360-degree vista of the turquoise Aegean Sea and the charming white-washed houses of Mykonos Town. This boutique hotel features elegantly designed rooms with private balconies, where guests can enjoy world-class sunsets. With a magnificent infinity pool that seems to spill into the horizon and a cocktail bar serving local delicacies, Mykonos Panorama is the perfect destination for travelers seeking a high-end, picturesque experience in the heart of the Cyclades.", img: ["assets/img/panorama.jpg","assets/img/panorama_2.jpg","assets/img/panorama_3.jpg","assets/img/panorama_4.jpg","assets/img/panorama_5.jpg","assets/img/panorama_6.jpg","assets/img/panorama_7.jpg","assets/img/panorama_8.jpg","assets/img/panorama_9.jpg"] },
    { id: 18, name: "Hotel Livadia", type: "Hotel", dest: "Paros", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Paros, Greece", price: 220, stars: 4, desc: "Hotel Livadia is a charming beachfront property located directly on the sun-kissed sands of Livadia Beach in Paros. Offering a perfect blend of Cycladic hospitality and modern comfort, the hotel features bright rooms with balconies that open up to the refreshing sea breeze and the sound of the waves. Its prime location allows guests to walk from their room straight onto the beach or take a short, scenic stroll to the bustling port of Parikia with its narrow marble streets and traditional tavernas. With its beachfront restaurant serving fresh local seafood, Hotel Livadia is the ultimate spot for a relaxed and authentic island getaway.", img: ["assets/img/livadia.jpg","assets/img/livadia_2.jpg","assets/img/livadia_3.jpg","assets/img/livadia_4.jpg","assets/img/livadia_5.jpg","assets/img/livadia_6.jpg","assets/img/livadia_7.jpg","assets/img/livadia_8.jpg"] },
    { id: 19, name: "Villa Drios Semeli Paros", type: "Villa", dest: "Paros", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Paros, Greece", price: 200, stars: 3, desc: "Villa Drios Semeli is an exquisite retreat that captures the soul of Paros. Located in the serene seaside village of Drios, this villa offers a harmonious blend of minimalist white-washed architecture and lush Mediterranean greenery. The property features spacious, sun-filled living areas, hand-crafted wooden details, and large verandas that provide stunning views of the Aegean Sea. Just a short walk from the famous Golden Beach, it is an ideal sanctuary for those who appreciate tranquility, privacy, and high-end design in a traditional island setting.", img: ["assets/img/drios_semeli.jpg","assets/img/drios_semeli_2.jpg","assets/img/drios_semeli_3.jpg","assets/img/drios_semeli_4.jpg","assets/img/drios_semeli_5.jpg","assets/img/drios_semeli_6.jpg","assets/img/drios_semeli_7.jpg","assets/img/drios_semeli_8.jpg","assets/img/drios_semeli_9.jpg"] },
    { id: 20, name: "Grand Kourouta", type: "Villa", dest: "Peloponnese", loc: "Beach", add: "parking", board: "Breakfast Only", location: "Peloponnese, Greece", price: 190, stars: 4, desc: "Grand Kourouta offers a premium seaside experience on the western coast of the Peloponnese. This elegant complex is situated directly on the famous Kourouta Beach, often called the 'Mykonos of Peloponnese' for its vibrant energy and golden sands. The property features modern, stylish apartments and suites that offer direct access to the sea and private balconies with sunset views. Guests can enjoy a perfect mix of cosmopolitan life and coastal relaxation, with high-end beach bars, traditional fish tavernas, and the crystal-clear Ionian waters right at their doorstep.", img: ["assets/img/korouta.jpg","assets/img/korouta_2.jpg","assets/img/korouta_3.jpg","assets/img/korouta_4.jpg","assets/img/korouta_5.jpg","assets/img/korouta_6.jpg","assets/img/korouta_7.jpg","assets/img/korouta_8.jpg","assets/img/korouta_9.jpg"] },
    { id: 21, name: "Alkyon Resort", type: "Hotel", dest: "Peloponnese", loc: "Beach", add: "spa", board: "All Inclusive", location: "Peloponnese, Greece", price: 240, stars: 5, desc: "Alkyon Resort Hotel & Spa is an oasis of luxury and tranquility located in the coastal town of Vrahati. Set within 23,000 square meters of lush palm gardens, this five-star resort offers a perfect escape just a short distance from the Corinth Canal. The hotel is renowned for its award-winning spa center, offering holistic treatments and indoor heated pools. With its spacious, elegantly furnished rooms and multiple outdoor swimming pools, it provides a premium experience for families and couples alike. Guests can enjoy refined Mediterranean cuisine at the on-site restaurants or relax with a cocktail by the lagoon-style pool.", img: ["assets/img/alkyon.jpg","assets/img/alkyon_2.jpg","assets/img/alkyon_3.jpg","assets/img/alkyon_4.jpg","assets/img/alkyon_5.jpg","assets/img/alkyon_6.jpg","assets/img/alkyon_7.jpg","assets/img/alkyon_8.jpg","assets/img/alkyon_9.jpg"] },
    { id: 22, name: "Mediterranean Hotel", type: "Hotel", dest: "Rhodes", loc: "Beach", add: "pool", board: "All Inclusive", location: "Rhodes, Greece", price: 425, stars: 5, desc: "Hotel Mediterranean is perfectly located in Rhodes Town, just 50m from the popular Elli beach. Guests can enjoy the freshwater pool or head to the hotel's sandy beach for exciting water sports. Most rooms features a balcony or terrace, perfect for enjoying spectacular sunsets or relaxing with friends.", img: ["assets/img/mediterranean_rhodes.jpg", "assets/img/mediterranean_rhodes_2.jpg", "assets/img/mediterranean_rhodes_3.jpg","assets/img/mediterranean_rhodes_4.jpg","assets/img/mediterranean_rhodes_5.jpg","assets/img/mediterranean_rhodes_6.jpg"] },
    { id: 23, name: "Rhodes Villa 365", type: "Villa", dest: "Rhodes", loc: "Beach", add: "spa", board: "Breakfast only", location: "Rhodes, Greece", price: 320, stars: 5, desc: "Rhodes Villa 365 is a contemporary private sanctuary designed for ultimate comfort and relaxation on the sun-drenched island of Rhodes. This stylish villa features a sleek, open-plan interior with high-end finishes and state-of-the-art amenities. The highlight of the property is its expansive outdoor area, boasting a large private pool, a fully equipped BBQ zone, and comfortable lounge spaces perfect for evening gatherings. Located just a short drive from both the historic Rhodes Town and the crystal-clear waters of Faliraki, it offers the perfect balance between exploring the island's rich medieval history and enjoying a private, luxurious retreat.", img: ["assets/img/365_villa.jpg", "assets/img/365_villa_2.jpg", "assets/img/365_villa_3.jpg","assets/img/365_villa_4.jpg","assets/img/365_villa_5.jpg","assets/img/365_villa_6.jpg"] },
    { id: 24, name: "Armonia Hotel", type: "Hotel", dest: "Santorini", loc: "Beach", add: "pool", board: "Breakfast Only", location: "Santorini, Greece", price: 300, stars: 5, desc: "The hotel is located in Kamari, in a quiet area just 100m from the beach and 200m from the town center. Numerous restaurants, cafes and shops can be found in the immediate vicinity along the seaside promenade.", img: ["assets/img/aromonia_hotel.jpg", "assets/img/aromonia_hotel_2.jpg", "assets/img/aromonia_hotel_3.jpg", "assets/img/aromonia_hotel_4.jpg", "assets/img/aromonia_hotel_5.jpg", "assets/img/aromonia_hotel_6.jpg"] },
    { id: 25, name: "Astro Palace Hotel & Suites", type: "Hotel", dest: "Santorini", loc: "City", add: "pool", board: "Breakfast Only", location: "Santorini, Greece", price: 300, stars: 5, desc: "Astro Palace Hotel & Suites is a masterpiece of Santorinian architecture, elegantly blending the island's traditional white curves with sophisticated luxury. Located just a short stroll from the vibrant center of Fira, the hotel offers a serene escape with panoramic views of the Aegean horizon. Guests can indulge in the world-class spa, enjoy fine dining at the Althea restaurant, or relax in suites that feature private pools or jacuzzis. It is an ideal sanctuary for those who want to be close to the island's famous caldera views and nightlife while enjoying the absolute privacy and comfort of a five-star resort.", img: ["assets/img/astro_palace.jpg", "assets/img/astro_palace_2.jpg", "assets/img/astro_palace_3.jpg", "assets/img/astro_palace_4.jpg", "assets/img/astro_palace_5.jpg", "assets/img/astro_palace_6.jpg", "assets/img/astro_palace_7.jpg", "assets/img/astro_palace_8.jpg", "assets/img/astro_palace_9.jpg"] },
    { id: 26, name: "Villa Philosophia - Sophia", type: "Villa", dest: "Skiathos", loc: "Beach", add: "pool", board: "Breakfast Only", location: "Skiathos, Greece", price: 210, stars: 4, desc: "Villa Philosophia - Sophia is a breathtaking retreat where luxury meets natural harmony on the emerald island of Skiathos. Perched on a verdant hillside, this boutique villa offers a 'philosophy' of relaxation, featuring traditional stone architecture, warm wooden accents, and an infinity pool that overlooks the sparkling Aegean Sea. Surrounded by olive groves and pine trees, it provides a serene escape from the world. Guests can enjoy organic local delicacies, panoramic sunset views from their private terrace, and easy access to the golden sands of Agia Paraskevi beach, making it a perfect sanctuary for those seeking peace and inspiration.", img: ["assets/img/philosophia_sophia.jpg","assets/img/philosophia_sophia_2.jpg","assets/img/philosophia_sophia_3.jpg","assets/img/philosophia_sophia_4.jpg","assets/img/philosophia_sophia_5.jpg","assets/img/philosophia_sophia_6.jpg","assets/img/philosophia_sophia_7.jpg","assets/img/philosophia_sophia_8.jpg","assets/img/philosophia_sophia_9.jpg"] },
    { id: 27, name: "Lagou Raxi Country Hotel", type: "Hotel", dest: "Skiathos", loc: "City", add: "pool", board: "Breakfast Only", location: "Skiathos, Greece", price: 290, stars: 4, desc: "Lagou Raxi Country Hotel is a charming sanctuary that offers a refined 'country-chic' experience with breathtaking views of the Pagasetic Gulf. Designed to reflect the traditional architecture of the Pelion region, the hotel features stone-built walls, cozy fireplaces, and elegant rooms named after local wild flowers. Guests can relax by the swimming pool, participate in Mediterranean cooking classes, or hike the ancient stone paths that lead to secluded beaches. It is the ultimate destination for those who seek to reconnect with nature and enjoy authentic Greek hospitality in a tranquil, aristocratic setting.", img: ["assets/img/lagou_raxi.jpg","assets/img/lagou_raxi_2.jpg","assets/img/lagou_raxi_3.jpg","assets/img/lagou_raxi_4.jpg","assets/img/lagou_raxi_5.jpg","assets/img/lagou_raxi_6.jpg","assets/img/lagou_raxi_7.jpg","assets/img/lagou_raxi_8.jpg","assets/img/lagou_raxi_9.jpg"] },
    { id: 28, name: "Holiday Inn Thessaloniki", type: "Hotel", dest: "Thessaloniki", loc: "City", add: "pool", board: "Breakfast Only", location: "Thessaloniki, Greece", price: 155, stars: 5, desc: "Holiday Inn Thessaloniki combines the reliability of a world-class brand with the warm hospitality of Greece's northern capital. Perfectly situated near the port and the historic Ladadika district, this hotel offers guests immediate access to the city’s vibrant culinary scene and cultural landmarks. With its sophisticated business facilities, indoor heated pool, and modern fitness center, it serves as a comfortable urban oasis. The hotel's restaurant, 'Aristotelis,' serves a rich variety of Mediterranean and international dishes, ensuring a premium stay for those visiting Thessaloniki for business, shopping, or a weekend city break.", img: ["assets/img/holiday_inn.jpg","assets/img/holiday_inn_2.jpg","assets/img/holiday_inn_3.jpg","assets/img/holiday_inn_4.jpg","assets/img/holiday_inn_5.jpg","assets/img/holiday_inn_6.jpg","assets/img/holiday_inn_7.jpg","assets/img/holiday_inn_8.jpg","assets/img/holiday_inn_9.jpg"] },
    { id: 29, name: "Heated Pool Villa", type: "Villa", dest: "Thessaloniki", loc: "City", add: "pool", board: "Breakfast Only", location: "Thessaloniki, Greece", price: 120, stars: 4, desc: "A luxurious private villa featuring a state-of-the-art heated infinity pool, panoramic sea views, and modern minimalist design. Located just minutes away from the city, it offers the perfect balance of serenity and accessibility for an unforgettable Greek getaway.", img: ["assets/img/heated_pool_villa.jpg","assets/img/heated_pool_villa_2.jpg","assets/img/heated_pool_villa_3.jpg","assets/img/heated_pool_villa_4.jpg","assets/img/heated_pool_villa_5.jpg","assets/img/heated_pool_villa_6.jpg","assets/img/heated_pool_villa_7.jpg"] },
    { id: 30, name: "Dali Hotel", type: "Hotel", dest: "Zante", loc: "City", add: "parking", board: "Breakfast Only", location: "Zante, Greece", price: 230, stars: 3, desc: "Dali Hotel is a charming boutique property perfectly positioned along the picturesque waterfront of Zakynthos Town. Known for its warm, personalized hospitality and artistic flair, the hotel offers bright, elegantly decorated rooms that overlook the shimmering Ionian Sea or the historic town center. Guests can start their day with a traditional Greek breakfast featuring local honey and pastries before exploring the nearby Solomos Square and the Venetian Castle. Its central location makes it an ideal base for travelers who want to combine the island's famous beach excursions, like Navagio, with the sophisticated dining and nightlife of the capital.", img: ["assets/img/dali.jpg","assets/img/dali_2.jpg","assets/img/dali_3.jpg","assets/img/dali_4.jpg","assets/img/dali_5.jpg","assets/img/dali_6.jpg","assets/img/dali_7.jpg","assets/img/dali_8.jpg","assets/img/dali_9.jpg"] },
    { id: 31, name: "Xigia Escape", type: "Villa", dest: "Zante", loc: "Beach", add: "pool", board: "Breakfast Only", location: "Zante, Greece", price: 280, stars: 4, desc: "Xigia Escape Villa is a secluded paradise perched on the cliffs of northeastern Zakynthos, offering breathtaking panoramic views of the Ionian Sea. This modern villa is designed for travelers who seek peace, privacy, and a deep connection with nature. With its large stone-paved terraces and infinity pool that seems to merge with the horizon, it provides the ultimate setting for relaxation. The villa is just a few hundred meters from the unique Xigia Sulfur Beach, famous for its therapeutic waters. Surrounded by wild olive trees and rocky landscapes, Xigia Escape is the perfect hideaway for a truly rejuvenating Greek summer experience.", img: ["assets/img/xigia.jpg","assets/img/xigia_2.jpg","assets/img/xigia_3.jpg","assets/img/xigia_4.jpg","assets/img/xigia_5.jpg","assets/img/xigia_6.jpg","assets/img/xigia_7.jpg","assets/img/xigia_8.jpg","assets/img/xigia_9.jpg"] }
];

const grid = document.getElementById("accommodations-grid");

function displayAccommodations(accommodation){
    grid.innerHTML = "";
    if(accommodation.length === 0){
        grid.innerHTML = `
            <div class="col-12 d-flex justify-content-center">
                <h3 class="no-results-msg">Unfortunately, we can't satisfy your preferences :(</h3>
            </div>`;
        return;
    }
    accommodation.forEach(acc=>{
        let accommodationRatings = "";
        for (let i = 0; i < acc.stars; i++) {
            accommodationRatings += `<i class="fa-solid fa-star star-blue"></i>`;
        }
        grid.innerHTML += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="accommodation-card-overlay" style="background-image: url('${acc.img[0]}');">
                    <div class="card-content-overlay">
                        <div class="top-info">
                            <h2 class="acc-name-overlay">${acc.name}</h2>
                        </div>
                        <div class="middle-info">
                            <div class="stars-overlay">${accommodationRatings}</div>
                            <p class="acc-type-loc">${acc.type} | ${acc.location}</p>
                            <p class="price-overlay"><span>$${acc.price}</span> / Per Night</p>
                        </div>
                        <div class="bottom-info">
                            <button class="btn-about-overlay" data-id="${acc.id}">ABOUT</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

function showAboutAccommodation(acc){
    const accommDiv = document.createElement("div");
    accommDiv.className = "custom-modal-overlay";
    const Images = Array.isArray(acc.img) ? acc.img : [acc.img];

    let accommodationRatings = "";
    for (let i = 0; i < acc.stars; i++) {
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
            <p><strong>Price:</strong> <span class="modal-price-val">$${acc.price}</span> / Per Night</p>
        </div>
    `;
    document.body.appendChild(accommDiv);
    
    const sliderImg = document.getElementById("modal-slider-img");
    let intervalID = null;
    
    if (window.initSliderAnimation) {
        intervalID = window.initSliderAnimation(sliderImg, Images);
    }
    
    accommDiv.querySelector(".close-btn").onclick = function() {
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

grid.addEventListener("click", function(e) {
    if(e.target.classList.contains("btn-about-overlay")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        const selectedAcc = allAccommodations.find(a => a.id === id);
        if(selectedAcc) showAboutAccommodation(selectedAcc);
    }
});

function filterAccommodations(){
    const destinationValue = document.getElementById("filter-dest").value;
    const locationValue = document.getElementById("filter-loc").value;
    const tripType = document.getElementById("filter-type").value;
    const addition = document.getElementById("filter-add").value;
    const boardType = document.getElementById("filter-board").value;
    const sortType = document.getElementById("sort-price").value;

    let filteredResults = allAccommodations.filter(acc=>{
        return (destinationValue === "all" || acc.dest === destinationValue) && 
               (locationValue === "all" || acc.loc === locationValue) && 
               (tripType === "all" || acc.type === tripType) && 
               (addition === "all" || acc.add === addition) && 
               (boardType === "all" || acc.board === boardType);
    });

    if (sortType === "all") {
        filteredResults.sort((a, b) => a.price - b.price);
    } else if (sortType === "expensive") {
        filteredResults.sort((a, b) => b.price - a.price);
    }

    displayAccommodations(filteredResults);
}

document.querySelectorAll(".filter-input").forEach(element => {
    element.addEventListener("input", filterAccommodations);
});

filterAccommodations();

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