// server.js is considered to be main app and userRoute.js is considered to be mini app 
// to avoid routes(links) beocoming too complicated.

import express from 'express';
import User from '../models/userModels';

const router = express.Router(); // create "mini route"

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

