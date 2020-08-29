const db = require('../db/config')

class User {
    constructor({ id, username, email, password_digest }) {
        this.id = id || null;
        this.username = username;
        this.email = email;
        this.password_digest = password_digest;
    }

    static getByUserName(username) {
        return db.oneOrNone(`
        SELECT * FROM users WHERE username = $1`, username)
            .then(user => {
                if (user) return new this(user)
                throw new Error(`No user with username: ${username} found.`)
        })
    }

    //SEARCH BY USERID - Will be used for User-States?
    static getByUserId(id) {
        console.log("Arrive getByUserId in User model")
        return db.oneOrNone("SELECT * FROM users WHERE id = $1", id)
          .then((user) => {
            if (user) return new this(user);
            throw new Error(`No user found with id: ${id}`);
          });
      }

    //CREATE NEW USER
    save() {
        return db.one(`INSERT INTO users
        (username, email, password_digest)
        VALUES ($/username/, $/email/, $/password_digest/) RETURNING *`, this)
        .then(user => Object.assign(this, user))
    }

    //UPDATE USER PROFILE
    update(changes, id) {
        Object.assign(this, changes)
        console.log(changes)
        return db.oneOrNone(
            `UPDATE users SET
            email = $/email/, password_digest = $/password_digest/ WHERE id = ${id} RETURNING *`, this)
            .then(user => {
            return Object.assign(this, user)
        })
    }
}

module.exports = User