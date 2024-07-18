document.addEventListener("DOMContentLoaded", function () {
    const loginSection = document.getElementById("loginSection");
    const signupSection = document.getElementById("signupSection");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const showSignupForm = document.getElementById("showSignupForm");
    const showLoginForm = document.getElementById("showLoginForm");

    showSignupForm.addEventListener("click", function (e) {
        e.preventDefault();
        loginSection.style.display = "none";
        signupSection.style.display = "block";
    });

    showLoginForm.addEventListener("click", function (e) {
        e.preventDefault();
        signupSection.style.display = "none";
        loginSection.style.display = "block";
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        validateLoginForm();
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        validateSignupForm();
    });

    function validateLoginForm() {
        const credential = document.getElementById("loginCredential").value;
        const password = document.getElementById("loginPassword").value;

        let valid = true;

        if (credential.length < 3) {
            valid = false;
            document.getElementById("loginCredentialError").textContent = "Invalid credential format";
        } else {
            document.getElementById("loginCredentialError").textContent = "";
        }

        if (password.length < 6) {
            valid = false;
            document.getElementById("loginPasswordError").textContent = "Password must be at least 6 characters long";
        } else {
            document.getElementById("loginPasswordError").textContent = "";
        }

        if (valid) {
            alert("Login successful!");
            loginForm.reset();
        }
    }

    function validateSignupForm() {
        const firstName = document.getElementById("signupFirstName").value;
        const lastName = document.getElementById("signupLastName").value;
        const mobile = document.getElementById("signupMobile").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("signupConfirmPassword").value;

        let valid = true;

        if (firstName.length < 1) {
            valid = false;
            document.getElementById("signupFirstNameError").textContent = "First name is required";
        } else {
            document.getElementById("signupFirstNameError").textContent = "";
        }

        if (lastName.length < 1) {
            valid = false;
            document.getElementById("signupLastNameError").textContent = "Last name is required";
        } else {
            document.getElementById("signupLastNameError").textContent = "";
        }

        if (!validateMobile(mobile)) {
            valid = false;
            document.getElementById("signupMobileError").textContent = "Invalid mobile number format";
        } else {
            document.getElementById("signupMobileError").textContent = "";
        }

        if (!validateEmail(email)) {
            valid = false;
            document.getElementById("signupEmailError").textContent = "Invalid email format";
        } else {
            document.getElementById("signupEmailError").textContent = "";
        }

        if (password.length < 6) {
            valid = false;
            document.getElementById("signupPasswordError").textContent = "Password must be at least 6 characters long";
        } else {
            document.getElementById("signupPasswordError").textContent = "";
        }

        if (password !== confirmPassword) {
            valid = false;
            document.getElementById("signupConfirmPasswordError").textContent = "Passwords do not match";
        } else {
            document.getElementById("signupConfirmPasswordError").textContent = "";
        }

        if (valid) {
            alert("Signup successful!");
            signupForm.reset();
        }
    }

    function validateMobile(mobile) {
        const re = /^[0-9]{10}$/;
        return re.test(mobile);
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
