const { getUsers } = require("../services/user.service")

module.exports = {
    list: async (req, res) => {
        try {
            const users = await getUsers();
            const RESPONSE = {
                meta: 200,
                data: users,
                date: new Date().toDateString()
            }
            return res.status(200).json(RESPONSE)
        } catch (error) {
            return res.status(500).json({ Error: error });
        }
    }
}