function game(playerChoice) {
    const cpuChoice = cpuPlay()
    if (cpuChoice === playerChoice) {
        document.getElementById("gameResult").innerHTML = "<span style='font-size:2em'>TIE!</span>";
    } else if (
        playerChoice === choices[0] && cpuChoice[2] ||
        playerChoice === choices[1] && cpuChoice[0] ||
        playerChoice === choices[2] && cpuChoice[1]
    ) {
        document.getElementById("gameResult").innerHTML = "<span style='color:green;font-size:2em'>YOU WIN!</span>";
    } else {
        document.getElementById("gameResult").innerHTML = "<span style='color:red;font-size:2em'>YOU LOST!</span>";
    }
    var change_path = function(){window.location.href="game.html"};
    setTimeout(change_path ,3000);
}

const choices = ["✊", "🖐", "✌"];

/*CPU Play*/
function cpuPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const result = choices[randomIndex];
    document.getElementById("cpuChoice").textContent = `${result}`;
    return result;
}

/*Player Actions*/
function playerRock() {
    document.getElementById("playerChoice").textContent = `${choices[0]}`;
    game(choices[0])
}
function playerPaper() {
    document.getElementById("playerChoice").textContent = `${choices[1]}`;
    game(choices[1])
}
function playerScissors() {
    document.getElementById("playerChoice").textContent = `${choices[2]}`;
    game(choices[2])
}