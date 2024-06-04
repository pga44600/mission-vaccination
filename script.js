function startGame() {
    window.location.href = 'mission1.html';
}

function showInstructions() {
    window.location.href = 'instructions.html';
}

function showHome() {
    window.location.href = 'index.html';
}

function checkQuiz() {
    const incorrectAnswers = ["question1", "question2"];
    const correctAnswers = ["question3", "question4"];
    let correct = true;

    incorrectAnswers.forEach(answer => {
        const checkbox = document.querySelector(`input[name="${answer}"]`);
        if (checkbox.checked) { 
            correct = false;
        }
    });

    correctAnswers.forEach(answer => {
        const checkbox = document.querySelector(`input[name="${answer}"]`);
        if (!checkbox.checked) { 
            correct = false;
        }
    });

    const resultElement = document.getElementById('quiz-result');
    if (correct) {
        resultElement.innerText = "Bien joué ! Vous avez identifié toutes les fausses informations.";
        setTimeout(function() {
            window.location.href = 'mission2.html'; 
			}, 3500);
    } else {
        resultElement.innerText = "Certaines de vos réponses sont incorrectes. Essayez encore.";
    }
}

function checkConspiracy() {
    const correctAnswers = ["effets secondaires", "effet secondaire", "effets secondaire","effet secondaires","puce 5G","puce","puce électronique","puce de tracage","virus inventé pour exterminer une partie de la population","puce de traçage"];
    const userAnswer = document.getElementById('conspiracy-input').value.toLowerCase();
    const resultElement = document.getElementById('conspiracy-result');

    if (correctAnswers.includes(userAnswer)) {
        resultElement.innerText = "Correct ! Les effets secondaires sont souvent exagérés dans les théories de conspiration.";
        setTimeout(function() {
            window.location.href = 'mission3.html'; 
			}, 3500);
    } else {
        resultElement.innerText = "Incorrect. Réessayez.";
    }
}

function checkSources() {
    const correctSources = ["source1", "source3"];
    const incorrectSources = ["source2", "source4"];
    let correct = true;

    correctSources.forEach(source => {
        const checkbox = document.querySelector(`input[name="${source}"]`);
        if (!checkbox.checked) {
            correct = false;
        }
    });

    incorrectSources.forEach(source => {
        const checkbox = document.querySelector(`input[name="${source}"]`);
        if (checkbox.checked) {
            correct = false;
        }
    });
    const resultElement = document.getElementById('résultats des sources');
    if (correctAnswers.includes(userAnswer)) {
        resultElement.innerText = "Excellent ! Vous avez identifié les sources fiables.";
        setTimeout(function() {
            window.location.href = 'mission4.html'; 
			}, 3500);
    } else {
        resultElement.innerText = "Incorrect. Réessayez.";
    }
}

function checkVaccine() {
    const correctAnswer = ["le système immunitaire", "Le système immunitaire"];
    const userAnswer = document.getElementById('vaccine-input').value.toLowerCase();
    const resultElement = document.getElementById('vaccine-result');

    if (userAnswer.includes(correctAnswer)) {
        resultElement.innerText = "Correct ! Les vaccins fonctionnent en stimulant le système immunitaire pour qu'il reconnaisse et combatte les agents pathogènes.";
		setTimeout(function() {
            window.location.href = 'mission5.html'; 
			}, 3500);
    } else {
        resultElement.innerText = "Incorrect. Réessayez.";
    }
}
function checkResponse() {
    const correctAnswers = ["question1","question3","question4"];
    const incorrectAnswers = "question2";
    let correct = true;

    incorrectAnswers.forEach(answer => {
        const checkbox = document.querySelector(`input[name="${answer}"]`);
        if (checkbox.checked) { 
            correct = false;
        }
    });

    correctAnswers.forEach(answer => {
        const checkbox = document.querySelector(`input[name="${answer}"]`);
        if (!checkbox.checked) { 
            correct = false;
        }
    });

    const resultElement = document.getElementById('quiz-result');
    if (correct) {
        resultElement.innerText = "Bien joué ! Vous avez identifié toutes les fausses informations.";
        setTimeout(function() {
            window.location.href = 'victoire.html'; 
			}, 3500);
    } else {
        resultElement.innerText = "Certaines de vos réponses sont incorrectes. Essayez encore.";
    }
}