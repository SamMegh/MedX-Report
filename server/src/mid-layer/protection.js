import jwt from 'jsonwebtoken';
import User from '../DB-Model/user.model';

export default async function Protection(req, res, next) {
    try {
        const token = req.cookies.JWT
        if (!token) {
            return res.status(401).json({ message: "unauthroized access: no token provided" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({ message: "unauthroized access: invalid token provided" });
        }

        const loginUser = await User.findById(decode.userid).select("-password");
        if (!loginUser) {
            return res.status(401).json({ message: 'user not found' });
        }
        req.user = loginUser;
        next();
    } catch (error) {
        res.status(500).json({ message: "internal server error" + error });
    }


}