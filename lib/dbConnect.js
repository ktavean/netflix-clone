const mongoose = require("mongoose");
// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config();

if (!process.env.DB_URL) {
    throw new Error("Database URL is undefined. Check the .env file.");
}

let cached = global.mongoose;

if (!cached) {
    global.mongoose = { conn: null, promise: null };
    cached = global.mongoose;
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.DB_URL).then((mongooseInstance) => mongooseInstance)
    }
    cached.conn = await cached.promise
    return cached.conn
}

module.exports = dbConnect;
