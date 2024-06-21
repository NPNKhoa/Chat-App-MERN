import User from '../models/user.model.js';
import logError from '../utils/logError.js';

const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({
            _id: { $ne: loggedInUserId}
        }).select('-password -profilePicture');

        res.status(200).json({
            data: filteredUsers,
        })
    } catch (error) {
        logError(error, res);
    }
};

export { getUsers, };