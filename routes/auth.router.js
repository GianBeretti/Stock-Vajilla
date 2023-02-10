const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();

const {config} = require('./../config/config')


router.post('/login',
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
            const user = req.user;
            const secret = config.secret
            const jwtConfig = {
                expiresIn: '1d'
            };
            const payload = {
                sub: user.id,
                role: user.role
            };
            const token = jwt.sign(payload, secret, jwtConfig)
            res.json({user, token})
        } catch (error) {
            next(error)
        }
})



module.exports = router