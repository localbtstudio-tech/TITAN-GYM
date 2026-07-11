export function initProgressBar() {

    const progress = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const current = window.scrollY;

        const percent = (current / total) * 100;

        progress.style.width = percent + "%";

    });

}