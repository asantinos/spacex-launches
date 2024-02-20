const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errorMessagesList = document.querySelector(".error-messages");

let errorMessages = [];

const validateForm = (e) => {
    // Evitar que el formulario se envíe
    e.preventDefault();

    // Vaciar el array de errores antes de rellenarlo de nuevo
    errorMessages = [];

    // VALIDACIONES
    // Nombre como campo obligatorio y empiece por mayuscula
    !/^[A-Z][a-z]{2,}$/.exec(nameInput.value.trim()) &&
        errorMessages.push(
            "El campo nombre es obligatorio y debe empezar por mayúscula"
        );
    // Teléfono válido
    !/^[679]\d{8}$/.exec(phoneInput.value.trim()) &&
        errorMessages.push("El campo teléfono no es válido");

    // Correo electrónico válido
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.exec(
        emailInput.value.trim()
    ) && errorMessages.push("El campo correo electrónico no es válido");

    // Evitar que el mensaje sea demasiado corto
    messageInput.value.trim().length < 10 &&
        errorMessages.push("Mensaje demasiado corto. Mínimo 10 caracteres");

    // ENVIAR O MOSTRAR ERRORES
    if (errorMessages.length === 0 && confirm("¿Enviar formulario?")) {
        // Enviar formulario
        contactForm.submit();
    } else {
        // Mostrar errores
        errorMessagesList.innerHTML = "";
        errorMessages.forEach((msg) => {
            errorMessagesList.innerHTML += `<li>${msg}</li>`;
        });
    }
};

contactForm.addEventListener("submit", validateForm);
