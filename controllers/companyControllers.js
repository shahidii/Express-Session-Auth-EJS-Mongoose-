const bcrypt = require('bcrypt'); // Import bcrypt for hashing
const Company = require('../models/Company'); // Mongoose Company model

const getHome = (req, res) => {
    try {
        res.render('home'); // Render the home page
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

const getSignup = (req, res) => {
    try {
        res.render('signup'); // Render the signup page
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

const signupCompany = async (req, res) => {
    const { name, email, password } = req.body;

    // Server-side validation
    if (!name || name.length < 3) {
        return res.status(400).json({ error: "Name must be at least 3 characters long." });
    }
    if (!validateEmail(email)) {
        return res.status(400).json({ error: "Please enter a valid company email." });
    }
    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        return res.status(400).json({ error: "Password must be at least 8 characters long, with at least 1 number and 1 special character." });
    }

    try {
        // Check if the company email already exists
        const existingCompany = await Company.findOne({ email });
        if (existingCompany) {
            return res.status(400).json({ error: "Company with this email already exists." });
        }

        // Hash the password before saving
        const saltRounds = 10; // Adjust as needed; 10 is a good default
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new company with hashed password
        const company = new Company({ name, email, password: hashedPassword });
        await company.save();
        console.log("Company created successfully:", company);
        
        // Redirect the user after successful registration
        // return res.redirect('/login');  // Redirect here instead of sending JSON
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error. Please try again later." });
    }
};


// Helper function to validate email format
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

module.exports = { getHome, getSignup, signupCompany };
