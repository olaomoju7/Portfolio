const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const response = await fetch("https://contact-form-api-olaomoju.vercel.app/api/contact", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            subject,
            message
        })
    });

    const data = await response.json();

    document.getElementById("response").textContent = data.message;
});
