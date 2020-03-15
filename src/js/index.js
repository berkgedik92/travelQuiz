'use-strict';

let questionCount = 0;
let correctCount = 0;
let questionSet;
const maxQuestions = 5;
const welcomeScreen = $("main").clone();

//  WITH EVENT LISTENERS
function handleGetNewQuestion(){
    $('main').on('click', '.js-next-button', (event) => {
        renderQuestion();
    });
    $('main').on('click', '.js-start-button', (event) => {
        renderQuestion();
        $("main").removeClass("hidden-background");
    });
};

function handleClickSeeScore(){
    $('main').on('click', '.js-final-button', (event) => {
        renderFinishScreen();
    });    
};

function handleClickNewGame(){
    $('main').on('click', '.js-new-game-button', (event) => {
        initialiseQuestions();
        renderWelcomeScreen();
    });   
};

function handleUserAnswer(){
    // must make links not clickable after clicking
    $('main').on('click', 'li', (event) => {
        // Remove hover and clicking functionality on answered question
        $("main li").css("pointer-events","none");

        const selectedAnswer = $(event.currentTarget).text().toLowerCase();
        const id = $(event.currentTarget).parent().data('item-id');
        const correctAnswer = getCorrectAnswer(id);
        const answerCorrect = correctAnswer === selectedAnswer;; 
        if (answerCorrect){
            console.log("User answer was correct.");
            handleCorrectAnswer(correctAnswer);
            correctCount ++;
            updateHeader();
        }
        else {
            console.log("User answer was incorrect.");
            handleIncorrectAnswer(selectedAnswer, correctAnswer);
        }
    });
}   

// WITHOUT EVENT LISTENERS
function getCorrectAnswer(questionId){
    const curQuestion = QUESTIONS.find(item => item.id === questionId);
    return curQuestion.correctAnswer;
}

function initialiseQuestions(){
    // initialise and populate question array
    questionCount = 0;
    correctCount = 0;
    questionSet = [...QUESTIONS];
}

function handleCorrectAnswer(correctAnswer){
    $( "li" ).each(function() {
        if ($(this).text().toLowerCase() === correctAnswer){
            $(this).addClass("correct-answer");
        }
        else {
            $(this).addClass("grey-out");
        }
        $("button[type='button'").removeClass("hidden");
        $(".question-image").attr("src", "https://travel-quiz.s3-us-west-1.amazonaws.com/correct.jpg");
        $(".question-image").attr("alt", "Correct");
      });
}

function handleIncorrectAnswer(selectedAnswer, correctAnswer){
    $( "li" ).each(function() {
        if ($(this).text().toLowerCase() === selectedAnswer){
            $(this).addClass("incorrect-answer");
        }
        else if ($(this).text().toLowerCase() === correctAnswer){
            $(this).addClass("correct-answer");
        }
        else {
            $(this).addClass("grey-out");
        }
        $("button[type='button'").removeClass("hidden");
        $(".question-image").attr("src", "https://travel-quiz.s3-us-west-1.amazonaws.com/incorrect.jpg");
        $(".question-image").attr("alt", "Incorrect");
    });
}

function renderWelcomeScreen(){
    $("main").html(createWelcomeHtml());
    $("main").addClass("hidden-background");
    updateHeader();
};

function renderQuestion(){
    console.log("Rendering a question");
    const curQuestion = getRandomQuestion();
    let questionHtml;
    questionCount ++;
    if (questionCount < maxQuestions){
        questionHtml = createQuestionHtml(curQuestion);
    }
    else {
        questionHtml = createFinalQuestionHtml(curQuestion);
    }

    $("main").html(questionHtml);
    updateHeader();
    
};

function getRandomQuestion(){
    // Select random question and then remove it from array so it cannot be repeated
    const randomIndex = Math.floor(Math.random() * questionSet.length)
    const curQuestion = questionSet[randomIndex];
    questionSet.splice(randomIndex,1);
    return curQuestion;
}

function renderFinishScreen(){
    $("main").html(createFinishHtml());
    $("main").addClass("hidden-background");
};

function updateHeader(){
    $(".js-question-progress").text(`${questionCount} of ${maxQuestions}`);
    $(".js-current-score").text(`${correctCount}`);
}

// MAIN HANDLER
function initialise(){
    $(initialiseQuestions);
    $(handleGetNewQuestion);
    $(handleClickSeeScore);
    $(handleClickNewGame);
    $(handleUserAnswer);
    $(renderWelcomeScreen);
}

$(initialise);






