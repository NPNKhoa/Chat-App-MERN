export default function logError (error, res) {
    console.log(error);
    res.status(500).json({
        error: 'Internal server error',
    });
};