const jwt = require('jsonwebtoken');
const Users = require('../models/users');

const requireSignIn = async (req, res, next) => {
    console.log("Hello1");
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode
        console.log("Hello2");
        next();
    } catch (error) {
        console.log(error);
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const user = await Users.findById(req.user._id)
        console.log(user);
        if (!user.role) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access"
            })
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: "Error in Admin middleware"
        })
    }
}

module.exports = { requireSignIn, isAdmin };