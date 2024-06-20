
const login = (req, res) => {
    res.send('Login route');
}

const signup = (req, res) => {
    res.send('Signup route');
};

const logout = (req, res) => {
    res.send('Logout route');
};

export { login, signup, logout, };