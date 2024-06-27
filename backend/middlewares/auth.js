import jwt from 'jsonwebtoken';
import logError from '../utils/logError.js';
import User from '../models/user.model.js';

export default async function auth(req, res, next) {
    try {
        const token = req.cookies.token;
        if(!token) {
            return res.status(401).json({
                message: 'Unathorized - No token provided'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.ststus(401).json({
                message: 'Unauthorized - Invalid token'
            });
        }

        const user = await User.findById(decoded.userId).select('-password');

        if(!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        req.user = user;

        next();
    } catch (error) {
        logError(error, res);
    }
};