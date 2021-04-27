function playTheGame() {
    result = window.confirm("Would you like to play?");
    if (!result) {
        alert("No problem, Goodbye")
        return;
    }
    let num = prompt("Choose a number between 1 and 10")
    if (isNaN(num)) {
        alert("Sorry Not a number, Goodbye")
        return;
    }
    if (num > 9 || num < 1) {
        alert("Sorry it’s not a good number, Goodbye")
        return;
    }
    let computerNumber = Math.floor(Math.random() * 10);
    test(num, computerNumber);
    return;
}
function test(userNumber, computerNumber) {
    for (let i = 0; i < 3; i++) {       
        if (userNumber == computerNumber) {
            alert("You Won!")
            return;
        }
        if (userNumber > computerNumber) {
            userNumber = prompt("try lower")
        }
        if (userNumber < computerNumber) {
            userNumber = prompt("try higher")
        }
    }
    alert("You Lost! Correct number is = " + computerNumber)
    return;
}