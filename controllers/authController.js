const Customer = require('../models/Customer');


exports.register = async (req, res) => {
    const { first_name, last_name, email, password, phone, address } = req.body;

    try {
        // Check if the email is already in use
        const existingCustomer = await Customer.findOne({ where: { email } });
        if (existingCustomer) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Create a new customer
        const newCustomer = await Customer.create({
            first_name,
            last_name,
            email,
            password, // Note: Plain text password (not secure)
            phone,
            address
        });

        res.status(201).json({ message: 'Customer registered successfully', customer: newCustomer });
    } catch (error) {
        res.status(500).json({ message: 'Error registering customer', error: error.message });
    }
};
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the customer by email
        const customer = await Customer.findOne({ where: { email } });

        if (!customer) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if the password matches (plain text comparison)
        if (customer.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful', customer });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};