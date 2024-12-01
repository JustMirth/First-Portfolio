/* Projects Scripts */
document.addEventListener("DOMContentLoaded", function () {
    
    const buttons = document.querySelectorAll('.toggle-details');
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const projectDetails = button.nextElementSibling;
            
            if (projectDetails.style.display === 'none') {
                projectDetails.style.display = 'block';
                button.textContent = 'Hide Details';   
            } else {
                projectDetails.style.display = 'none';
                button.textContent = 'Show Details';
            }
        });
    });
});

/* Form Scripts */
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userMessageInput = document.getElementById("userMessage");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const userMessageError = document.getElementById("userMessageError");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
    nameError.textContent = "";
    emailError.textContent = "";
    userMessageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;
    
    if(nameInput.value.trim() === ""){
        nameError.textContent = "Please Enter Your Name";
        isValid = false;
    }

    if(emailInput.value.trim() === ""){
        emailError.textContent = "Please Enter Your Email";
        isValid = false;
    } else if(!validateEmail(emailInput.value)){
        emailError.textContent = "Please Enter A Valid Email Address";
        isValid = false;
    }

    if(userMessageInput.value.trim() === ""){
        userMessageError.textContent = "Please Enter Your Message";
        isValid = false;
    }

    if(isValid){
        successMessage.textContent = "Thank you for the message, I will try to respond as soon as possible."
        event.preventDefault();
    }
    
    if (!isValid) {
        event.preventDefault();
    }

});

function validateEmail(email){
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email));
}