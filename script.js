// JavaScript

// Fonction pour démarrer le jeu
document.getElementById('start-game-button').addEventListener('click', function() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
});

// Fonction pour vérifier le quiz de la Mission 1
document.getElementById('check-quiz-button').addEventListener('click', function() {
    const incorrectAnswers = ["question1"];
    let correct = true;

    incorrectAnswers.forEach(answer => {
        const checkbox = document.querySelector(`input[name="${answer}"]`);
        if (checkbox.checked) {
            correct = false;
        }
    });

    const correctAnswers = ["question2", "question3", "question4"];
    correctAnswers.forEach(answer => {
        const checkbox = document.querySelector(`input[name="${answer}"]`);
        if (!checkbox.checked) {
            correct = false;
        }
    });

    const resultElement = document.getElementById('quiz-result');
    if (correct) {
        resultElement.innerText = "Bien joué ! Vous avez identifié toutes les fausses informations.";
        document.getElementById('mission1').style.display = 'none';
        document.getElementById('mission2').style.display = 'block';
    } else {
        resultElement.innerText = "Certaines de vos réponses sont incorrectes. Essayez encore.";
    }
});

// Fonction pour vérifier la théorie de conspiration de la Mission 2
document.getElementById('check-conspiracy-button').addEventListener('click', function() {
    const correctAnswer = "effets secondaires";  // Un des arguments souvent mentionnés
    const userAnswer = document.getElementById('conspiracy-input').value.toLowerCase();
    const resultElement = document.getElementById('conspiracy-result');

    if (userAnswer.includes(correctAnswer)) {
        resultElement.innerText = "Correct ! Les effets secondaires sont souvent exagérés dans les théories de conspiration.";
        document.getElementById('mission2').style.display = 'none';
        document.getElementById('mission3').style.display = 'block';
    } else {
        resultElement.innerText = "Incorrect. Réessayez.";
    }
});

// Fonction pour vérifier les sources de la Mission 3
document.getElementById('check-sources-button').addEventListener('click', function() {
    const correctSources = ["source1", "source3"];
    let correct = true;

    correctSources.forEach(source => {
        const checkbox = document.querySelector(`input[name="${source}"]`);
        if (!checkbox.checked) {
            correct = false;
        }
    });

    const incorrectSources = ["source2", "source4"];
    incorrectSources.forEach(source => {
        const checkbox = document.querySelector(`input[name="${source}"]`);
        if (checkbox.checked) {
            correct = false;
        }
    });

    const resultElement = document.getElementById('source-result');
    if (correct) {
        resultElement.innerText = "Excellent ! Vous avez identifié les sources fiables.";
        document.getElementById('mission3').style.display = 'none';
        document.getElementById('mission4').style.display = 'block';
    } else {
        resultElement.innerText = "Certaines de vos réponses sont incorrectes. Essayez encore.";
    }
});

// Fonction pour vérifier le fonctionnement des vaccins de la Mission 4
document.getElementById('check-vaccine-button').addEventListener('click', function() {
    const correctAnswer = "stimulation du système immunitaire";  // Le principe de base des vaccins
    const userAnswer = document.getElementById('vaccine-input').value.toLowerCase();
    const resultElement = document.getElementById('vaccine-result');

    if (userAnswer.includes(correctAnswer)) {
        resultElement.innerText = "Correct ! Les vaccins fonctionnent en stimulant le système immunitaire pour qu'il reconnaisse et combatte les agents pathogènes.";
    } else {
        resultElement.innerText = "Incorrect. Réessayez.";
    }
});
