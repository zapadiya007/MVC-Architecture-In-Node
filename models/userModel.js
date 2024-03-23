const { dbWithPromise } = require("../config/dbConnection");



class User {

    async allUser() {

        let sql = 'select * from user_master limit 10'
        const data = await dbWithPromise.execute(sql)

        return data[0];
    }

    async getUserByID(id) {

        let sql = `select * from user_master where id = ${id}`
        const data = await dbWithPromise.execute(sql);

        return data[0];
    }

}

module.exports = User;
