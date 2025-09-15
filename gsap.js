document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("ready");

     // First, get the length of the chart-line
     const chartLine = document.querySelector('.tech-grid .chart-line');
     if (chartLine) {
         const length = chartLine.getTotalLength();
         gsap.set(chartLine, { strokeDasharray: length });
         gsap.set(chartLine, { strokeDashoffset: length });
     }

     // Create a timeline for the section
     const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

     // Left side animation
     tl.fromTo(".tech-grid h1", 
         { y: 50, opacity: 0 },
         { y: 0, opacity: 1, duration: 0.8, delay:1}
     ).fromTo(".tech-grid p",
         { y: 50, opacity: 0 },
         { y: 0, opacity: 1, duration: 0.6},
         "-=0.4"
     ).fromTo(".tech-grid .flex button",
         { y: 30, opacity: 0 },
         { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 },
         "-=0.4"
     );

     // Right side animation (SVG)
    //  tl.to(".tech-grid .dash-rect",
    //      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
    //      "<0.5" // start 0.5 seconds after the previous animation starts (so overlaps with left side)
    //  ).to(".tech-grid .dash-btn",
    //      { opacity: 1, scale: 1, stagger: 0.2, duration: 0.5, ease: "back.out(1.7)" },
    //      "<0.3" // start 0.3 seconds after the dash-rect starts
    //  ).to(".tech-grid .chart-line",
    //      { strokeDashoffset: 0, duration: 2 },
    //      "<0.5" // start 0.5 seconds after the dash-rect starts
    //  ).to(".tech-grid .chart-point",
    //      { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5 },
    //      "<0.5" // start 0.5 seconds after the chart-line starts (so halfway through the chart-line animation)
    //  ).to(".tech-grid .progress-bg",
    //      { opacity: 1, duration: 0.5 },
    //      "<0.5"
    //  ).to(".tech-grid .progress-value",
    //      { scaleX: 1, duration: 1, transformOrigin: "left center", ease: "power2.out" },
    //      "<0.3" // start 0.3 seconds after the progress-bg
    //  );



    gsap.fromTo('.floating-animation',
        {opacity:0, y: -20},
        {opacity:1, y:0, duration:0.5, delay: 1}
    )

    gsap.fromTo('nav', 
        {
            y: -100,
        },
        {
            y: 0, duration: 0.3, ease: "power4.out", delay: 1

        }
    )

    gsap.fromTo(
        "#anchor a",
        { opacity: 0, y: -20 },        // from state
        { opacity: 1, y: 0,           // to state
        stagger: 0.15,
        delay: 1,
        duration: 0.3,
        ease: "power2.out"
        }
    );

    gsap.fromTo('nav button', 
        {opacity: 0, scale: 0.8},
        {opacity:1, scale: 1, duration: 0.6, delay:1}
    );
    // gsap.fromTo("nav button", {
    //     scale: 0.8,
    //     opacity: 0,
    //     delay: 1,
    //     duration: 0.6,
    //     ease: "back.out(1.7)"
    // });

    gsap.registerPlugin(ScrollTrigger);

    // Animate section 2 heading
    gsap.from(".pain-point h2", {
        scrollTrigger: {
        trigger: ".pain-point",  // target Pain Point Section
        start: "top 90%",   // when top of section hits 80% of viewport
        toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });

  // Animate the grid cards
    gsap.from(".pain-point .grid > div", {
        scrollTrigger: {
        trigger: ".pain-point",
        start: "top 75%",
        toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
    });

    // Animate CTA button
    gsap.from(".pain-point button", {
        scrollTrigger: {
        trigger: ".pain-point",
        start: "top 70%",
        toggleActions: "play none none reverse"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "back.out(1.7)"
    });

    gsap.from(".features .dashboard", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 75%",
            toggleActions: "play none none reverse",
            // scrub: true
        },
        scale: 0.5,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        ease: "back.out(1.7)"
    });

    // Animate section header
    gsap.from(".features-header h2, .features-header p", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 80%", // when section enters viewport
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });


    // Animate CTA button
    gsap.from(".features button", {
    scrollTrigger: {
        trigger: ".features",
        start: "top 70%",
        toggleActions: "play none none reverse"
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    ease: "back.out(1.7)"
    });

    // Animate left column (text + feature box)
    gsap.from(".why-prayagedu-left > *", {
    scrollTrigger: {
        trigger: ".why-prayagedu-left",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out"
    });

    // Animate right column (stats box)
    gsap.from(".why-prayagedu-right", {
    scrollTrigger: {
        trigger: ".why-prayagedu-right",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
    });


    // Animate pricing cards
    gsap.from("#pricing .grid > div", {
        scrollTrigger: {
            trigger: "#pricing",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 60,       // slide up
        opacity: 0,  // fade in
        stagger: 0.2, // delay between cards
        duration: 0.8,
        ease: "power2.out"
    });

    // Animate testimonials cards
    // gsap.from("#testimonials .grid > div", {
    //     scrollTrigger: {
    //         trigger: "#testimonials",
    //         start: "top 80%",
    //         toggleActions: "play none none reverse"
    //     },
    //     y: 60,        // slide up
    //     opacity: 0,   // fade in
    //     stagger: 0.2, // delay between cards
    //     duration: 0.8,
    //     ease: "power2.out"
    // });

    // Animate demo form fields
    gsap.from(".form .bg-white form > div", {
        scrollTrigger: {
            trigger: ".form",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 40,         // slide up
        opacity: 0,    // fade in
        stagger: 0.15, // sequential delay
        duration: 0.8,
        ease: "power3.out"
    });

    // Animate the submit button separately with a small scale-up effect
    gsap.from(".bookfree", {
        scrollTrigger: {
            trigger: ".gradient-bg",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.8,
        ease: "back.out(1.7)"
    });

    // Animate FAQ cards on scroll
    gsap.from("#faq .bg-white", {
        scrollTrigger: {
            trigger: "#faq",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
    });

    // Smooth FAQ toggle
    // function toggleFAQ(button) {
    //     const answer = button.nextElementSibling;
    //     const icon = button.querySelector("svg");

    //     if (answer.classList.contains("hidden")) {
    //         // Show answer
    //         gsap.to(answer, {
    //             height: "auto",
    //             opacity: 1,
    //             duration: 0.5,
    //             paddingTop: "1rem",
    //             paddingBottom: "1rem",
    //             ease: "power2.out",
    //             onStart: () => answer.classList.remove("hidden")
    //         });
    //         gsap.to(icon, { rotate: 180, duration: 0.3, ease: "power2.out" });
    //     } else {
    //         // Hide answer
    //         gsap.to(answer, {
    //             height: 0,
    //             opacity: 0,
    //             duration: 0.5,
    //             paddingTop: 0,
    //             paddingBottom: 0,
    //             ease: "power2.in",
    //             onComplete: () => answer.classList.add("hidden")
    //         });
    //         gsap.to(icon, { rotate: 0, duration: 0.3, ease: "power2.in" });
    //     }
    // }

    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('svg');

            const isOpen = !answer.classList.contains('hidden');

            // Close all open answers if you want only one open at a time
            faqButtons.forEach(otherBtn => {
                const otherAnswer = otherBtn.nextElementSibling;
                const otherIcon = otherBtn.querySelector('svg');
                if (otherAnswer !== answer && !otherAnswer.classList.contains('hidden')) {
                    gsap.to(otherAnswer, {
                        height: 0,
                        opacity: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        duration: 0.3,
                        onComplete: () => otherAnswer.classList.add('hidden')
                    });
                    gsap.to(otherIcon, { rotate: 0, duration: 0.3 });
                }
            });

            if (isOpen) {
                // Close current
                gsap.to(answer, {
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    duration: 0.3,
                    onComplete: () => answer.classList.add('hidden')
                });
                gsap.to(icon, { rotate: 0, duration: 0.3 });
            } else {
                // Open current
                answer.classList.remove('hidden');
                const answerHeight = answer.scrollHeight;
                gsap.fromTo(answer, 
                    { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 },
                    { height: answerHeight, opacity: 1, paddingTop: '1rem', paddingBottom: '1rem', duration: 0.4, ease: 'power2.out' }
                );
                gsap.to(icon, { rotate: 180, duration: 0.3 });
            }
        });
    });


    gsap.timeline({
        scrollTrigger: {
            trigger: ".final",
            start: "top 80%",
        },
        defaults: { duration: 0.8, ease: "power2.out" }
    })
    .to(".cta-heading", { opacity: 1, y: 0 })
    .to(".cta-subheading", { opacity: 1, y: 0 }, "-=0.4")
    .to(".cta-btn", { opacity: 1, y: 0 }, "-=0.4");
    

    ScrollTrigger.create({
        trigger: ".hero-section",
        // start: "top top",
        // end: "bottom top",
        onEnter: () => {
        document.querySelector("nav").classList.add("glass-effect");
        document.querySelector("nav").classList.remove("nav-color");
        },
        onEnterBack: () => {
        document.querySelector("nav").classList.add("glass-effect");
        document.querySelector("nav").classList.remove("nav-color");
        },
        onLeave: () => {
        document.querySelector("nav").classList.add("nav-color");
        document.querySelector("nav").classList.remove("glass-effect");
        },
        onLeaveBack: () => {
        document.querySelector("nav").classList.add("nav-color");
        document.querySelector("nav").classList.remove("glass-effect");
        }
    });


    const modal = document.getElementById('videoModal');
    const video = document.getElementById('walkthruVideo');
    const openBtn = document.getElementById('openVideoModal');
    const closeBtn = document.getElementById('closeModal');

    // Function to open modal
    function openModal() {
        modal.classList.remove('pointer-events-none');
        gsap.to(modal, {opacity: 1, duration: 0.5});
        gsap.fromTo('#walkthruVideo', 
            {opacity: 0},
            {opacity: 1}
        )
        video.currentTime = 0;
        video.play();
    }

    // Function to close modal
    function closeModalFunc() {
        gsap.to(modal, {opacity: 0, duration: 0.5, onComplete: () => {
            modal.classList.add('pointer-events-none');
            video.pause();
        }});

        gsap.fromTo('#walkthruVideo', 
            {opacity: 1},
            {opacity: 0}
        )
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModalFunc);

    // Close modal if click outside video
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModalFunc();
    });

    gsap.utils.toArray(".animate-float").forEach(circle => {
    gsap.to(circle, {
        y: "random(-50,50)",
        x: "random(-50,50)",
        duration: "random(3,6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    });

    gsap.utils.toArray(".animate-float1").forEach(circle => {
    gsap.to(circle, {
        y: "random(-50,50)",
        x: "random(-50,50)",
        duration: "random(3,6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    });



    // const swiper = new Swiper('.swiper', {
    // speed: 400,
    // spaceBetween: 100,
    // });
});


    