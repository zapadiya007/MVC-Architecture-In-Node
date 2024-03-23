const User = require("../models/userModel");



const allUser = async (req, res) => {

    let userOBJ = new User();
    let data = await userOBJ.allUser();

    res.send(data);
}

const oneUser = async (req, res) => {
    let userOBJ = new User();
    let data = await userOBJ.getUserByID(1);
    res.send(data);
}


module.exports = {
    allUser,
    oneUser
}