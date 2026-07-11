export function initParallax() {

    const image = document.querySelector(".hero-image img");

    if (!image) return;

    window.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        image.style.transform = `
            translate(${x}px, ${y}px)
        `;

    });

}