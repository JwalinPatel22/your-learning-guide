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

    // Set data for each app
    if (app === 'whatsapp') {
        data = {
            title: "WhatsApp Guide",
            iconClass: "fab fa-whatsapp",
            guide: [
                "Download and install WhatsApp from the app store.",
                "Open the app and agree to the terms and conditions.",
                "Enter your phone number and verify it with a code.",
                "Set up your profile with a name and picture.",
                "Start chatting with your contacts.",
                "Make voice or video calls."
            ],
            security: [
                "End-to-end encryption for messages.",
                "Two-step verification for added security.",
                "Control who can see your profile photo.",
                "Report and block suspicious contacts."
            ]
        };
    } else if (app === 'instagram') {
        data = {
            title: "Instagram Guide",
            iconClass: "fab fa-instagram",
            guide: [
                "Download Instagram from the app store.",
                "Sign up with your email or phone number.",
                "Set up your profile with a picture.",
                "Start following your friends.",
                "Share photos, videos, or stories.",
                "Engage with posts by liking and commenting."
            ],
            security: [
                "Enable two-factor authentication.",
                "Control who can see your posts.",
                "Block and report suspicious users.",
                "Review third-party app access."
            ]
        };
    } else if (app === 'facebook') {
        data = {
            title: "Facebook Guide",
            iconClass: "fab fa-facebook",
            guide: [
                "Download Facebook from the app store.",
                "Sign up with your email or phone number.",
                "Set up your profile with a name and picture.",
                "Connect with friends by sending friend requests.",
                "Post updates, photos, and videos.",
                "Engage with others through likes and comments."
            ],
            security: [
                "Set privacy settings for posts.",
                "Enable two-factor authentication.",
                "Block and report fake accounts.",
                "Review apps and websites connected to Facebook."
            ]
        };
    } else if (app === 'youtube') {
        data = {
            title: "YouTube Guide",
            iconClass: "fab fa-youtube",
            guide: [
                "Download YouTube from the app store.",
                "Sign in with your Google account.",
                "Subscribe to your favorite channels.",
                "Like, comment, and share videos.",
                "Create your own videos and upload them.",
                "Engage with content by liking and sharing."
            ],
            security: [
                "Control who can comment on your videos.",
                "Enable Restricted Mode for safe content.",
                "Report inappropriate videos.",
                "Manage privacy settings for your videos."
            ]
        };
    }

    // Update dialog content
    dialogIcon.className = data.iconClass + " fa-4x";
    dialogTitle.innerText = data.title;
    appName.innerText = app.charAt(0).toUpperCase() + app.slice(1);

    // Populate the steps
    guideSteps.innerHTML = '';
    data.guide.forEach(step => {
        let li = document.createElement('li');
        li.innerText = step;
        guideSteps.appendChild(li);
    });

    // Populate the security features
    securityFeatures.innerHTML = '';
    data.security.forEach(feature => {
        let li = document.createElement('li');
        li.innerText = feature;
        securityFeatures.appendChild(li);
    });

    // Show the dialog box
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

