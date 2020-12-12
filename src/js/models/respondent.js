const connection = require('../connection');
const Sequilize = require('sequelize');
const User = require('./user').User;
const Model = Sequilize.Model;

class Respondent extends Model {}
Respondent.init(
    {
        specialization: {
            type: Sequilize.STRING,
            allowNull: false
        },
        user_id:{
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    },

    {
        sequelize: connection,
        modelName: 'respondent',
        timestamps: false
    }
);

module.exports = {
    Respondent: Respondent
};