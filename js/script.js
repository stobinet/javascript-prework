
var buttonName, buttonRock, buttonPaper, buttonScissors, buttonTest;


buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonTest = document.getElementById('button-test');

/**
 * Game interface with buttons
 */
function buttonClicked(buttonName) {
    clearMessages();
    console.log(buttonName + ' został kliknięty');

    var argMoveId, argPlayerMove, argComputerMove, argbuttonName, computerMove, playerMove, randomNumber, playerMove1;

    /**
     *  Computer movement
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            return 'kamień';
        }
    }

    /**
     *  Player movement
     */
    function getButtonName(argbuttonName) {
        console.log('wywołano funkcję getButtonName z argumentem: ' + argbuttonName);
        if (argbuttonName == 'kamień') {
            return 'kamień';
        } else if (argbuttonName == 'papier') {
            return 'papier';
        } else if (argbuttonName == 'nożyce') {
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

    playerMove = buttonName;
    playerMove1 = getButtonName(playerMove);
    console.log('ruch gracza to: ' + playerMove1);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove1, computerMove);

}

buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
buttonTest.addEventListener('click', function () { buttonClicked('test'); });