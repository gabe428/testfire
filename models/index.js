module.exports = function(db) {

 function createUser(username, password, first_name, last_name, email, callback) {
        const sql = `
          INSERT INTO users
          (username, password, first_name, last_name, email, created, modified)
          VALUES
          (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
        `;
        db.query(sql, [username, password, first_name, last_name, email], function(error, results) {
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
