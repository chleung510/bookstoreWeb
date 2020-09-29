import mogoose from 'mongoose';

// specify how the user will be saved in database
const userSchema = new mogoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true }, // unique is to make sure no acct having delicated e-mail.
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }  // user acct is not in admin group
});

// Take the schema and create an instance of a document equivalent to records in a relational database
const userModel = mogoose.model("User", userSchema);

export default userModel;