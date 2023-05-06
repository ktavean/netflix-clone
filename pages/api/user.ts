import { compareSync } from "bcrypt";
import dbConnect from "lib/dbConnect";
import User from "models/user";

export default async function handle(req, res) {
    await dbConnect();
    const { email: username, password } = JSON.parse(req.body);
    const user = await User.findOne({ username });
    if (!user) {
        res.json("An error occured. User not found.")
        return;
    }
    const passwordMatches = await compareSync(password, user.password);
    if (!passwordMatches) {
        res.json("An error occured. Password is incorrect.")
        return;
    }
    res.json("Logged in");
}
