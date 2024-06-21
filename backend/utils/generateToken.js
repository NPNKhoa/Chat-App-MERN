import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
    // Generate token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });

    // Set cookie
    res.cookie('token', token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true, // prevent XSS attack by not allowing JS to access the cookie
        sameSite: 'strict', // CSRF attack cross-site request forgery
    });
};

export default generateToken;