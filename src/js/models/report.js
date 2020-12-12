const connection = require('../connection');
const Sequilize = require('sequelize');
const User = require('./user').User;
const Question = require('./survey').Survey;
const Model = Sequilize.Model;

class Report extends Model {}
Report.init(
    {
        text: {
            type: Sequilize.TEXT,
            allowNull: false
        },
        user_id:{
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        survey_id:{
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: Survey,
                key: 'id'
            }
        }
    },

    {
        sequelize: connection,
        modelName: 'report',
        timestamps: false
    }
);

module.exports = {
    Report: Report
};