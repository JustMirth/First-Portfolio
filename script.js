//Show details buttons
document.addEventListener("DOMContentLoaded", function () {
    
    // Select all buttons with class 'toggle-details'
    const buttons = document.querySelectorAll('.toggle-details');
    
    // Iterate through each button and attach an event listener
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the associated project details div
            const projectDetails = button.nextElementSibling;
            
            // Toggle visibility of the project details
            if (projectDetails.style.display === 'none') {
                projectDetails.style.display = 'block';  // Show details
                button.textContent = 'Hide Details';     // Change button text
            } else {
                projectDetails.style.display = 'none';  // Hide details
                button.textContent = 'Show Details';    // Change button text
            }
        });
    });
});