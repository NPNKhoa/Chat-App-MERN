import User from '../models/user.model.js';
import logError from '../utils/logError.js';

const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const { fullname } = req.query;

        let filteredUsers;

        if(fullname) {
            filteredUsers = await User.find({
                _id: { $ne: loggedInUserId },
                fullname: new RegExp(fullname, 'i')
            }).select('-password');
        }
        else {
            filteredUsers = await User.find({
            _id: { $ne: loggedInUserId },
            }).select('-password');
        }

        res.status(200).json({
            data: filteredUsers,
        })
    } catch (error) {
        logError(error, res);
    }
};

export { getUsers, };