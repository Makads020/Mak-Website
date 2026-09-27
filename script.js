emailjs.init({
    publicKey: "LoYgqSsD2oYud35AC"
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_vgiorsn", "template_lcgdj0o", {
        name: name,
        email: email,
        message: message
    })
    .then(function() {
        alert("Message sent successfully!");
        form.reset();
  
    })
  
    .catch(function() {
        console.log(error);
        alert("Message could not be sent.");
    });
});


const packageCards = document.querySelectorAll(".package-card");

packageCards.forEach(function(card) {
    card.addEventListener("click", function(event) {

        if (event.target.closest(".package-button")) {
            return;
        }

        card.classList.toggle("active");
    });
});