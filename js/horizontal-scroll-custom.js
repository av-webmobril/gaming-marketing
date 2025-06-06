gsap.registerPlugin(ScrollTrigger);
function initHorizontalScroll() {
    if (window.innerWidth >= 768) {
        let sections = gsap.utils.toArray(".horzanim");

        // const isMobile = window.innerWidth <= 768; 

        // Initially disable scroll behavior
        document.body.classList.add("disable-scroll");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-scroll-trigger",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".horizontal-scroll-trigger").offsetWidth,
                enabled: false, // Initially disabled
                preventDefault: true // Prevent default scrolling on touch
            }
        });
    }
    else {
        ScrollTrigger.killAll(); // Remove GSAP behavior when screen is smaller
    }
}
        // SPLASH SCREEN ANIMATION & ENABLE SCROLL
        document.querySelector(".go-button").addEventListener("click", function () {
          gsap.to(".splash-screen", {
              y: "-100%",  // Slide down effect
              opacity: 0, // Fade-out effect
              duration: 1,
              ease: "power2.inOut",
              onComplete: function () {
                  document.querySelector(".splash-screen").style.display = "none";
                  document.body.classList.remove("disable-scroll"); // Enable Scroll
                  ScrollTrigger.getAll().forEach(trigger => trigger.enable()); // Enable ScrollTrigger
                  ScrollTrigger.refresh(); // Ensure ScrollTrigger updates
              }
          });
      });
      

        // Reset Scroll Position on Reload
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    
// **Initialize on Load**
initHorizontalScroll();
// **Reinitialize on Resize**
window.addEventListener("resize", () => {
    setTimeout(() => {
        initHorizontalScroll();
    }, 300); // Small delay to avoid laggy behavior
});
/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 1
});

clouds.to("g#cleft1", { x: 500 }, 0);
clouds.to("g#cmid1", { x: 1000 }, 0);
clouds.to("g#cright1", { x: -1000 }, 0);
clouds.to("g#cleft2", { x: -700 }, 0);
clouds.to("g#cmid2", { x: -2500 }, 0);
clouds.to("g#cright2", { x: -4000 }, 0);
clouds.to("g#cleft3", { x: -6000 }, 0);

/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
    animation: sun,
    trigger: ".scrollElement",
    start: "1% top",
    end: "70% 100%",
    scrub: 1
    //markers: true,
    //preventOverlaps: true, //if true, it will affect all preceding ScrollTriggers (you can use for example 'scrollTrigger1')
    //fastScrollEnd: true,   //(default 2500px/s)
});

//sun motion
clouds.to("g#Sun", { x: Math.round(-500), y: Math.round(1400)}, 0);

/* Sun motion Animation  */
let moon = gsap.timeline();
ScrollTrigger.create({
    animation: moon,
    trigger: ".scrollElement",
    start: "1% top",
    end: "70% 100%",
    scrub: 1
    //markers: true,
    //preventOverlaps: true, //if true, it will affect all preceding ScrollTriggers (you can use for example 'scrollTrigger1')
    //fastScrollEnd: true,   //(default 2500px/s)
});

//moon motion
clouds.to("g#moon", { x: Math.round(500), y: Math.round(-1050)}, 0);
/* Clouds */
let mount = gsap.timeline();
ScrollTrigger.create({
    animation: mount,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 2
});

mount.to("g#mount", { x: -2000, ease: "power2.inOut" }, 0);
mount.to("g#mount2", { x: -2000, ease: "power2.inOut" }, 0);
mount.to("g#cloud-light-screen", { x: -2100, ease: "power2.inOut" }, 0.02);
mount.to("g#cloud-dark-screen", { x: -2100, ease: "power2.inOut" }, 0.03);

//Person
let char = gsap.timeline();
char.to("g#base-group", { x: -2200 }, 6);
char.to("g#step1", { x: -2000 }, 6);
char.to("g#step2", { x: -2000 }, 6);
char.to("g#step3", { x: -2000 }, 6);
char.to("g#step4", { x: -2000 }, 6);
char.to("g#step5", { x: -2000 }, 6);
char.to("g#step6", { x: -2000 }, 6);
char.to("g#step1", { y: 1000 }, 11);
char.to("g#step2", { y: 1000 }, 11);
char.to("g#step3", { y: 1000 }, 11);
char.to("g#step4", { y: 1000 }, 11);
char.to("g#step5", { y: 1000 }, 11);
char.to("g#step6", { y: 1000 }, 11);
/*********Background color****************/
// ScrollTrigger animation for background color change
gsap.to(".wrapper-bg", {
  backgroundColor: "#222424", // Nighttime color
  scrollTrigger: {
      trigger: ".scrollElement", // Element that will trigger the scroll effect
      start: "top", // Start when the top of the .content reaches the bottom of the viewport
      end: "bottom", // End when the bottom of the .content reaches the top of the viewport
      scrub: 5, // Smoothly scrub the transition as you scroll
  }
})
gsap.to([".ss4"], {
  fill: "#68777b", // Nighttime color
  scrollTrigger: {
      trigger: ".scrollElement", // Element that will trigger the scroll effect
      start: "top", // Start when the top of the .content reaches the bottom of the viewport
      end: "bottom", // End when the bottom of the .content reaches the top of the viewport
      scrub: 5, // Smoothly scrub the transition as you scroll
  }
});
gsap.to([".ss5"], {
  fill: "#566265", // Nighttime color
  scrollTrigger: {
      trigger: ".scrollElement", // Element that will trigger the scroll effect
      start: "top", // Start when the top of the .content reaches the bottom of the viewport
      end: "bottom", // End when the bottom of the .content reaches the top of the viewport
      scrub: 5, // Smoothly scrub the transition as you scroll
  }
});
gsap.to([".sss2"], {
  fill: "#89bbf0", // Nighttime color
  scrollTrigger: {
      trigger: ".scrollElement", // Element that will trigger the scroll effect
      start: "top", // Start when the top of the .content reaches the bottom of the viewport
      end: "bottom", // End when the bottom of the .content reaches the top of the viewport
      scrub: 5, // Smoothly scrub the transition as you scroll
  }
});
gsap.to([".sss3"], {
  fill: "#7ab4f0", // Nighttime color
  scrollTrigger: {
      trigger: ".scrollElement", // Element that will trigger the scroll effect
      start: "top", // Start when the top of the .content reaches the bottom of the viewport
      end: "bottom", // End when the bottom of the .content reaches the top of the viewport
      scrub: 5, // Smoothly scrub the transition as you scroll
  }
});

// Audio Play On Background

let audio = document.getElementById("myAudio");
let audioAllowed = false;
const toggleBtn = document.getElementById("audioToggleBtn");
toggleBtn.addEventListener("click", function () {
    if (!audioAllowed) return; // Ensure audio is allowed by user interaction first

    if (audio.paused) {
        audio.play();
        toggleBtn.innerText = "🔈 Pause Audio";
        toggleBtn.classList.remove("audio-paused");
        toggleBtn.classList.add("audio-playing");
    } else {
        audio.pause();
        toggleBtn.innerText = "🔊 Play Audio";
        toggleBtn.classList.remove("audio-playing");
        toggleBtn.classList.add("audio-paused");
    }
});
function enableAudio() {
    if (!audioAllowed) {
        audio.play().then(() => {
            audio.pause();
            audioAllowed = true;
            document.querySelector(".info").style.display = "none";
        }).catch(error => console.log("Error enabling audio:", error));
    }
}
document.addEventListener("click", enableAudio, { once: true });
document.addEventListener("touchstart", enableAudio, { once: true });
ScrollTrigger.create({
    trigger: ".scrollElement",
    start: "top top",
    endTrigger: ".footer-section",
    end: "top center", 
    scrub: 5,
    onEnter: () => {
        if (audioAllowed) {
            audio.play();
            toggleBtn.innerText = "🔈 Pause Audio"; // Sync button
            toggleBtn.classList.remove("audio-paused");
            toggleBtn.classList.add("audio-playing");
        }
    },
    onLeaveBack: () => {
        if (audioAllowed) {
            audio.pause();
            audio.currentTime = 0;
            toggleBtn.innerText = "🔊 Play Audio"; // Sync button
            toggleBtn.classList.remove("audio-playing");
            toggleBtn.classList.add("audio-paused");
        }
    },
    onEnterBack: () => { 
        if (audioAllowed) {
            audio.play();
            toggleBtn.innerText = "🔈 Pause Audio"; // Sync button
            toggleBtn.classList.remove("audio-paused");
            toggleBtn.classList.add("audio-playing");
        }
    },
    onLeave: () => {
        if (audioAllowed) {
            audio.pause();
            audio.currentTime = 0;
            toggleBtn.innerText = "🔊 Play Audio"; // Sync button
            toggleBtn.classList.remove("audio-playing");
            toggleBtn.classList.add("audio-paused");
        }
    }
});

/********Play video Pause Background audio*********/
document.addEventListener('play', function(e) {
    if (e.target.tagName === 'VIDEO') {
      console.log('Detected video play from anywhere');
      if (!audio.paused) {
        audio.pause();
        console.log('Background audio paused');
        toggleBtn.innerText = "🔊 Play Audio"; // Sync button
        toggleBtn.classList.remove("audio-playing");
        toggleBtn.classList.add("audio-paused");
      }
    }
}, true);
document.addEventListener('pause', function(e) {
    if (e.target.tagName === 'VIDEO' && audioAllowed) {
        // Check if *all* videos are paused before playing audio
        const allVideos = document.querySelectorAll('video');
        const anyPlaying = Array.from(allVideos).some(v => !v.paused && !v.ended);
        if (!anyPlaying && audio.paused) {
            audio.play();
            console.log('Video paused, resuming background audio');
            toggleBtn.innerText = "🔈 Pause Audio"; // Sync button
            toggleBtn.classList.remove("audio-paused");
            toggleBtn.classList.add("audio-playing");
        }
    }
}, true);

document.addEventListener('ended', function(e) {
    if (e.target.tagName === 'VIDEO' && audioAllowed) {
        // Same check: make sure no other videos are still playing
        const allVideos = document.querySelectorAll('video');
        const anyPlaying = Array.from(allVideos).some(v => !v.paused && !v.ended);
        if (!anyPlaying && audio.paused) {
            audio.play();
            // console.log('Video ended, resuming background audio');
            toggleBtn.innerText = "🔈 Pause Audio"; // Sync button
            toggleBtn.classList.remove("audio-paused");
            toggleBtn.classList.add("audio-playing");
        }
    }
}, true);


// $(document).ready(function () {
//     $('#audioToggleBtn').click(function () {
//         if (!audioAllowed) return; // ensure user has allowed audio

//         if ($('#myAudio')[0].paused) {
//             $('#myAudio')[0].play();
//             $(this).text('🔈 Pause Audio');
//         } else {
//             $('#myAudio')[0].pause();
//             $(this).text('🔊 Play Audio');
//         }
//     });
// });
// AudioEND

/**********************Work Slider*********************/
/*
$(document).ready(function(){
  // Initialize Main Slider
  $(".work-box").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        fade: true,
        adaptiveHeight: true,
        appendDots: $(".custom-dots"), // Attach dots to custom container
        customPaging: function(slider, i) {
            return `<button>${i + 1}</button>`; // Custom dot numbering (1, 2, 3...)
        }
  });
});
*/

$(document).ready(function () {
    // Right-Click Disable
    $(document).on("contextmenu", function (event) {
        event.preventDefault();
    });

    // Keyboard Shortcuts Disable
    $(document).on("keydown", function (event) {
        if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
            event.preventDefault(); // Ctrl+U disable karega
        }
        if (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i")) {
            event.preventDefault(); // Ctrl+Shift+I disable karega
        }
        if (event.key === "F12") {
            event.preventDefault(); // F12 disable karega
        }
    });
});