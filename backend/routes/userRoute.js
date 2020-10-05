// server.js is considered to be main app and userRoute.js is considered to be mini app 
// to avoid routes(links) beocoming too complicated.

import express from 'express';
import User from '../models/userModels';
import { getToken } from '../util';

const router = express.Router(); // create "mini route"

router.post("/signin", async (req,res) =>{
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser){
       res.send( {
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser) // To find out if the next request is authenticated or not. 
        } )
    }else{
        res.status(401).send( {msg: "Invalid E-mail or password."} );
    }
})

router.post("/register", async (req,res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const newUser = await user.save();
    if (newUser){
       res.send( {
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser) // To find out if the next request is authenticated or not. 
        } )
    }else{
        res.status(401).send( {msg: "Invalid user data."} );
    }
})

router.get("/createadmin", async  (req, res) => {
    try{
        // create admin acct with info provided and schema specified in userModels.js.
        const user =  new User({
            name: 'abc',
            email: 'abc123@gmail.com',
            password: '1234',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    }catch (error){
        res.send( { msg: error.message });
    }

}) 

export default router;

