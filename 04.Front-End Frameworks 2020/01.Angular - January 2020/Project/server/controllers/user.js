const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        const id = req.params.id;
        models.User.find({ _id: id })
            .then(data => {
                const { username, firstName, lastName, email } = data[0]; //password is prevent to be sent to the front-end
                userDetails = { username, firstName, lastName, email };
                return userDetails;
            })
            .then((user) => res.send(user))
            .catch(next)
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { firstName, lastName, email } = req.body;
        const query = { firstName, lastName, email }
        models.User.findOneAndUpdate({ _id: id }, query, { new: true })
            .then((updatedUser) => res.send(updatedUser))
            .catch(err => console.log(err))
    },

    add: (req, res, next) => {
        const userId = req.params.id;
        const item = JSON.stringify(req.body);

         models.User.findOneAndUpdate({ _id:userId }, { $push: { cart: item } }, { new: true })
            .then(resp => res.send(resp))
 

    },

    getCartItems: (req,res,next) =>{
        const userId = req.params.id;
        models.User.find({_id:userId})
        .then(data=>{
            const {cart} = data[0]
            res.send(cart)
        })
    },

    deleteCart: (req,res,next) =>{
        const userId = req.params.id;
        console.log(userId)
        models.User.findOneAndUpdate({ _id:userId }, { cart : [] } )
        .then(resp=>res.send(resp))
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {

            const { passwords, firstName, lastName, email } = req.body;
            let password=passwords.password
            models.User.create({password, firstName, lastName, email })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { email, password } = req.body;
            models.User.findOne({ email })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }
                    const token = utils.jwt.createToken({ id: user._id });
                    const {email, firstName, lastName} = user;
                    const currentUser =  {email, firstName, lastName};
                    console.log(currentUser)
                    res.cookie(config.authCookieName, token).send(currentUser);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        },
    }

};