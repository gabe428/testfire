module.exports = function(db) {

 function createUser(username, password, callback) {
        const sql = `
          INSERT INTO users
          (username, password)
          VALUES
          (?, ?);
        `;
        db.query(sql, [username, password], function(error, results) {
            if (error) {
                callback(error);
                return;
            }
            callback(null, results);
        });
    }

    return {
        createUser
    };
}
