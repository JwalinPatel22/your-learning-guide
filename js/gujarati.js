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

    // દરેક એપ માટે ડેટા સેટ કરો
    if (app === 'whatsapp') {
        data = {
            title: "વોટ્સએપ માર્ગદર્શિકા",
            iconClass: "fab fa-whatsapp",
            guide: [
                "એપ સ્ટોરમાંથી વોટ્સએપ ડાઉનલોડ અને ઇન્સ્ટોલ કરો.",
                "એપ ખોલો અને શરતો અને નિયમોને સ્વીકારો.",
                "તમારો ફોન નંબર દાખલ કરો અને કોડથી ચકાસણી કરો.",
                "તમારા નામ અને તસ્વીર સાથે પ્રોફાઇલ સેટ કરો.",
                "તમારા સંપર્કો સાથે ચેટ શરૂ કરો.",
                "વોઇસ અથવા વિડિઓ કોલ કરો."
            ],
            security: [
                "સંદેશાઓ માટે એન્ડ-ટુ-એન્ડ એનક્રિપ્શન.",
                "વધારાની સુરક્ષ માટે બે-પગથિયા ચકાસણી.",
                "કોણ તમારી પ્રોફાઇલ ફોટો જોઈ શકે છે, તે નિયંત્રિત કરો.",
                "શંકાસ્પદ સંપર્કોને બ્લોક અને રિપોર્ટ કરો."
            ]
        };
    } else if (app === 'instagram') {
        data = {
            title: "ઇન્સ્ટાગ્રામ માર્ગદર્શિકા",
            iconClass: "fab fa-instagram",
            guide: [
                "એપ સ્ટોરમાંથી ઇન્સ્ટાગ્રામ ડાઉનલોડ કરો.",
                "તમારા ઇમેઇલ અથવા ફોન નંબરથી સાઇન અપ કરો.",
                "તમારા ફોટા સાથે પ્રોફાઇલ સેટ કરો.",
                "તમારા મિત્રોનું અનુસરણ શરૂ કરો.",
                "ફોટા, વિડિઓ અથવા સ્ટોરી શેર કરો.",
                "પોસ્ટ પર લાઇક અને કોમેન્ટ દ્વારા જોડાઓ."
            ],
            security: [
                "બે-પગથિયા ચકાસણી સક્ષમ કરો.",
                "કોણ તમારી પોસ્ટ જોઈ શકે છે, તે નિયંત્રિત કરો.",
                "શંકાસ્પદ વપરાશકર્તાઓને બ્લોક અને રિપોર્ટ કરો.",
                "ત્રીજા પક્ષના એપ્સની ઍક્સેસ સમીક્ષા કરો."
            ]
        };
    } else if (app === 'facebook') {
        data = {
            title: "ફેસબુક માર્ગદર્શિકા",
            iconClass: "fab fa-facebook",
            guide: [
                "એપ સ્ટોરમાંથી ફેસબુક ડાઉનલોડ કરો.",
                "તમારા ઇમેઇલ અથવા ફોન નંબરથી સાઇન અપ કરો.",
                "તમારા નામ અને તસ્વીર સાથે પ્રોફાઇલ સેટ કરો.",
                "મિત્રોને મિત્ર વિનંતી મોકલીને જોડાઓ.",
                "અપડેટ્સ, ફોટા અને વિડિઓઝ પોસ્ટ કરો.",
                "લાઇક અને કોમેન્ટ દ્વારા જોડાઓ."
            ],
            security: [
                "તમારા પોસ્ટ માટે ગોપનીયતા સેટિંગ્સ સેટ કરો.",
                "બે-પગથિયા ચકાસણી સક્ષમ કરો.",
                "ખોટા એકાઉન્ટ્સને બ્લોક અને રિપોર્ટ કરો.",
                "ફેસબુક સાથે જોડાયેલા એપ્સ અને વેબસાઇટ્સની સમીક્ષા કરો."
            ]
        };
    } else if (app === 'youtube') {
        data = {
            title: "યૂટ્યુબ માર્ગદર્શિકા",
            iconClass: "fab fa-youtube",
            guide: [
                "એપ સ્ટોરમાંથી યૂટ્યુબ ડાઉનલોડ કરો.",
                "તમારા ગૂગલ એકાઉન્ટથી સાઇન ઇન કરો.",
                "તમારા પ્રિય ચેનલોને સબ્સ્ક્રાઇબ કરો.",
                "વિડિઓઝને લાઇક, કોમેન્ટ અને શેર કરો.",
                "તમારા પોતાના વિડિઓ બનાવો અને અપલોડ કરો.",
                "લાઇક અને શેર કરીને સામગ્રી સાથે જોડાઓ."
            ],
            security: [
                "કોણ તમારા વિડિઓ પર કોમેન્ટ કરી શકે છે, તે નિયંત્રિત કરો.",
                "સુરક્ષિત સામગ્રી માટે પ્રતિબંધિત સ્થિતિ સક્ષમ કરો.",
                "અયોગ્ય વિડિઓઝને રિપોર્ટ કરો.",
                "તમારા વિડિઓ માટે ગોપનીયતા સેટિંગ્સ મેનેજ કરો."
            ]
        };
    }

    // ડાયલૉગ સામગ્રી અપડેટ કરો
    dialogIcon.className = data.iconClass + " fa-4x";
    dialogTitle.innerText = data.title;
    appName.innerText = app.charAt(0).toUpperCase() + app.slice(1);

    // માર્ગદર્શિકા પગલાં ઉમેરો
    guideSteps.innerHTML = '';
    data.guide.forEach(step => {
        let li = document.createElement('li');
        li.innerText = step;
        guideSteps.appendChild(li);
    });

    // સુરક્ષા લક્ષણો ઉમેરો
    securityFeatures.innerHTML = '';
    data.security.forEach(feature => {
        let li = document.createElement('li');
        li.innerText = feature;
        securityFeatures.appendChild(li);
    });

    // સંવાદ બોક્સ બતાવો
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

