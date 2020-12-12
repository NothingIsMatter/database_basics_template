const connection = require('../connection');
const Sequilize = require('sequelize');
const Model = Sequilize.Model;

class Survey extends Model {}
Survey.init(
    {
        name: {
            type: Sequilize.STRING,
            allowNull: false
        },
        topic: {
            type: Sequilize.STRING,
            allowNull: false
        },
    },

    {
        sequelize: connection,
        modelName: 'survey',
        timestamps: false
    }
);

module.exports = {
    Survey: Survey
};