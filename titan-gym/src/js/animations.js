import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {

    // Hero Timeline
    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 1
        }
    });

    tl.from(".logo", {
        y: -40,
        opacity: 0
    })

    .from(".nav a", {
        y: -20,
        opacity: 0,
        stagger: 0.08
    }, "-=0.6")

    .from(".btn", {
        scale: 0.8,
        opacity: 0
    }, "-=0.6")

    .from(".hero-tag", {
        y: 40,
        opacity: 0
    }, "-=0.5")

    .from(".hero h1", {
        y: 80,
        opacity: 0
    }, "-=0.5")

    .from(".hero-description", {
        y: 30,
        opacity: 0
    }, "-=0.6")

    .from(".hero-buttons a", {
        y: 25,
        opacity: 0,
        stagger: 0.15
    }, "-=0.5")

    .from(".hero-stats > div", {
        y: 30,
        opacity: 0,
        stagger: 0.12
    }, "-=0.4")

    .from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1.2
    }, "-=1");


    // Sections Animation
    gsap.utils.toArray("section").forEach(section => {

        gsap.from(section, {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

    });

    // Cards Animation
    gsap.utils.toArray(
        ".program-card,.feature-card,.price-card,.trainer-card,.stat-card"
    ).forEach(card => {

        gsap.from(card, {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%"
            }
        });

    });

}