
console.log("Démarrage du script !");

// Attendez que le DOM soit chargé pour démarrer le script
document.addEventListener("DOMContentLoaded", initScript);

// Fonction d'initialisation du script
function initScript() {
    // Gestion de la modale
    manageModal();
    // Initialisation de Swiper
    initializeSwiper();
    // Gestion du parallaxe des nuages
    handleParallax();
}

// Fonction pour gérer la modale
function manageModal() {
    // Attendez que le document soit prêt
    jQuery(document).ready(function($) {
        // Gestion de l'ouverture de la modale
        $(".modal-open").click(function () {
            console.log("modal-trigger cliqué");
            // Animation de la modale
            $(".modal__content").animate({ height: "toggle", opacity: "toggle" }, 1000);
            $(".modal__content").toggleClass("open");
            $(".modal__burger").toggleClass("close");
        });
        // Gestion de la fermeture de la modale lors du clic sur un lien
        $("a").click(function () {
            if ($(".modal__content").hasClass("open")) {
                $(".modal__content").animate(
                    { height: "toggle", opacity: "toggle" },
                    1000
                );
                $(".modal__content").removeClass("open");
                $(".modal__burger").removeClass("close");
            }
        });    
    });
}

// Fonction pour initialiser Swiper
function initializeSwiper() {
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 60,
        speed: 850,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
      
        slidesPerView: 3,
        coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
    });
}


// Fonction pour gérer le parallaxe des nuages
function handleParallax() {
    const root = document.documentElement;
    const place = document.querySelector("#place");
    const ratio = 0.05;
    let posX = 0;

    // Fonction de gestion de l'intersection
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                const elementName = entry.target.className;
                
                if (elementName.includes("hidden")) {
                    entry.target.classList.add("mouve-up");
                    observer.unobserve(entry.target);
                    entry.target.classList.remove("hidden");
                }

                if (elementName.includes("__title hidden")) {
                    entry.target.classList.add("animTitle");
                    observer.unobserve(entry.target);
                    entry.target.classList.remove("hidden");
                }
            }
        });
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: ratio,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Activer l'observation pour les éléments spécifiques
    observer.observe(document.querySelector(".story"));
    observer.observe(document.querySelector(".studio"));
    observer.observe(document.querySelector(".nomination"));
    observer.observe(document.querySelector(".site-footer"));
    observer.observe(document.querySelector(".story-title"));
    observer.observe(document.querySelector(".studio__title"));
    observer.observe(document.querySelector(".characters__title"));
    observer.observe(document.querySelector(".place__title"));

    // Gestion du défilement pour déplacer les nuages
    window.addEventListener("scroll", () => {
        posX = Math.round(0 - (window.scrollY - place.offsetTop - 200));
        if (posX <= 0 && posX > -400) {
            root.style.setProperty("--posX", posX + "px");
            document.querySelector('.big-cloud').style.transform = `translateX(${posX}px)`;
            document.querySelector('.little-cloud').style.transform = `translateX(${posX}px)`;
        }

        let vertical = -1;
        // Changement de durée de rotation des fleurs
        setInterval(function () {
            if (window.scrollY !== vertical) {
                vertical = window.scrollY;
                root.style.setProperty("--rotate", "3s");
            } else {
                root.style.setProperty("--rotate", "15s");
            }
        }, 500);
    });

    // Appel initial pour définir la position des nuages au chargement de la page
    if (window.scrollY > 100) {
        posX = Math.round(0 - (window.scrollY - place.offsetTop - 200));
        root.style.setProperty("--posX", posX + "px");
        document.querySelector('.big-cloud').style.transform = `translateX(${posX}px)`;
        document.querySelector('.little-cloud').style.transform = `translateX(${posX}px)`;
    }
}


