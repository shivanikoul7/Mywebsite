// Function to validate form data
function validateForm(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation checks
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Email format validation (basic regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If validation passes, redirect to the next page
    window.location.href = "thankyou.html"; // Redirects to thankyou.html
}
