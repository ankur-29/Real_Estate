import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const registerUser = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(401).json({
                message: `Email already used.`,
                success: false,
            })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, phone, password: hashedPassword });
        await newUser.save();
        res.status(201).json({
            message: 'User created successfullly',
            success: true,
        })
    } catch (err) {
        res.status(501).json({
            message: err.message || 'Internal Server Error',
            success: false,
        })
    }
}
