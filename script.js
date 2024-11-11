function validateForm() {
    document.getElementById("loginError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    let isValid = true;

    const login = document.getElementById("login").value;
    if (login.length <= 8 || /\d/.test(login) || !login.includes('.')) {
        document.getElementById("loginError").innerText = "Login ən az 8 simvol olmalı, nöqtə daxil etməli və rəqəm olmamalıdır.";
        isValid = false;
    }

    const password = document.getElementById("password").value;
    if (password.length <= 8 || !/[A-Z]/.test(password[0]) || !password.includes('.')) {
        document.getElementById("passwordError").innerText = "Password ən az 8 simvol olmalı, birinci hərf böyük olmalı və nöqtə olmalıdır.";
        isValid = false;
    }
    const email = document.getElementById("email").value;
    if (!email.includes('@')) {
        document.getElementById("emailError").innerText = "Email adresində '@' işarəsi olmalıdır.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").innerText = "Form uğurla göndərildi!";
    }
}