function rollDice() {

    let numOfDice = document.getElementById("numOfDice").value; // T090800316
    numOfDice = parseInt(numOfDice.charAt(numOfDice.length - 1));
    // console.log(typeof numOfDice);

    if (numOfDice % 2 == 0) {
        numOfDice = 4;
    } else {
        numOfDice = 3;
    }

    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    const names = ['Dhoni', 'Virat', 'Sachin', 'Ashwin'];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<div class="block"><img src="./images/dice${value}.png" alt="Dice ${value}">
                    <p>${names[i]}</p></div>`);
    }

    const maxValue = Math.max(...values);
    const winners = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i] == maxValue) {
            winners.push(names[i]);
        }
    }

    let winner = (winners.length > 1) ? `Winners are ${winners.join(" , ")}` : `Winner is ${winners.toString()}`;

    // diceResult.textContent = `dice: ${values.join(', ')}`;
    diceWinner.innerHTML = `<p>${winner}</p>`;
    diceImages.innerHTML = images.join('');
}
