
//let buttonName, buttonRock, buttonPaper, buttonScissors, buttonTest;


const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const buttonTest = document.getElementById('button-test');

/**
 * Game interface with buttons
 */
function buttonClicked(buttonName) {
    clearMessages();
    console.log(buttonName + ' został kliknięty');

  
    /**
     *  Player/Computer movement
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1 || argMoveId == 'kamień') {
            return 'kamień';
        } else if (argMoveId == 2 || argMoveId == 'papier') {
            return 'papier';
        } else if (argMoveId == 3 || argMoveId == 'nożyce') {
            return 'nożyce';
        } else {
            printMessage('Nie znam przycisku Test. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    /**
     *  Game result
     */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis :)');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

    //let playerMove, playerMove1, computerMove, randomNumber;
    const playerMove = buttonName;
    const playerMove1 = getMoveName(playerMove);
    console.log('ruch gracza to: ' + playerMove1);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove1, computerMove);

}

buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
buttonTest.addEventListener('click', function () { buttonClicked('test'); });