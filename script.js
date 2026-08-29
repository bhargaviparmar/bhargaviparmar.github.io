/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================
   CONTACT FORM
   ========================= */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector('button[type="submit"]');

        formStatus.textContent = "Sending your message...";
        formStatus.classList.remove("success", "error");

        if (submitButton) {

            submitButton.disabled = true;

        }

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {

                throw new Error("Form submission failed");

            }

            contactForm.reset();
            formStatus.textContent =
                "Thank you. Your message has been sent successfully.";
            formStatus.classList.add("success");

        } catch (error) {

            formStatus.textContent =
                "Sorry, the form could not send right now. Please email me directly.";
            formStatus.classList.add("error");

        } finally {

            if (submitButton) {

                submitButton.disabled = false;

            }

        }

    });

}
