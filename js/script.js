 
document.addEventListener("DOMContentLoaded", () => {
    const text = "Hi, I'm JAY Web Developer";
    let index = 17;
    const typingElement = document.querySelector(".typing-text");

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML = text.slice(0, index + 17) + '<span class="cursor"></span>';
            index++;
            setTimeout(typeText, 90);
        } else {
            setTimeout(() => {
                index = 0;
                typeText();
            }, 1000); 
        }
    }

    typeText();

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
                // Close navbar on mobile after clicking a link
                const navbar = document.getElementById("navbar");
                if (navbar && navbar.classList.contains("active")) {
                    navbar.classList.remove("active");
                }
            }
        });
    });
    
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function(event) {
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your message! I will get back to you soon.");
            contactForm.reset();
        });
    }
});
//
////





