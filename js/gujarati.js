(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Client carousel
  $(".client-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 90,
    dots: false,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
})(jQuery);

function openDialog(app) {
  const dialogIcon = document.getElementById("dialog-icon");
  const dialogTitle = document.getElementById("dialog-title");
  const appName = document.getElementById("app-name");
  const guideSteps = document.getElementById("guide-steps");
  const securityFeatures = document.getElementById("security-features");
  const video = document.getElementById("video");

  let data = {};

  // દરેક એપ માટે માહિતી
  const appData = {
    whatsapp: {
      title: "વોટ્સએપ માર્ગદર્શિકા",
      iconClass: "fab fa-whatsapp",
      guide: [
        "એપ સ્ટોરમાંથી વોટ્સએપ ડાઉનલોડ કરો અને ઇન્સ્ટોલ કરો.",
        "એપ ખોલો અને નિયમો અને શરતો સ્વીકારો.",
        "તમારો ફોન નંબર દાખલ કરો અને ઓટીપી દ્વારા ચકાસણી કરો.",
        "તમારું નામ અને પ્રોફાઇલ ફોટો સેટ કરો.",
        "તમારા સંપર્કો સાથે ચેટ શરૂ કરો.",
        "વોઇસ અથવા વિડિઓ કોલ કરો.",
      ],
      security: [
        "સંદેશાઓ માટે એન્ડ-ટુ-એન્ડ એન્ક્રિપ્શન.",
        "વધુ સુરક્ષ માટે બે-અપલાંગ ચકાસણી.",
        "તમારા પ્રોફાઇલ ફોટો કોણ જોઈ શકે તે નિયંત્રિત કરો.",
        "સંદિગ્ધ સંપર્કોને રિપોર્ટ કરો અને બ્લોક કરો.",
      ],
      videoEmbed: "https://www.youtube.com/embed/fjVlDYu6erU",
    },
    instagram: {
      title: "ઇન્સ્ટાગ્રામ માર્ગદર્શિકા",
      iconClass: "fab fa-instagram",
      guide: [
        "એપ સ્ટોરમાંથી ઇન્સ્ટાગ્રામ ડાઉનલોડ કરો.",
        "તમારા ઈમેલ અથવા ફોન નંબરથી સાઇન અપ કરો.",
        "તમારી પ્રોફાઇલ ફોટો સેટ કરો.",
        "તમારા મિત્રોનું અનુસરણ (Follow) શરૂ કરો.",
        "ફોટા, વિડિઓ અથવા સ્ટોરી શેર કરો.",
        "પોસ્ટને લાઈક અને ટિપ્પણી (કમેન્ટ) કરો.",
      ],
      security: [
        "બે-અપલાંગ ચકાસણી સક્રિય કરો.",
        "તમારી પોસ્ટ કોણ જોઈ શકે તે નિયંત્રિત કરો.",
        "સંદિગ્ધ વપરાશકર્તાઓને બ્લોક કરો અને રિપોર્ટ કરો.",
        "ત્રીજા પક્ષ (Third-party) એપ્સની ઍક્સેસ સમીક્ષો.",
      ],
      videoEmbed: "https://www.youtube.com/embed/2YSB468mn4M",
    },
    facebook: {
      title: "ફેસબુક માર્ગદર્શિકા",
      iconClass: "fab fa-facebook",
      guide: [
        "એપ સ્ટોરમાંથી ફેસબુક ડાઉનલોડ કરો.",
        "તમારા ઈમેલ અથવા ફોન નંબરથી સાઇન અપ કરો.",
        "તમારું પ્રોફાઇલ સેટ કરો.",
        "મિત્રોને ફ્રેન્ડ રિકવેસ્ટ મોકલો.",
        "અપડેટ્સ, ફોટા, અને વિડિઓ પોસ્ટ કરો.",
        "લાઈક અને ટિપ્પણી દ્વારા અન્ય લોકો સાથે જોડાઓ.",
      ],
      security: [
        "તમારા પોસ્ટ માટે ગોપનીયતા (Privacy) સેટિંગ્સ સેટ કરો.",
        "બે-અપલાંગ ચકાસણી સક્રિય કરો.",
        "નકલી (Fake) એકાઉન્ટ બ્લોક કરો અને રિપોર્ટ કરો.",
        "ફેસબુક સાથે જોડાયેલી એપ્સ અને વેબસાઇટ્સની સમીક્ષા કરો.",
      ],
      videoEmbed: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    },
    youtube: {
      title: "યુટ્યૂબ માર્ગદર્શિકા",
      iconClass: "fab fa-youtube",
      guide: [
        "એપ સ્ટોરમાંથી યુટ્યૂબ ડાઉનલોડ કરો.",
        "તમારા ગૂગલ એકાઉન્ટથી સાઇન ઇન કરો.",
        "તમારા મનપસંદ ચેનલોને સબ્સ્ક્રાઇબ કરો.",
        "વિડિઓ લાઈક, ટિપ્પણી અને શેર કરો.",
        "તમારા પોતાના વિડિઓ બનાવીને અપલોડ કરો.",
        "વિડિઓ સાથે ઇન્ટરએક્ટ કરો.",
      ],
      security: [
        "તમારા વિડિઓ પર કોમેન્ટ કોણ કરી શકે તે નિયંત્રિત કરો.",
        "સલામત સામગ્રી માટે 'Restricted Mode' સક્રિય કરો.",
        "અયોગ્ય (Inappropriate) વિડિઓઝ રિપોર્ટ કરો.",
        "તમારા વિડિઓ માટે ગોપનીયતા સેટિંગ્સ મેનેજ કરો.",
      ],
      videoEmbed:
        "https://www.youtube.com/watch?v=KD4JiwyXpoc&list=PLgc0GNip2uYX8Wm0c9GAfJsLrEBWxswyA&index=2",
    },
  };

  if (appData[app]) {
    data = appData[app];
  } else {
    console.error("અમાન્ય એપ નામ:", app);
    return;
  }

  // ડાયલોગ બોક્સનું કન્ટેન્ટ અપડેટ કરો
  dialogIcon.className = data.iconClass + " fa-4x";
  dialogTitle.innerText = data.title;
  appName.innerText = app.charAt(0).toUpperCase() + app.slice(1);

  // માર્ગદર્શિકા સ્ટેપ્સ ઉમેરો
  guideSteps.innerHTML = "";
  data.guide.forEach((step) => {
    let li = document.createElement("li");
    li.innerText = step;
    guideSteps.appendChild(li);
  });

  // સુરક્ષા સુવિધાઓ ઉમેરો
  securityFeatures.innerHTML = "";
  data.security.forEach((feature) => {
    let li = document.createElement("li");
    li.innerText = feature;
    securityFeatures.appendChild(li);
  });

  // YouTube વિડિઓ એમ્બેડ કરો
  video.innerHTML = "";
  if (data.videoEmbed) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", data.videoEmbed);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", "true");
    video.appendChild(iframe);
  }

  // ડાયલોગ બોક્સ બતાવો
  document.getElementById("dialog-box").style.display = "block";
}

function closeDialog() {
  document.getElementById("dialog-box").style.display = "none";
}

// langauge change

// Add this script at the end of your body tag or in a separate JS file
document.addEventListener("DOMContentLoaded", function () {
  const languageDropdown = document.querySelector(".dropdown-menu");
  languageDropdown.addEventListener("click", function (e) {
    if (e.target.classList.contains("dropdown-item")) {
      const lang = e.target.getAttribute("data-lang");
      changeLanguage(lang);
    }
  });
});

function changeLanguage(lang) {
  // Fetch the language JSON file
  fetch(`languages/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Update all elements with a 'data-translate' attribute
      document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (data[key]) {
          element.textContent = data[key];
        }
      });
    })
    .catch((error) => console.error("Error loading language file:", error));
}
