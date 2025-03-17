(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

function openDialog(app) {
    const dialogIcon = document.getElementById("dialog-icon");
    const dialogTitle = document.getElementById("dialog-title");
    const appName = document.getElementById("app-name");
    const guideSteps = document.getElementById("guide-steps");
    const securityFeatures = document.getElementById("security-features");

    let data = {};

    // ஒவ்வொரு பயன்பாட்டிற்கும் தரவுகளை அமைக்கவும்
    if (app === 'whatsapp') {
        data = {
            title: "வாட்ஸ்அப் வழிகாட்டி",
            iconClass: "fab fa-whatsapp",
            guide: [
                "பயன்பாட்டு கடைக்குச் சென்று வாட்ஸ்அப்பை பதிவிறக்கம் செய்து நிறுவவும்.",
                "பயன்பாட்டை திறந்து விதிமுறைகளை ஒப்புக்கொள்ளவும்.",
                "உங்கள் கைப்பேசி எண்ணை உள்ளீடு செய்து, அனுப்பப்பட்ட குறியீட்டின் மூலம் சரிபார்க்கவும்.",
                "உங்கள் பெயர் மற்றும் புகைப்படத்துடன் உங்கள் சுயவிவரத்தை அமைக்கவும்.",
                "உங்கள் தொடர்புகளுடன் உரையாடலைத் தொடங்கவும்.",
                "ஒலி அல்லது வீடியோ அழைப்புகளைச் செய்யவும்."
            ],
            security: [
                "செய்திகளுக்கான முற்றிலும் முடிவு செய்ய முடியாத குறியாக்கம் (End-to-end encryption).",
                "கூடுதல் பாதுகாப்பிற்காக இரு நிலை உறுதிப்படுத்தல்.",
                "யார் உங்கள் சுயவிவரப் புகைப்படத்தைக் காணலாம் என்பதை கட்டுப்படுத்தவும்.",
                "சந்தேகமான தொடர்புகளைத் தடுக்கவும் மற்றும் புகாரளிக்கவும்."
            ]
        };
    } else if (app === 'instagram') {
        data = {
            title: "இன்ஸ்டாகிராம் வழிகாட்டி",
            iconClass: "fab fa-instagram",
            guide: [
                "பயன்பாட்டு கடையிலிருந்து இன்ஸ்டாகிராமைப் பதிவிறக்கம் செய்யவும்.",
                "உங்கள் மின்னஞ்சல் அல்லது கைப்பேசி எண்ணுடன் பதிவு செய்யவும்.",
                "உங்கள் புகைப்படத்துடன் சுயவிவரத்தை அமைக்கவும்.",
                "உங்கள் நண்பர்களை பின்தொடரத் தொடங்கவும்.",
                "புகைப்படங்கள், வீடியோக்கள், அல்லது கதைகளைப் பகிரவும்.",
                "பதிவுகளை லைக் மற்றும் கருத்துச் சொல்லுவதன் மூலம் ஈடுபடவும்."
            ],
            security: [
                "இரு நிலை உறுதிப்படுத்தலை இயக்கவும்.",
                "யார் உங்கள் பதிவுகளைப் பார்க்க முடியும் என்பதை கட்டுப்படுத்தவும்.",
                "சந்தேகமான பயனர்களைத் தடுக்கவும் மற்றும் புகாரளிக்கவும்.",
                "மூன்றாம் தரப்பு பயன்பாடுகளின் அணுகலை மதிப்பாய்வு செய்யவும்."
            ]
        };
    } else if (app === 'facebook') {
        data = {
            title: "ஃபேஸ்புக் வழிகாட்டி",
            iconClass: "fab fa-facebook",
            guide: [
                "பயன்பாட்டு கடையிலிருந்து ஃபேஸ்புக் பதிவிறக்கம் செய்யவும்.",
                "உங்கள் மின்னஞ்சல் அல்லது கைப்பேசி எண்ணுடன் பதிவு செய்யவும்.",
                "உங்கள் பெயர் மற்றும் புகைப்படத்துடன் சுயவிவரத்தை அமைக்கவும்.",
                "நண்பர்களுடன் இணைவதற்காக நட்புக் கோரிக்கைகளை அனுப்பவும்.",
                "புதுப்பிப்புகள், புகைப்படங்கள், மற்றும் வீடியோக்களை பகிரவும்.",
                "லைக் மற்றும் கருத்துகள் மூலம் மற்றவர்களுடன் ஈடுபடவும்."
            ],
            security: [
                "உங்கள் பதிவுகளுக்கான தனியுரிமை அமைப்புகளை நிர்ணயிக்கவும்.",
                "இரு நிலை உறுதிப்படுத்தலை இயக்கவும்.",
                "கள்ள கணக்குகளைத் தடுக்கவும் மற்றும் புகாரளிக்கவும்.",
                "ஃபேஸ்புக்குடன் இணைக்கப்பட்ட பயன்பாடுகள் மற்றும் வலைத்தளங்களை மதிப்பாய்வு செய்யவும்."
            ]
        };
    } else if (app === 'youtube') {
        data = {
            title: "யூட்யூப் வழிகாட்டி",
            iconClass: "fab fa-youtube",
            guide: [
                "பயன்பாட்டு கடையிலிருந்து யூட்யூப் பதிவிறக்கம் செய்யவும்.",
                "உங்கள் கூகுள் கணக்குடன் உள்நுழையவும்.",
                "உங்கள் விருப்பமான சேனல்களை சந்தாதாரராக உள்ளிடவும்.",
                "வீடியோக்களை லைக், கருத்து, மற்றும் பகிர்வு செய்யவும்.",
                "உங்கள் சொந்த வீடியோக்களை உருவாக்கி பதிவேற்றவும்.",
                "வீடியோக்களுக்கு லைக் மற்றும் பகிர்வின் மூலம் ஈடுபடவும்."
            ],
            security: [
                "யார் உங்கள் வீடியோக்களில் கருத்துரைக்க முடியும் என்பதை கட்டுப்படுத்தவும்.",
                "பாதுகாப்பான உள்ளடக்கத்திற்காக கட்டுப்படுத்தப்பட்ட பயன்முறையை இயக்கவும்.",
                "முறைகேடான வீடியோக்களை புகாரளிக்கவும்.",
                "உங்கள் வீடியோக்களுக்கான தனியுரிமை அமைப்புகளை நிர்வகிக்கவும்."
            ]
        };
    }

    // உரையாடல் உள்ளடக்கத்தை புதுப்பிக்கவும்
    dialogIcon.className = data.iconClass + " fa-4x";
    dialogTitle.innerText = data.title;
    appName.innerText = app.charAt(0).toUpperCase() + app.slice(1);

    // வழிகாட்டல் படிகளை சேர்க்கவும்
    guideSteps.innerHTML = '';
    data.guide.forEach(step => {
        let li = document.createElement('li');
        li.innerText = step;
        guideSteps.appendChild(li);
    });

    // பாதுகாப்பு அம்சங்களைச் சேர்க்கவும்
    securityFeatures.innerHTML = '';
    data.security.forEach(feature => {
        let li = document.createElement('li');
        li.innerText = feature;
        securityFeatures.appendChild(li);
    });

    // உரையாடல் பெட்டியை காட்டவும்
    document.getElementById("dialog-box").style.display = "block";
}



function closeDialog() {
    document.getElementById("dialog-box").style.display = "none";
}




// langauge change


// Add this script at the end of your body tag or in a separate JS file
document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.querySelector('.dropdown-menu');
    languageDropdown.addEventListener('click', function(e) {
        if (e.target.classList.contains('dropdown-item')) {
            const lang = e.target.getAttribute('data-lang');
            changeLanguage(lang);
        }
    });
});

function changeLanguage(lang) {
    // Fetch the language JSON file
    fetch(`languages/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Update all elements with a 'data-translate' attribute
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (data[key]) {
                    element.textContent = data[key];
                }
            });
        })
        .catch(error => console.error('Error loading language file:', error));
}

