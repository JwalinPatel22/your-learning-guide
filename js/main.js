(function ($) {
  "use strict";

  $(document).ready(function () {
    // Spinner
    function spinner() {
      setTimeout(function () {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    }
    spinner();

    // Initiate the wow.js animation library
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
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
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
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        992: { items: 5 },
        1200: { items: 6 },
      },
    });

    // Language Change
    $(".dropdown-menu").on("click", ".dropdown-item", function () {
      const lang = $(this).attr("data-lang");
      changeLanguage(lang);
    });

    function changeLanguage(lang) {
      fetch(`languages/${lang}.json`)
        .then((response) => response.json())
        .then((data) => {
          $("[data-translate]").each(function () {
            const key = $(this).attr("data-translate");
            if (data[key]) {
              $(this).text(data[key]);
            }
          });
        })
        .catch((error) => console.error("Error loading language file:", error));
    }
  });
})(jQuery);

function openDialog(app) {
  const dialogIcon = document.getElementById("dialog-icon");
  const dialogTitle = document.getElementById("dialog-title");
  const appName = document.getElementById("app-name");
  const guideSteps = document.getElementById("guide-steps");
  const securityFeatures = document.getElementById("security-features");
  const imageContainer = document.getElementById("image-container");

  let data = {};

  if (app === "axis") {
    data = {
      title: "Axis Mobile Banking Guide",
      iconClass: "fa fa-university",
      guide: [
        "Download the Axis Mobile app from the Play Store or App Store.",
        "Log in using your registered mobile number.",
        "Set up MPIN or fingerprint authentication.",
        "Use quick fund transfers, bill payments, and UPI services.",
        "Manage investments, loans, and accounts in one place.",
      ],
      security: [
        "Multi-factor authentication for transactions.",
        "Instant fraud detection alerts.",
        "Block/unblock cards directly via the app.",
        "24/7 monitoring for suspicious activities.",
      ],
      images: ["axis1.jpg", "axis2.jpg"], // Add actual image paths
    };
  } else if (app === "hdfc") {
    data = {
      title: "HDFC MobileBanking Guide",
      iconClass: "fa fa-money-check-alt",
      guide: [
        "Install HDFC MobileBanking from the app store.",
        "Login with your Customer ID and password.",
        "Enable biometric login for quick access.",
        "Transfer funds using NEFT, RTGS, and UPI.",
        "View account statements and apply for loans.",
      ],
      security: [
        "Secure PIN-based login and OTP authentication.",
        "Set transaction limits to control spending.",
        "Instant card lock/unlock for security.",
        "Monitor real-time transactions with alerts.",
      ],
      images: ["hdfc1.jpg", "hdfc2.jpg"],
    };
  } else if (app === "bob") {
    data = {
      title: "BOB World Guide",
      iconClass: "fa fa-hand-holding-usd",
      guide: [
        "Download and install BOB World from the app store.",
        "Sign in with your Bank of Baroda credentials.",
        "Access seamless banking, fund transfers, and bill payments.",
        "Explore investment opportunities via the app.",
        "Use personalized financial recommendations.",
      ],
      security: [
        "Advanced fraud detection and protection.",
        "Two-factor authentication for transactions.",
        "Self-service card controls to prevent fraud.",
        "Data encryption for user safety.",
      ],
      images: ["bob1.jpg", "bob2.jpg"],
    };
  } else if (app === "yono") {
    data = {
      title: "YONO SBI Guide",
      iconClass: "fa fa-mobile-alt",
      guide: [
        "Download YONO SBI from Google Play or App Store.",
        "Register using your mobile number and OTP verification.",
        "Access a unified banking, shopping, and lifestyle platform.",
        "Apply for loans, investments, and insurance within the app.",
        "Seamlessly manage accounts and transactions.",
      ],
      security: [
        "Secure OTP-based authentication.",
        "Biometric login for added security.",
        "Instant fraud protection and account freeze options.",
        "24/7 banking support with AI-driven insights.",
      ],
      images: ["yono1.jpg", "yono2.jpg"],
    };
  }

  // Update dialog content
  dialogIcon.className = data.iconClass + " fa-4x";
  dialogTitle.innerText = data.title;
  appName.innerText = app.charAt(0).toUpperCase() + app.slice(1);

  // Populate the steps
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

  // Populate images
  imageContainer.innerHTML = "";
  data.images.forEach((imageSrc) => {
    let img = document.createElement("img");
    img.setAttribute("src", imageSrc);
    img.setAttribute("alt", data.title);
    img.style.width = "100%";
    img.style.borderRadius = "10px";
    img.style.marginTop = "10px";
    imageContainer.appendChild(img);
  });

  // Show the dialog box
  document.getElementById("dialog-box").style.display = "block";
}

// Open Dialog Function
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
      title: "WhatsApp Guide",
      iconClass: "fab fa-whatsapp",
      guide: [
        "Download and install WhatsApp from the app store.",
        "Open the app and agree to the terms and conditions.",
        "Enter your phone number and verify it with a code.",
        "Set up your profile with a name and picture.",
        "Start chatting with your contacts.",
        "Make voice or video calls.",
      ],
      security: [
        "End-to-end encryption for messages.",
        "Two-step verification for added security.",
        "Control who can see your profile photo.",
        "Report and block suspicious contacts.",
      ],
      videoEmbed: "https://www.youtube.com/embed/fjVlDYu6erU",
    },
    instagram: {
      title: "Instagram Guide",
      iconClass: "fab fa-instagram",
      guide: [
        "Download Instagram from the app store.",
        "Sign up with your email or phone number.",
        "Set up your profile with a picture.",
        "Start following your friends.",
        "Share photos, videos, or stories.",
        "Engage with posts by liking and commenting.",
      ],
      security: [
        "Enable two-factor authentication.",
        "Control who can see your posts.",
        "Block and report suspicious users.",
        "Review third-party app access.",
      ],
      videoEmbed: "https://www.youtube.com/embed/2YSB468mn4M",
    },
    facebook: {
      title: "Facebook Guide",
      iconClass: "fab fa-facebook",
      guide: [
        "Download Facebook from the app store.",
        "Sign up with your email or phone number.",
        "Set up your profile with a name and picture.",
        "Connect with friends by sending friend requests.",
        "Post updates, photos, and videos.",
        "Engage with others through likes and comments.",
      ],
      security: [
        "Set privacy settings for posts.",
        "Enable two-factor authentication.",
        "Block and report fake accounts.",
        "Review apps and websites connected to Facebook.",
      ],
      videoEmbed: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    },
    youtube: {
      title: "YouTube Guide",
      iconClass: "fab fa-youtube",
      guide: [
        "Download YouTube from the app store.",
        "Sign in with your Google account.",
        "Subscribe to your favorite channels.",
        "Like, comment, and share videos.",
        "Create your own videos and upload them.",
        "Engage with content by liking and sharing.",
      ],
      security: [
        "Control who can comment on your videos.",
        "Enable Restricted Mode for safe content.",
        "Report inappropriate videos.",
        "Manage privacy settings for your videos.",
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

// Close Dialog Function
function closeDialog() {
  document.getElementById("dialog-box").style.display = "none";
}
