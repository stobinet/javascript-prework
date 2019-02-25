//printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');

/*printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + 'papier' + '! Jeśli Twój ruch to nożyczki, to wygrywasz!');*/

var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = "papier";
printMessage('Zagrałam ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywam!');

/* an integer range 11-19
var randomNumber;
randomNumber = Math.floor((Math.random() * 9) + 11);
printMessage('Wylosowana liczba to: ' + randomNumber); */

// an integer range 1-3
var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

