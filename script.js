function startGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('instruction-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
}

function showInstructions() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('instruction-screen').style.display = 'block';
}

function showHome() {
    document.getElementById('home-screen').style.display = 'block';
    document.getElementById('instruction-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'none';
}

function startMission() {
    document.getElementById('story-intro').style.display = 'none';
    document.getElementById('mission1').style.display = 'block';
}

// Add more functions to handle puzzles and game logic
