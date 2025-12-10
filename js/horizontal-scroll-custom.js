gsap.registerPlugin(ScrollTrigger);

let horizontalScrollInitialized = false;

function initHorizontalScroll() {
    const triggerElement = document.querySelector(".horizontal-scroll-trigger");
    const footer = document.querySelector(".footer-section");
    const body = document.querySelector("body");

    if (window.innerWidth >= 768) {
        if (horizontalScrollInitialized) return; // Prevent duplicate setup
        horizontalScrollInitialized = true;

        let sections = gsap.utils.toArray(".horzanim");
        document.body.classList.add("disable-scroll");

        ScrollTrigger.create({
            animation: gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
            }),
            trigger: triggerElement,
            pin: true,
            scrub: 0.2,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + triggerElement.offsetWidth,
            preventDefault: true,
            onLeave: () => {
                if (footer) {
                    footer.classList.add("footer-visible");
                    body.classList.add("overflow");
                }
            },
            onEnterBack: () => {
                if (footer) {
                    footer.classList.remove("footer-visible");
                    body.classList.remove("overflow");
                }
            },
        });
    } else {
        if (horizontalScrollInitialized) {
            ScrollTrigger.getAll().forEach(t => {
                if (t.vars.trigger === document.querySelector(".horizontal-scroll-trigger")) {
                    t.kill(); // Only kill this specific scroll
                }
            });
            document.body.classList.remove("disable-scroll");
            horizontalScrollInitialized = false;
        }
    }
}
const splashScreen = document.querySelector(".splash-screen");
const goButton = document.querySelector(".go-button");

if (goButton && splashScreen) {
    goButton.addEventListener("click", () => {
        gsap.to(splashScreen, {
            y: "-100%",
            opacity: 0,
            duration: 0.3, // Slightly smoother than 0.2
            ease: "power2.inOut",
            onComplete: () => {
                splashScreen.style.display = "none";
                document.body.classList.remove("disable-scroll");

                // Refresh ScrollTrigger without enabling ALL triggers blindly
                ScrollTrigger.refresh(); // Only this is needed in most cases
            }
        });
    });
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
initHorizontalScroll();
window.addEventListener("resize", () => {
    clearTimeout(window.resizingScroll);
    window.resizingScroll = setTimeout(() => {
        initHorizontalScroll();
        ScrollTrigger.refresh();
    }, 300);
});
// Animate Clouds
const clouds = gsap.timeline();
clouds.to("g#cleft1", { x: 500 }, 0)
      .to("g#cmid1", { x: 1000 }, 0)
      .to("g#cright1", { x: -1000 }, 0)
      .to("g#cleft2", { x: -700 }, 0)
      .to("g#cmid2", { x: -2500 }, 0)
      .to("g#cright2", { x: -4000 }, 0)
      .to("g#cleft3", { x: -6000 }, 0)
      .to("g#Sun", { x: -500, y: 1400 }, 0)         // Moved here from separate `sun` timeline
      .to("g#moon", { x: 500, y: -1050 }, 0);       // Moved here from separate `moon` timeline

ScrollTrigger.create({
    animation: clouds,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 1
});

// Animate Mountains
const mount = gsap.timeline();
mount.to("g#mount", { x: -2000, ease: "power2.inOut" }, 0)
     .to("g#mount2", { x: -2000, ease: "power2.inOut" }, 0)
     .to("g#cloud-light-screen", { x: -2100, ease: "power2.inOut" }, 0.02)
     .to("g#cloud-dark-screen", { x: -2100, ease: "power2.inOut" }, 0.03);

ScrollTrigger.create({
    animation: mount,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 2
});

// Animate Background Color
gsap.to(".wrapper-bg", {
    backgroundColor: "#222424",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "top",
        end: "bottom",
        scrub: 5
    }
});

// Animate SVG Fill Colors
const colorTweens = [
    { target: ".s4", fill: "#68777b" },
    { target: ".s5", fill: "#566265" },
    { target: ".sc0", fill: "#89bbf0" },
    { target: ".sc1", fill: "#7ab4f0" },
];

colorTweens.forEach(({ target, fill }) => {
    gsap.to(target, {
        fill,
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "top",
            end: "bottom",
            scrub: 5
        }
    });
});

let audio = document.getElementById("myAudio");
let audioAllowed = !1;
const toggleBtn = document.getElementById("audioToggleBtn");
toggleBtn.addEventListener("click", function () {
    if (!audioAllowed) return;
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
        audio
            .play()
            .then(() => {
                audio.pause();
                audioAllowed = !0;
                document.querySelector(".info").style.display = "none";
            })
            .catch((error) => console.log("Error enabling audio:", error));
    }
}
document.addEventListener("click", enableAudio, { once: !0 });
document.addEventListener("touchstart", enableAudio, { once: !0 });
ScrollTrigger.create({
    trigger: ".scrollElement",
    start: "top top",
    endTrigger: ".footer-section",
    end: "top center",
    scrub: 5,
    onEnter: () => {
        if (audioAllowed) {
            audio.play();
            toggleBtn.innerText = "🔈 Pause Audio";
            toggleBtn.classList.remove("audio-paused");
            toggleBtn.classList.add("audio-playing");
        }
    },
    onLeaveBack: () => {
        if (audioAllowed) {
            audio.pause();
            audio.currentTime = 0;
            toggleBtn.innerText = "🔊 Play Audio";
            toggleBtn.classList.remove("audio-playing");
            toggleBtn.classList.add("audio-paused");
        }
    },
    onEnterBack: () => {
        if (audioAllowed) {
            audio.play();
            toggleBtn.innerText = "🔈 Pause Audio";
            toggleBtn.classList.remove("audio-paused");
            toggleBtn.classList.add("audio-playing");
        }
    },
    onLeave: () => {
        if (audioAllowed) {
            audio.pause();
            audio.currentTime = 0;
            toggleBtn.innerText = "🔊 Play Audio";
            toggleBtn.classList.remove("audio-playing");
            toggleBtn.classList.add("audio-paused");
        }
    },
});
document.addEventListener(
    "play",
    function (e) {
        if (e.target.tagName === "VIDEO") {
            if (!audio.paused) {
                audio.pause();
                toggleBtn.innerText = "🔊 Play Audio";
                toggleBtn.classList.remove("audio-playing");
                toggleBtn.classList.add("audio-paused");
            }
        }
    },
    !0
);
document.addEventListener(
    "pause",
    function (e) {
        if (e.target.tagName === "VIDEO" && audioAllowed) {
            const allVideos = document.querySelectorAll("video");
            const anyPlaying = Array.from(allVideos).some((v) => !v.paused && !v.ended);
            if (!anyPlaying && audio.paused) {
                audio.play();
                toggleBtn.innerText = "🔈 Pause Audio";
                toggleBtn.classList.remove("audio-paused");
                toggleBtn.classList.add("audio-playing");
            }
        }
    },
    !0
);
document.addEventListener(
    "ended",
    function (e) {
        if (e.target.tagName === "VIDEO" && audioAllowed) {
            const allVideos = document.querySelectorAll("video");
            const anyPlaying = Array.from(allVideos).some((v) => !v.paused && !v.ended);
            if (!anyPlaying && audio.paused) {
                audio.play();
                toggleBtn.innerText = "🔈 Pause Audio";
                toggleBtn.classList.remove("audio-paused");
                toggleBtn.classList.add("audio-playing");
            }
        }
    },
    !0
);