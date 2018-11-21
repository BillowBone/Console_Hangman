function displayGallows(missedTries) {
    let gallowsEmpty = "  __________\n" +
                       "  |         \n" +
                       "  |         \n" +
                       "  |         \n" +
                       "  |         \n" +
                       "  |         \n" +
                       "__|_________\n";
    let actualGallows = "";
    for (let i = 0; i < gallowsEmpty.length; i++) {
        actualGallows += getRightChar(missedTries, gallowsEmpty, i);
    }
    console.log(actualGallows);
}

function getRightChar(missedTries, gallowsEmpty, i) {
    if (missedTries >= 1 && i === 20) {
        return ("|");
    } else if (missedTries >= 1 && i === 33) {
        return ("O");
    } else if (missedTries >= 2 && i === 46) {
        return ("|");
    } else if (missedTries >= 3 && i === 45) {
        return ("/");
    } else if (missedTries >= 4 && i === 47) {
        return ("\\");
    } else if (missedTries >= 5 && i === 59) {
        return ("|");
    } else if (missedTries >= 6 && i === 71) {
        return ("/");
    } else if (missedTries >= 7 && i === 73) {
        return ("\\");
    } else {
        return (gallowsEmpty[i]);
    }
}

function displayPlayersWord(secretWord, validCharacters) {
    let playersWord = "";

    for (let i = 0; i < secretWord.length; i++) {
        if (characterIsValid(validCharacters, secretWord[i]))
            playersWord += secretWord[i] + " ";
        else
            playersWord += "_ ";
    }
    console.log(playersWord);
}

function displayTriedCharacters(triedCharacters) {
    let triedString = "";

    for (let i = 0; i < triedCharacters.length; i++) {
        triedString += triedCharacters[i][0] + " ";
    }
    console.log("Characters that you've already tried :");
    console.log(triedString);
}

function isCharacterInSecretWord(secretWord, char) {
    triedCharacters.push(char);
    for (let i = 0; i < secretWord.length; i++) {
        if (char === secretWord[i]) {
            validCharacters.push(char);
            return (true);
        }
    }
    missedTries++;
    return (false);
}

function characterIsValid(validCharacters, char) {
    for (let i = 0; i < validCharacters.length; i++) {
        if (char[0] === validCharacters[i][0])
            return (true);
    }
    return (false);
}

function characterIsNew(char, triedCharacters) {
    for (let i = 0; i < triedCharacters.length; i++) {
        if (char[0] === triedCharacters[i][0])
            return (false);
    }
    return (true);
}

function makeSurePlayerChooseOneChar() {
    let char = prompt("Enter a character :");

    while (char.length != 1) {
        alert("Please enter only one character !");
        char = prompt("Enter a character :");
    }
    return (char);
}

function playerChooseCharacter(secretWord, triedCharacters) {
    var char = makeSurePlayerChooseOneChar();

    while (!characterIsNew(char, triedCharacters)) {
        alert("You have already tried this character !");
        char = makeSurePlayerChooseOneChar();
    }
    isCharacterInSecretWord(secretWord, char);
}

function wordFound(secretWord, validCharacters) {
    for (let i = 0; i < secretWord.length; i++) {
        if (!characterIsValid(validCharacters, secretWord[i]))
            return (false);
    }
    return (true);
}

let secretWord = prompt("Please enter the secret word :");
let missedTries = 0;
let triedCharacters = [];
let validCharacters = [];

while (missedTries < 8 && !wordFound(secretWord, validCharacters)) {
    playerChooseCharacter(secretWord, triedCharacters);
    console.log("\n");
    displayGallows(missedTries);
    console.log("\n");
    displayPlayersWord(secretWord, validCharacters);
    console.log("\n");
    displayTriedCharacters(triedCharacters);
}

if (missedTries === 8)
    alert("You losed :(");
else
    alert("You found the word, congratulations !");
console.log("End of the game, thank you for playing !");