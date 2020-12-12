const models = require("./models");


const mapper = (entity) => {
    console.log(`${entity.id}`);
};


module.exports = {
    run: (async () => {
        console.log('--------\nSurvey list\n--------');
        const surveyList = await models.Survey.findAll();
        surveyList.map(mapper);
        console.log('--------\nCorrect answers list\n--------');
        const correctAns = await models.CorrectAnswer.findAll();
        correctAns.map(mapper);
        console.log('--------\nUsers list\n--------');
        const usersList = await models.User.findAll();
        usersList.map(mapper);
        console.log('--------\nRole List\n--------');
        const rolesList = (await models.Role);
        rolesList.map(mapper);
    })
};