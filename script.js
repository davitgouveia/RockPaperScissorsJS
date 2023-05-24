const choices = ["✊", "🖐", "✌"];

function game(playerChoice) {
    var cpuChoice = cpuPlay()
    document.getElementById("cpuChoice").textContent = `${cpuChoice}`;

    if (cpuChoice === playerChoice) {
        document.getElementById("gameResult").innerHTML = "<span style='font-size:2em'>TIE!</span>";
    } else if (
        playerChoice === choices[0] && cpuChoice === choices[2]||
        playerChoice === choices[1] && cpuChoice === choices[0] ||
        playerChoice === choices[2] && cpuChoice === choices[1]
    ) {
        document.getElementById("gameResult").innerHTML = "<span style='color:green;font-size:2em'>YOU WIN!</span>";
    } else {
        document.getElementById("gameResult").innerHTML = "<span style='color:red;font-size:2em'>YOU LOST!</span>";
    }

    var change_path = function(){window.location.href="gametest.html"};
    setTimeout(change_path ,3000);
}


/*CPU Play*/
function cpuPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const result = choices[randomIndex];
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