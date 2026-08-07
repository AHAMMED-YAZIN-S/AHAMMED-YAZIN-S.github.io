/* =====================================================
   AHAMMED YAZIN S — PREMIUM PORTFOLIO
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. TYPING ANIMATION
===================================================== */

const typingElement =
    document.getElementById("typing-role");


const roles = [

    "Python Developer",

    "Django Developer",

    "Full Stack Developer",

    "Web Developer"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeRole() {

    if (!typingElement) {
        return;
    }


    const currentRole =
        roles[roleIndex];


    /* Typing */

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        /* Finished typing */

        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeRole,
                1500
            );

            return;
        }

    }


    /* Deleting */

    else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        /* Finished deleting */

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

        }

    }


    setTimeout(
        typeRole,
        deleting ? 60 : 110
    );

}


typeRole();



/* =====================================================
   2. DARK / LIGHT THEME
===================================================== */

const themeButton =
    document.getElementById(
        "theme-toggle"
    );


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-theme"
            );


            const icon =
                themeButton.querySelector("i");


            if (
                document.body.classList.contains(
                    "light-theme"
                )
            ) {

                icon.classList.remove(
                    "fa-moon"
                );

                icon.classList.add(
                    "fa-sun"
                );

            }

            else {

                icon.classList.remove(
                    "fa-sun"
                );

                icon.classList.add(
                    "fa-moon"
                );

            }

        }
    );

}



/* =====================================================
   3. MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById(
        "menu-btn"
    );


const navList =
    document.querySelector(
        ".navbar ul"
    );


if (
    menuButton &&
    navList
) {

    menuButton.addEventListener(
        "click",
        () => {

            navList.classList.toggle(
                "mobile-active"
            );


            const icon =
                menuButton.querySelector("i");


            if (
                navList.classList.contains(
                    "mobile-active"
                )
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            }

            else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );


    /* Close menu after clicking a link */

    navList
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navList.classList.remove(
                        "mobile-active"
                    );


                    const icon =
                        menuButton.querySelector(
                            "i"
                        );


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        });

}



/* =====================================================
   4. ACTIVE NAVIGATION
===================================================== */

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


document
    .querySelectorAll(
        ".navbar ul a"
    )
    .forEach(link => {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage ===
            currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });



/* =====================================================
   5. SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

}



/* =====================================================
   6. SCROLL PROGRESS BAR
===================================================== */

const progressBar =
    document.createElement(
        "div"
    );


progressBar.id =
    "scroll-progress";


document.body.appendChild(
    progressBar
);


function updateScrollProgress() {

    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;


    progressBar.style.width =
        progress + "%";

}


window.addEventListener(
    "scroll",
    updateScrollProgress
);


updateScrollProgress();



/* =====================================================
   7. SCROLL TO TOP BUTTON
===================================================== */

const topButton =
    document.createElement(
        "button"
    );


topButton.id =
    "top-button";


topButton.innerHTML =
    '<i class="fas fa-arrow-up"></i>';


topButton.setAttribute(
    "aria-label",
    "Scroll to top"
);


document.body.appendChild(
    topButton
);


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 400
        ) {

            topButton.classList.add(
                "show"
            );

        }

        else {

            topButton.classList.remove(
                "show"
            );

        }

    }
);


topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   8. SAVE THEME
===================================================== */

const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );


    if (themeButton) {

        const icon =
            themeButton.querySelector(
                "i"
            );


        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    }

}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            if (
                document.body.classList.contains(
                    "light-theme"
                )
            ) {

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

            }

            else {

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

            }

        }
    );

}



/* =====================================================
   9. MOUSE GLOW
===================================================== */

const mouseGlow =
    document.createElement(
        "div"
    );


mouseGlow.id =
    "mouse-glow";


document.body.appendChild(
    mouseGlow
);


document.addEventListener(
    "mousemove",
    event => {

        mouseGlow.style.left =
            event.clientX + "px";

        mouseGlow.style.top =
            event.clientY + "px";

    }
);



/* =====================================================
   10. IMAGE TILT EFFECT
===================================================== */

const profileImage =
    document.querySelector(
        ".profile-wrapper"
    );


if (profileImage) {

    profileImage.addEventListener(
        "mousemove",
        event => {

            const rect =
                profileImage.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -5;


            const rotateY =
                ((x - centerX) /
                    centerX) * 5;


            profileImage.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;

        }
    );


    profileImage.addEventListener(
        "mouseleave",
        () => {

            profileImage.style.transform =
                "";

        }
    );

}



/* =====================================================
   11. BUTTON RIPPLE EFFECT
===================================================== */

document
    .querySelectorAll(
        ".btn, .btn-outline"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.classList.add(
                    "ripple"
                );


                const rect =
                    this.getBoundingClientRect();


                ripple.style.left =
                    (event.clientX -
                        rect.left) + "px";


                ripple.style.top =
                    (event.clientY -
                        rect.top) + "px";


                this.appendChild(
                    ripple
                );


                setTimeout(
                    () => {

                        ripple.remove();

                    },
                    600
                );

            }
        );

    });



/* =====================================================
   12. CONSOLE MESSAGE
===================================================== */

console.log(
    "🚀 Welcome to Ahammed Yazin S Portfolio"
);

console.log(
    "Python | Django | Full Stack Development"
);
// ==========================================
// CONTACT FORM - WEB3FORMS
// ==========================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = contactForm.querySelector(".send-btn");
        const buttonText = button.querySelector("span");
        const buttonIcon = button.querySelector("i");

        const formData = new FormData(contactForm);

        // Loading state
        button.disabled = true;
        buttonText.textContent = "Sending...";
        buttonIcon.className = "fas fa-spinner fa-spin";

        try {

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            const result = await response.json();

            if (response.ok) {

                showFormMessage(
                    "Message sent successfully! I'll get back to you soon.",
                    "success"
                );

                contactForm.reset();

            } else {

                showFormMessage(
                    result.message || "Something went wrong. Please try again.",
                    "error"
                );

            }

        } catch (error) {

            showFormMessage(
                "Unable to send the message. Please try again later.",
                "error"
            );

        }


        // Restore button
        button.disabled = false;

        buttonText.textContent = "Send Message";

        buttonIcon.className =
            "fas fa-paper-plane";

    });

}


// ==========================================
// FORM MESSAGE
// ==========================================

function showFormMessage(message, type) {

    const oldMessage =
        document.querySelector(".form-message");

    if (oldMessage) {
        oldMessage.remove();
    }


    const messageBox =
        document.createElement("div");

    messageBox.className =
        `form-message ${type}`;

    messageBox.innerHTML = `

        <i class="fas ${
            type === "success"
                ? "fa-circle-check"
                : "fa-circle-exclamation"
        }"></i>

        <span>${message}</span>

    `;


    const form =
        document.querySelector(".contact-form");

    form.parentNode.insertBefore(
        messageBox,
        form
    );


    setTimeout(() => {

        messageBox.style.opacity = "0";

        setTimeout(() => {
            messageBox.remove();
        }, 400);

    }, 5000);

}