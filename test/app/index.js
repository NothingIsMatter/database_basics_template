const models = require("../../src/js/models");
const Table = require("cli-table3");
const _ = require("lodash-node");
const chalk = require("chalk");



module.exports = {
    run: (async () => {
            const usersList = await models.User.findAll();
            console.log(chalk.green(`Users list`));
            console.log((usersList));

            const rolesList = await models.Role.findAll();
            console.log(chalk.green(`Roles List`));
            console.log((rolesList));

            const respondents = await models.Respondent.findAll();
            console.log(chalk.green(`Experts list`));
            console.log((respondents));

            const correctAnswers = await models.CorrectAnswer.findAll();
            console.log(chalk.green(`Answers list`));
            console.log((correctAnswers));

            const incorrectAnswers = await models.IncorrectAnswer.findAll();
            console.log(chalk.green(`Question list`));
            console.log((incorrectAnswers));

            const questionTypesList = await models.Report.findAll();
            console.log(chalk.green(`Question types list`));
            console.log((questionTypesList));


        }
    )
};