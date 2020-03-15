function createQuestionHtml(selectedQuestion){
    const newQuestion = 
        `<img class="question-image" src=${selectedQuestion.imageSrc} alt=${selectedQuestion.imageAlt}>
        <h2>${selectedQuestion.question}</h2>\
        <ul data-item-id="${selectedQuestion.id}">
            <li>${selectedQuestion.options[0]}</li>
            <li>${selectedQuestion.options[1]}</li>
            <li>${selectedQuestion.options[2]}</li>
            <li>${selectedQuestion.options[3]}</li>
        </ul>\
        <button type="button" class="js-next-button hidden">Next</button>`;
    return newQuestion;
}

function createFinalQuestionHtml(selectedQuestion){
    const newQuestion = 
        `<img class="question-image" src=${selectedQuestion.imageSrc} alt=${selectedQuestion.imageAlt}>
        <h2>${selectedQuestion.question}</h2>\
        <ul data-item-id="${selectedQuestion.id}">
            <li>${selectedQuestion.options[0]}</li>
            <li>${selectedQuestion.options[1]}</li>
            <li>${selectedQuestion.options[2]}</li>
            <li>${selectedQuestion.options[3]}</li>
        </ul>\
        <button type="button" class="js-final-button hidden">See Score</button>`;
    return newQuestion;
}

function createFinishHtml(){
    return `<img class="world-image" src="https://travel-quiz.s3-us-west-1.amazonaws.com/world2.jpg" alt="jakdjakdja">\
        <h1 class="score">${correctCount} out of ${maxQuestions}</h1>\
        <button type="button" class="js-new-game-button">Play again</button>`;
}

function createWelcomeHtml(){
    return '<h1>Welcome to the travel and culture quiz!</h1>\
    <img class="earth-image" src="https://travel-quiz.s3-us-west-1.amazonaws.com/earth.png" alt="Planet Earth">\
    <button type="button" class="js-start-button">Start quiz</button>';
}