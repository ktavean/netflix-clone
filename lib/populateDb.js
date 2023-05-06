const User = require("../models/user");
const dbConnect = require("./dbConnect");

const populateDb = async () => {
    await dbConnect();
    const admin = {
        username: "admin",
        password: "admin",
        favorites: ["test1", "test2"],
    }
    const newUser = new User(admin);
    await newUser.save();
    console.log("Saved. Testing to check.")
    console.log(await User.find());
}

populateDb();
