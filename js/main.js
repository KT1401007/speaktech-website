// =========================
// MOBILE NAV
// =========================

const hamburger =
    document.querySelector(".nav-hamburger");

const navMenu =
    document.querySelector(".nav-menu");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

// =========================
// CONTACT FORM
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (e) {

                e.preventDefault();

                // =========================
                // INPUTS
                // =========================

                const fullName =
                    document.getElementById("fullname");

                const email =
                    document.getElementById("email");

                const phone =
                    document.getElementById("phone");

                const service =
                    document.getElementById("service");

                const description =
                    document.getElementById("description");

                // =========================
                // VALUES
                // =========================

                const fullNameValue =
                    fullName.value.trim();

                const emailValue =
                    email.value.trim();

                const phoneValue =
                    phone.value.trim();

                const serviceValue =
                    service.value.trim();

                const descriptionValue =
                    description.value.trim();

                // =========================
                // CLEAR OLD ERRORS
                // =========================

                document
                    .querySelectorAll(".error-text")
                    .forEach(error => error.remove());

                let hasError = false;

                // =========================
                // ERROR FUNCTION
                // =========================

                function showError(input, message) {

                    const error =
                        document.createElement("div");

                    error.className = "error-text";

                    error.style.color = "red";
                    error.style.fontSize = "14px";
                    error.style.marginTop = "6px";

                    error.innerText = message;

                    input.parentElement.appendChild(error);

                }

                // =========================
                // NAME VALIDATION
                // =========================

                if (fullNameValue === "") {

                    showError(
                        fullName,
                        "Please enter your full name."
                    );

                    hasError = true;

                } else if (fullNameValue.length < 3) {

                    showError(
                        fullName,
                        "Name must be at least 3 characters."
                    );

                    hasError = true;

                } else if (fullNameValue.length > 40) {

                    showError(
                        fullName,
                        "Name cannot exceed 40 characters."
                    );

                    hasError = true;

                }

                // =========================
                // EMAIL VALIDATION
                // =========================

                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (emailValue === "") {

                    showError(
                        email,
                        "Please enter your email."
                    );

                    hasError = true;

                } else if (
                    !emailRegex.test(emailValue)
                ) {

                    showError(
                        email,
                        "Please enter a valid email."
                    );

                    hasError = true;

                }

                // =========================
                // PHONE VALIDATION
                // =========================

                const phoneRegex =
                    /^[0-9]{10}$/;

                if (phoneValue !== "") {

                    if (!phoneRegex.test(phoneValue)) {

                        showError(
                            phone,
                            "Phone number must be exactly 10 digits."
                        );

                        hasError = true;

                    }

                }

                // =========================
                // SERVICE VALIDATION
                // =========================

                if (serviceValue === "") {

                    showError(
                        service,
                        "Please select a service."
                    );

                    hasError = true;

                }

                // =========================
                // PROJECT DESCRIPTION
                // =========================

                if (descriptionValue === "") {

                    showError(
                        description,
                        "Please enter project overview."
                    );

                    hasError = true;

                } else if (
                    descriptionValue.length < 5
                ) {

                    showError(
                        description,
                        "Project overview must be at least 5 characters."
                    );

                    hasError = true;

                } else if (
                    descriptionValue.length > 500
                ) {

                    showError(
                        description,
                        "Project overview cannot exceed 500 characters."
                    );

                    hasError = true;

                }

                // =========================
                // STOP IF ERROR
                // =========================

                if (hasError) return;

                // =========================
                // SEND TO SUPABASE
                // =========================

                const response = await fetch(
                  `${SUPABASE_URL}/rest/v1/contacts`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "apikey": SUPABASE_KEY,
                      "Authorization": `Bearer ${SUPABASE_KEY}`,
                      "Prefer": "return=minimal"
                    },
                    body: JSON.stringify({
                      full_name: fullNameValue,
                      email: emailValue,
                      phone: phoneValue,
                      service: serviceValue,
                      description: descriptionValue
                    })
                  }
                );

                if (response.status === 201) {
                  contactForm.innerHTML = `
                    <div style="
                      background:#ecfdf5;
                      border:1px solid #10b981;
                      padding:24px;
                      border-radius:12px;
                      text-align:center;
                      color:#065f46;
                    ">
                      <h3>Thank You!</h3>
                      <p>We'll contact you within 24 hours.</p>
                    </div>
                  `;
                } else {
                  const err = await response.json();
                  console.error("Supabase error:", err);
                  alert("Something went wrong. Please try again.");
                }

            }

        );

    }

});