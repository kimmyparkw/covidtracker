const db = require('../db/config');

class UserStates {
    constructor(params) {
        this.id = params.id || null;
        this.user_id = params.user_id;
        this.state_id = params.state_id;
    }
    static getAllByUserId(id){
        return db.manyOrNone(`SELECT * FROM user_states WHERE user_id = $1`, id)
        .then((userStates) => {
            return userStates.map((userState) => {
                return new this(userState)
            })
        })
    }
    static getDistinctStatesByUser(id){
        return db.manyOrNone(`SELECT DISTINCT state_id FROM user_states WHERE user_id = $1`, id)
        .then((userStates) => {
            return userStates.map((userState) => {
                return userState.state_id;
            })
        })
    }

    static getById(id){
        return db.oneOrNone(`SELECT * FROM user_states WHERE id = $1`, id)
        .then((userState) => {
            if(userState) return new this(userState);
            throw new Error('US user state not found!');
        });
    }

    static getByStateId(id){
        return db.oneOrNone(`SELECT * FROM user_states WHERE state_id = $1`, id)
        .then((userState) => {
            if(userState) return new this(userState);
            throw new Error('US user state not found!');
        });
    }

    save() {
        return db.one(
            `
                INSERT INTO user_states
                (user_id, state_id)
                VALUES
                ($/user_id/, UPPER($/state_id/))
                RETURNING *
            `, this
        )
        .then((userState) => {
            return Object.assign(this, userState);
        })
    }

    delete(){
        return db.oneOrNone(`DELETE FROM user_states WHERE id = $1`, this.id);
    }
}


module.exports = UserStates;