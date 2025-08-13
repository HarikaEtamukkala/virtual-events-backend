import bcrypt from "bcryptjs";
import { userModel } from '../models/userModel.js';
import { sendEmail } from '../utils/email.js';
import jwt from "jsonwebtoken";

export const AuthController = {
    async registerUser(req, res) {
        const { username, email, password, role } = req.body;

        if (!username || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (!email.includes("@")) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const userData = { username, email, password: passwordHash, role };
        const newUser = userModel.createUser(userData);
        const emailP = await sendEmail(email, "Welcome to Our Service", "Thank you for registering!");
        const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(201).json({ message: "User registered successfully", user: { id: newUser.id, name: newUser.username, role: newUser.role }, token });
    },

    async loginUser(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = userModel.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: "Login successful", user, token });
    }
    
};







