const User = require('./user').User;
const Role = require('./role').Role;
const Respondent = require('./respondent').Respondent;
const CorrectAnswer = require('./correctAnswers').CorrectAnswers;
const IncorrectAnswer = require('./incorrectAnswer').IncorrectAnswers;
const Question = require('./question').Question;
const PossibleAnswer = require('./incorrectAnswer').PossibleAnswer;
const Survey = require('./survey').Survey;
const Report = require('./report').Report;

module.exports = {
    User,
    Role,
    Respondent,
    CorrectAnswer,
    IncorrectAnswer,
    Question,
    PossibleAnswer,
    Survey,
    Report
};