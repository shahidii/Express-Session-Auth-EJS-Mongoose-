document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form or redirect to another page
    this.reset(); // Resets the form fields
});
