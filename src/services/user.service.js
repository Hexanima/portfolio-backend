const { User } = require("../database/models")

async function getUsers() {
    try {
        const users = await User.findAll();
        return users
    } catch (error) {
        console.error("Error while fetching users:", error);
        throw new Error("Error fetching users");
    }
}

module.exports = { getUsers }