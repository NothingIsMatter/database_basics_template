const connection = require('../connection');
const Sequilize = require('sequelize');
const Question = require('./question').Question;
const Respondent = require('./respondent').Respondent;
const Model = Sequilize.Model;

class CorrectAnswers extends Model {}
CorrectAnswers.init(
    {
        text: {
            type: Sequilize.STRING,
            allowNull: false
        },
        question_id:{
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: Question,
                key: 'id'
            }
        },
        respondent_id:{
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: Respondent,
                key: 'id'
            }
        }
    },

    {
        sequelize: connection,
        modelName: 'correctAnswers',
        timestamps: false
    }
);

module.exports = {
    CorrectAnswers: CorrectAnswers
};