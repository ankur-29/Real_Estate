import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {

        const { name, email, phone, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(401).json({
                message: `Email already used.`,
                success: false,
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, phone, password: hashedPassword });
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

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        let user = await User.findOne({ email });
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!user || !isPasswordMatch) {
            return res.status(401).json({
                message: `Incorrect Email or Password.`,
                success: false,
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        let userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.cookie('access_token', token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict',
        }).status(200).json(userWithoutPassword);
    } catch (err) {
        console.log(err);
    }
}

