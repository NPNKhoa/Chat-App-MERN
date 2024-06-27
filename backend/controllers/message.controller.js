import logError from "../utils/logError.js"
import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import User from '../models/user.model.js';

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        if (!receiverId) {
          return res.status(400);
        }

        if (!message) {
          return res.status(400);
        }

        let conversation = await Conversation.findOne({
            participants: { 
                $all: [senderId, receiverId],
            },
        });

        if(!conversation) {
            conversation = await Conversation.create({
              participants: [senderId, receiverId],
              messages: [],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        Promise.all([
            newMessage.save(),
            conversation.save(),
        ]); // This will run in parallel

        res.status(201).json({
            data: newMessage,
            message: 'Message sent',
        })
    } catch (error) {
        logError(error, res);
    }
}

const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        const { fullname } = req.query;
        
        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId],
            }
        }).populate('messages');

        if(!conversation) {
            return res.status(200).json({
                data: [],
            });
        }

        res.status(200).json({
          data: conversation.messages,
        });
    } catch (error) {
        logError(error, res);
    }
};

export { sendMessage, getMessages, };