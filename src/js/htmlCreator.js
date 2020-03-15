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
        <button type="button" class="js-next-button hidden">NEXT</button>`;
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
        <button type="button" class="js-final-button hidden">SEE SCORE</button>`;
    return newQuestion;
}

function createFinishHtml(){
    let feedback;
    if (correctCount/maxQuestions >= 0.8){
        feedback = "Nice job! You're a seasoned traveller! Keep up the great work.";
    }
    else if (correctCount/maxQuestions >= 0.5){
        feedback = "Not bad at all. A few more trips and you'll be a world culture expert!";
    }
    else {
        feedback = "You've still got some work to do. Keep practising.";
    }

    return `<img class="world-image" src="https://travel-quiz.s3-us-west-1.amazonaws.com/world2.jpg" \
        alt="FINAL SCORE. Planet Earth with lots of famous landmarks like the Eiffel Tower and the Statue of Liberty">\
        <h1 class="score">${correctCount} out of ${maxQuestions}</h1>\
        <h2 class="feedback">${feedback}</h2>\
        <button type="button" class="js-new-game-button">PLAY AGAIN</button>`;
}

function createWelcomeHtml(){
    return '<h1>Welcome to the travel and culture quiz!</h1>\
    <img class="earth-image" src="https://travel-quiz.s3-us-west-1.amazonaws.com/earth.png" alt="Planet Earth">\
    <button type="button" class="js-start-button">START QUIZ</button>';
}