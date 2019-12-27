function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

function playGame(){
    var money = 0;
    var maxMoney = 0;
    var rolls = 0;
    var maxRolls = 0;
    var bet = document.forms["luckySevens"]["bet"].value;
    if (bet == "" || isNaN(bet) || bet <= 0) {
        alert("Starting bet must be a whole number greater than zero.");
        document.forms["luckySevens"]["bet"].parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["bet"].focus();
        return false;
    } else {
        money = bet;
    }

    while(money > 0){
        var die1 = rollDice();
        var die2 = rollDice();
        var sum = die1 + die2;

        rolls ++;

        if(sum == 7){
            money += 4;
            if(money > maxMoney){
                maxMoney += (money - maxMoney);
                maxRolls = rolls;
            }
        } else {
            money --;
        }
    }


    document.getElementById("results").style.display = "block";
    document.getElementById("resultLine").style.display = "block";
    document.getElementById("submitButton").innerText = "Replay";
    document.getElementById("tableBet").innerText = bet;
    document.getElementById("tableRolls").innerText = rolls;
    document.getElementById("tableHighest").innerText = maxMoney;
    document.getElementById("tableHighRoll").innerText = maxRolls;

    return false;
}
