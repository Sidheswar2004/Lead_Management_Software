import jwt from 'jsonwebtoken';


const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        console.log(req.user);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed!' });
    }
}

export default verifyToken;