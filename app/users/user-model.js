const MongoDB = require("./../conn")
const db = MongoDB.getDb()

const createUser = async(users, user) => {
    const userCreated = await users.insertOne(user)
    console.log("This is the  isrr", userCreated.ops[0])
}

module.exports = { createUser }