function validateForm(event) {
    event.preventDefault(); // Prevent traditional form submission
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous error messages
    let isValid = true;
    
    // Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate username/email
    if (!username.value) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Username/E-mail is required';
        errorMessages.appendChild(errorMessage);
        isValid = false;
    } else if (!emailRegex.test(username.value)) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please enter a valid email address';
        errorMessages.appendChild(errorMessage);
        isValid = false;
    }

    // Validate password
    if (!password.value) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Password is required';
        errorMessages.appendChild(errorMessage);
        isValid = false;
    }

    if (!isValid) {
        return false; // Stop further execution if validation fails
    }

    // Simulate authentication process
    // Replace this with actual server-side validation
    const demoUsername = "saurinpatel5@gmail.com"; // Placeholder username
    const demoPassword = "test"; // Placeholder password

    if (username.value === demoUsername && password.value === demoPassword) {
        // Redirect to index.html upon successful login
        window.location.href = "index.html";
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Invalid username or password';
        errorMessages.appendChild(errorMessage);
    }

    return false; // Return false to ensure no further action by the form
}

// Attach event listener for form submission
document.getElementById('loginForm').addEventListener('submit', validateForm);
