
    window.initSliderAnimation = function(imgElement, images) {
        if (!Array.isArray(images) || images.length <= 1) return null;

        let currentIndex = 0;
        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
       
            $(imgElement).fadeOut(500, function() {
                $(this).attr("src", images[currentIndex]).fadeIn(500);
            });
        }, 2000);

        return intervalId; 
    };

$(document).ready(function() {
    function addtoAddons(id, images) {
        let currentIndex = 0;
        const $card = $("#" + id);

        if ($card.length > 0 && images.length > 0) {
            $card.css("background-image", "url('" + images[0] + "')");
            
            setInterval(function() {
                currentIndex = (currentIndex + 1) % images.length;
                
                $card.animate({ opacity: 0.5 }, 800, function() {
                    $(this).css("background-image", "url('" + images[currentIndex] + "')");
                    $(this).animate({ opacity: 1 }, 800);
                });
            }, 4000);
        }
    }

    addtoAddons("addon-zeus", ["assets/img/zeus1.jpg", "assets/img/zeus2.jpg", "assets/img/zeus3.jpg"]);
    addtoAddons("addon-acropolis", ["assets/img/acropolis1.jpg", "assets/img/acropolis2.jpg", "assets/img/acropolis3.jpg"]);
    addtoAddons("addon-greek-night", ["assets/img/greek1.jpg", "assets/img/greek2.jpg", "assets/img/greek3.jpg"]);
    addtoAddons("addon-boat", ["assets/img/boat1.jpg", "assets/img/boat2.jpg", "assets/img/boat3.jpg"]);
});