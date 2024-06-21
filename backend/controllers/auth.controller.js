import bcrypt from 'bcryptjs';
import userModel from '../models/user.model.js';
import generateToken from '../utils/generateToken.js';
import logError from '../utils/logError.js';

const signup = async (req, res) => {
  try {
    const {
      fullname,
      username,
      password,
      confirmationPassword,
      gender,
      // profilePicture, // TODO: Develop a feature allow users to upload their profile picture
    } = req.body;

    if (
      !fullname ||
      !username ||
      !password ||
      !gender ||
      !confirmationPassword
    ) {
      return res.status(400).json({
        message: 'Please fill the required fields',
      });
    }

    if (password !== confirmationPassword) {
      return res.status(400).json({
        message: 'Password and confirmation password do not match',
      });
    }

    const user = await userModel.findOne({ username });

    if (user) {
      return res.status(400).json({
        message: 'Username are already exists',
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar.iran.liara.run is a free service to generate random avatars

    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new userModel({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === 'male' ? boyPic : girlPic,
    });

    if(newUser) {
        // Generate token
        generateToken(newUser._id, res);
        await newUser.save();

        res.status(201).json({
          data: {
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            gender: newUser.gender,
          },
          message: 'User created successfully',
        });
    }
    else {
        res.status(400).json({
            message: 'Invalid user data',
        })
    }
  } catch (error) {
    logError(error, res);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    
    if(!user) {
        return res.status(404).json({
            message: 'User not found',
        });
    }

    const isCorrecPassword = await bcrypt.compare(password, user.password);
    
    if(!isCorrecPassword) {
        return res.status(400).json({
            message: 'Invalid username or password',
        });
    }

    generateToken(user._id, res);

    res.status(200).json({
        data: {
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
        },
        message: 'Logged in successfully',
    })
  } catch (error) {
    res.status(500).json({
        error: 'Internal server error',
    })
    console.log(error);
  }
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({
    message: 'Logged out successfully',
  });
};

export { login, signup, logout };
