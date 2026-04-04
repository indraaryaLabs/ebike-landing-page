document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu-link");

    mobileMenuBtn.addEventListener("click", () => {
        if(mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            // small delay for transition
            setTimeout(() => {
                mobileMenu.classList.remove("opacity-0", "-translate-y-2");
                mobileMenu.classList.add("flex", "opacity-100", "translate-y-0");
            }, 10);
        } else {
            mobileMenu.classList.remove("opacity-100", "translate-y-0");
            mobileMenu.classList.add("opacity-0", "-translate-y-2");
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
                mobileMenu.classList.remove("flex");
            }, 300);
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("opacity-100", "translate-y-0");
            mobileMenu.classList.add("opacity-0", "-translate-y-2");
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
                mobileMenu.classList.remove("flex");
            }, 300);
        });
    });

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));
});
