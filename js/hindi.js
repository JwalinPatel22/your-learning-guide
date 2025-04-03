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

// function openDialog(app) {
//   const dialogIcon = document.getElementById("dialog-icon");
//   const dialogTitle = document.getElementById("dialog-title");
//   const appName = document.getElementById("app-name");
//   const guideSteps = document.getElementById("guide-steps");
//   const securityFeatures = document.getElementById("security-features");

//   let data = {};

//   // प्रत्येक ऐप के लिए डेटा सेट करें
//   if (app === "whatsapp") {
//     data = {
//       title: "व्हाट्सएप गाइड",
//       iconClass: "fab fa-whatsapp",
//       guide: [
//         "ऐप स्टोर से व्हाट्सएप डाउनलोड और इंस्टॉल करें।",
//         "ऐप खोलें और शर्तों और नियमों से सहमत हों।",
//         "अपना फोन नंबर डालें और कोड से सत्यापित करें।",
//         "नाम और तस्वीर के साथ अपनी प्रोफ़ाइल सेट करें।",
//         "अपने संपर्कों के साथ चैट शुरू करें।",
//         "वॉयस या वीडियो कॉल करें।",
//       ],
//       security: [
//         "संदेशों के लिए एंड-टू-एंड एन्क्रिप्शन।",
//         "अतिरिक्त सुरक्षा के लिए टू-स्टेप वेरिफिकेशन।",
//         "कौन आपकी प्रोफ़ाइल फ़ोटो देख सकता है, इसे नियंत्रित करें।",
//         "संदिग्ध संपर्कों की रिपोर्ट करें और उन्हें ब्लॉक करें।",
//       ],
//     };
//   } else if (app === "instagram") {
//     data = {
//       title: "इंस्टाग्राम गाइड",
//       iconClass: "fab fa-instagram",
//       guide: [
//         "ऐप स्टोर से इंस्टाग्राम डाउनलोड करें।",
//         "अपना ईमेल या फ़ोन नंबर के साथ साइन अप करें।",
//         "तस्वीर के साथ अपनी प्रोफ़ाइल सेट करें।",
//         "अपने दोस्तों को फॉलो करना शुरू करें।",
//         "फोटो, वीडियो या स्टोरी साझा करें।",
//         "पोस्ट को लाइक और कमेंट करके सहभागिता करें।",
//       ],
//       security: [
//         "टू-फैक्टर ऑथेंटिकेशन सक्षम करें।",
//         "कौन आपकी पोस्ट देख सकता है, इसे नियंत्रित करें।",
//         "संदिग्ध उपयोगकर्ताओं को ब्लॉक और रिपोर्ट करें।",
//         "थर्ड-पार्टी ऐप एक्सेस की समीक्षा करें।",
//       ],
//     };
//   } else if (app === "facebook") {
//     data = {
//       title: "फेसबुक गाइड",
//       iconClass: "fab fa-facebook",
//       guide: [
//         "ऐप स्टोर से फेसबुक डाउनलोड करें।",
//         "अपने ईमेल या फोन नंबर से साइन अप करें।",
//         "नाम और तस्वीर के साथ अपनी प्रोफ़ाइल सेट करें।",
//         "मित्र अनुरोध भेजकर दोस्तों से कनेक्ट करें।",
//         "अपडेट, फोटो और वीडियो पोस्ट करें।",
//         "लाइक्स और कमेंट्स के माध्यम से सहभागिता करें।",
//       ],
//       security: [
//         "पोस्ट के लिए गोपनीयता सेटिंग्स सेट करें।",
//         "टू-फैक्टर ऑथेंटिकेशन सक्षम करें।",
//         "नकली खातों को ब्लॉक और रिपोर्ट करें।",
//         "फेसबुक से जुड़े ऐप्स और वेबसाइटों की समीक्षा करें।",
//       ],
//     };
//   } else if (app === "youtube") {
//     data = {
//       title: "यूट्यूब गाइड",
//       iconClass: "fab fa-youtube",
//       guide: [
//         "ऐप स्टोर से यूट्यूब डाउनलोड करें।",
//         "अपने गूगल अकाउंट से साइन इन करें।",
//         "अपने पसंदीदा चैनलों को सब्सक्राइब करें।",
//         "वीडियो को लाइक, कमेंट और शेयर करें।",
//         "अपने खुद के वीडियो बनाएं और अपलोड करें।",
//         "लाइक और शेयर करके कंटेंट के साथ सहभागिता करें।",
//       ],
//       security: [
//         "कौन आपके वीडियो पर कमेंट कर सकता है, इसे नियंत्रित करें।",
//         "सुरक्षित सामग्री के लिए प्रतिबंधित मोड सक्षम करें।",
//         "असभ्य वीडियो की रिपोर्ट करें।",
//         "अपने वीडियो के लिए गोपनीयता सेटिंग्स प्रबंधित करें।",
//       ],
//     };
//   }

//   // संवाद सामग्री को अपडेट करें
//   dialogIcon.className = data.iconClass + " fa-4x";
//   dialogTitle.innerText = data.title;
//   appName.innerText = app.charAt(0).toUpperCase() + app.slice(1);

//   // गाइड स्टेप्स जोड़ें
//   guideSteps.innerHTML = "";
//   data.guide.forEach((step) => {
//     let li = document.createElement("li");
//     li.innerText = step;
//     guideSteps.appendChild(li);
//   });

//   // सुरक्षा विशेषताएँ जोड़ें
//   securityFeatures.innerHTML = "";
//   data.security.forEach((feature) => {
//     let li = document.createElement("li");
//     li.innerText = feature;
//     securityFeatures.appendChild(li);
//   });

//   // संवाद बॉक्स दिखाएँ
//   document.getElementById("dialog-box").style.display = "block";
// }

function openDialog(app) {
  const dialogIcon = document.getElementById("dialog-icon");
  const dialogTitle = document.getElementById("dialog-title");
  const appName = document.getElementById("app-name");
  const guideSteps = document.getElementById("guide-steps");
  const securityFeatures = document.getElementById("security-features");
  const video = document.getElementById("video");

  let data = {};

  // Data for each app
  const appData = {
    whatsapp: {
      title: "व्हाट्सएप गाइड",
      iconClass: "fab fa-whatsapp",
      guide: [
        "ऐप स्टोर से व्हाट्सएप डाउनलोड और इंस्टॉल करें।",
        "ऐप खोलें और नियम व शर्तें स्वीकार करें।",
        "अपना फ़ोन नंबर डालें और कोड से सत्यापित करें।",
        "अपने नाम और प्रोफ़ाइल फ़ोटो के साथ सेटअप करें।",
        "अपनी संपर्क सूची में चैट करना शुरू करें।",
        "वॉइस या वीडियो कॉल करें।",
      ],
      security: [
        "संदेशों के लिए एंड-टू-एंड एन्क्रिप्शन।",
        "सुरक्षा बढ़ाने के लिए दो-चरणीय सत्यापन।",
        "नियंत्रण करें कि आपकी प्रोफ़ाइल फ़ोटो कौन देख सकता है।",
        "संदिग्ध संपर्कों को रिपोर्ट करें और ब्लॉक करें।",
      ],
      videoEmbed: "https://www.youtube.com/embed/fjVlDYu6erU",
    },
    instagram: {
      title: "इंस्टाग्राम गाइड",
      iconClass: "fab fa-instagram",
      guide: [
        "ऐप स्टोर से इंस्टाग्राम डाउनलोड करें।",
        "अपने ईमेल या फ़ोन नंबर से साइन अप करें।",
        "प्रोफ़ाइल फ़ोटो सेट करें।",
        "अपने दोस्तों को फॉलो करना शुरू करें।",
        "फोटो, वीडियो, या स्टोरी शेयर करें।",
        "पोस्ट्स को लाइक और कमेंट करें।",
      ],
      security: [
        "दो-चरणीय सत्यापन सक्षम करें।",
        "नियंत्रण करें कि आपकी पोस्ट कौन देख सकता है।",
        "संदिग्ध उपयोगकर्ताओं को ब्लॉक और रिपोर्ट करें।",
        "थर्ड-पार्टी ऐप एक्सेस की समीक्षा करें।",
      ],
      videoEmbed: "https://www.youtube.com/embed/2YSB468mn4M",
    },
    facebook: {
      title: "फेसबुक गाइड",
      iconClass: "fab fa-facebook",
      guide: [
        "ऐप स्टोर से फेसबुक डाउनलोड करें।",
        "अपने ईमेल या फ़ोन नंबर से साइन अप करें।",
        "प्रोफ़ाइल सेट करें।",
        "मित्रों को फ्रेंड रिक्वेस्ट भेजें।",
        "अपडेट, फोटो, और वीडियो पोस्ट करें।",
        "लाइक और कमेंट के ज़रिए दूसरों के साथ जुड़ें।",
      ],
      security: [
        "पोस्ट्स के लिए गोपनीयता सेटिंग्स सेट करें।",
        "दो-चरणीय सत्यापन सक्षम करें।",
        "फर्जी खातों को ब्लॉक और रिपोर्ट करें।",
        "फेसबुक से जुड़े ऐप्स और वेबसाइट की समीक्षा करें।",
      ],
      videoEmbed: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    },
    youtube: {
      title: "यूट्यूब गाइड",
      iconClass: "fab fa-youtube",
      guide: [
        "ऐप स्टोर से यूट्यूब डाउनलोड करें।",
        "अपने गूगल खाते से साइन इन करें।",
        "अपने पसंदीदा चैनलों को सब्सक्राइब करें।",
        "वीडियो लाइक, कमेंट और शेयर करें।",
        "अपने खुद के वीडियो बनाकर अपलोड करें।",
        "कंटेंट से इंटरैक्ट करें।",
      ],
      security: [
        "नियंत्रण करें कि आपके वीडियो पर कौन कमेंट कर सकता है।",
        "सुरक्षित सामग्री के लिए 'Restricted Mode' सक्षम करें।",
        "अप्रासंगिक वीडियो रिपोर्ट करें।",
        "अपने वीडियो की गोपनीयता सेटिंग्स प्रबंधित करें।",
      ],
      videoEmbed:
        "https://www.youtube.com/watch?v=KD4JiwyXpoc&list=PLgc0GNip2uYX8Wm0c9GAfJsLrEBWxswyA&index=2",
    },
  };

  if (appData[app]) {
    data = appData[app];
  } else {
    console.error("Invalid app name:", app);
    return;
  }

  // Update dialog content
  dialogIcon.className = data.iconClass + " fa-4x";
  dialogTitle.innerText = data.title;
  appName.innerText = app.charAt(0).toUpperCase() + app.slice(1);

  // Populate the guide steps
  guideSteps.innerHTML = "";
  data.guide.forEach((step) => {
    let li = document.createElement("li");
    li.innerText = step;
    guideSteps.appendChild(li);
  });

  // Populate the security features
  securityFeatures.innerHTML = "";
  data.security.forEach((feature) => {
    let li = document.createElement("li");
    li.innerText = feature;
    securityFeatures.appendChild(li);
  });

  // Embed YouTube Video
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

  // Show the dialog box
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
