import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET ;
const authenticate = (req,res,next)=>{
    const auth = req.headers.authorization;
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : auth;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = User.getUserById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        req.user = user;
        next(); 
    } catch (error) {
        return res.status(401).json({ message: "Invalid token"});
    }


}
export default authenticate;