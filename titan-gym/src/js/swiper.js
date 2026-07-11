import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export function initSwiper() {

    new Swiper(".testimonialSwiper", {

        modules: [
            Navigation,
            Pagination,
            Autoplay,
            EffectCoverflow
        ],

        effect: "coverflow",

        centeredSlides: true,

        grabCursor: true,

        loop: true,

        slidesPerView: "auto",

        spaceBetween: 40,

        coverflowEffect: {

            rotate: 0,

            stretch: 0,

            depth: 180,

            modifier: 1,

            scale: .88,

            slideShadows: false

        },

        autoplay: {

            delay: 3500,

            disableOnInteraction: false

        },

        pagination: {

            el: ".swiper-pagination",

            clickable: true

        },

        navigation: {

            nextEl: ".swiper-button-next",

            prevEl: ".swiper-button-prev"

        }

    });

}