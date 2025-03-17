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

    // प्रत्येक ऐप के लिए डेटा सेट करें
    if (app === 'whatsapp') {
        data = {
            title: "व्हाट्सएप गाइड",
            iconClass: "fab fa-whatsapp",
            guide: [
                "ऐप स्टोर से व्हाट्सएप डाउनलोड और इंस्टॉल करें।",
                "ऐप खोलें और शर्तों और नियमों से सहमत हों।",
                "अपना फोन नंबर डालें और कोड से सत्यापित करें।",
                "नाम और तस्वीर के साथ अपनी प्रोफ़ाइल सेट करें।",
                "अपने संपर्कों के साथ चैट शुरू करें।",
                "वॉयस या वीडियो कॉल करें।"
            ],
            security: [
                "संदेशों के लिए एंड-टू-एंड एन्क्रिप्शन।",
                "अतिरिक्त सुरक्षा के लिए टू-स्टेप वेरिफिकेशन।",
                "कौन आपकी प्रोफ़ाइल फ़ोटो देख सकता है, इसे नियंत्रित करें।",
                "संदिग्ध संपर्कों की रिपोर्ट करें और उन्हें ब्लॉक करें।"
            ]
        };
    } else if (app === 'instagram') {
        data = {
            title: "इंस्टाग्राम गाइड",
            iconClass: "fab fa-instagram",
            guide: [
                "ऐप स्टोर से इंस्टाग्राम डाउनलोड करें।",
                "अपना ईमेल या फ़ोन नंबर के साथ साइन अप करें।",
                "तस्वीर के साथ अपनी प्रोफ़ाइल सेट करें।",
                "अपने दोस्तों को फॉलो करना शुरू करें।",
                "फोटो, वीडियो या स्टोरी साझा करें।",
                "पोस्ट को लाइक और कमेंट करके सहभागिता करें।"
            ],
            security: [
                "टू-फैक्टर ऑथेंटिकेशन सक्षम करें।",
                "कौन आपकी पोस्ट देख सकता है, इसे नियंत्रित करें।",
                "संदिग्ध उपयोगकर्ताओं को ब्लॉक और रिपोर्ट करें।",
                "थर्ड-पार्टी ऐप एक्सेस की समीक्षा करें।"
            ]
        };
    } else if (app === 'facebook') {
        data = {
            title: "फेसबुक गाइड",
            iconClass: "fab fa-facebook",
            guide: [
                "ऐप स्टोर से फेसबुक डाउनलोड करें।",
                "अपने ईमेल या फोन नंबर से साइन अप करें।",
                "नाम और तस्वीर के साथ अपनी प्रोफ़ाइल सेट करें।",
                "मित्र अनुरोध भेजकर दोस्तों से कनेक्ट करें।",
                "अपडेट, फोटो और वीडियो पोस्ट करें।",
                "लाइक्स और कमेंट्स के माध्यम से सहभागिता करें।"
            ],
            security: [
                "पोस्ट के लिए गोपनीयता सेटिंग्स सेट करें।",
                "टू-फैक्टर ऑथेंटिकेशन सक्षम करें।",
                "नकली खातों को ब्लॉक और रिपोर्ट करें।",
                "फेसबुक से जुड़े ऐप्स और वेबसाइटों की समीक्षा करें।"
            ]
        };
    } else if (app === 'youtube') {
        data = {
            title: "यूट्यूब गाइड",
            iconClass: "fab fa-youtube",
            guide: [
                "ऐप स्टोर से यूट्यूब डाउनलोड करें।",
                "अपने गूगल अकाउंट से साइन इन करें।",
                "अपने पसंदीदा चैनलों को सब्सक्राइब करें।",
                "वीडियो को लाइक, कमेंट और शेयर करें।",
                "अपने खुद के वीडियो बनाएं और अपलोड करें।",
                "लाइक और शेयर करके कंटेंट के साथ सहभागिता करें।"
            ],
            security: [
                "कौन आपके वीडियो पर कमेंट कर सकता है, इसे नियंत्रित करें।",
                "सुरक्षित सामग्री के लिए प्रतिबंधित मोड सक्षम करें।",
                "असभ्य वीडियो की रिपोर्ट करें।",
                "अपने वीडियो के लिए गोपनीयता सेटिंग्स प्रबंधित करें।"
            ]
        };
    }

    // संवाद सामग्री को अपडेट करें
    dialogIcon.className = data.iconClass + " fa-4x";
    dialogTitle.innerText = data.title;
    appName.innerText = app.charAt(0).toUpperCase() + app.slice(1);

    // गाइड स्टेप्स जोड़ें
    guideSteps.innerHTML = '';
    data.guide.forEach(step => {
        let li = document.createElement('li');
        li.innerText = step;
        guideSteps.appendChild(li);
    });

    // सुरक्षा विशेषताएँ जोड़ें
    securityFeatures.innerHTML = '';
    data.security.forEach(feature => {
        let li = document.createElement('li');
        li.innerText = feature;
        securityFeatures.appendChild(li);
    });

    // संवाद बॉक्स दिखाएँ
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

