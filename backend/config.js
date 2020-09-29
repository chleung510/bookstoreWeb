// .env is a configuration file for hiding the mongoDB address and connecting to mongoDB database thru dotenv application.

export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/bookstoreWeb'
}