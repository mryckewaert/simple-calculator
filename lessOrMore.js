const playerName = prompt("What's your player name ?");

const random = Math.floor(Math.random() * 100) + 1;

while (true){
    const userGuess = parseInt(prompt("Choose a number between 1 and 100"))

    if(userGuess > random){
        console.log("it is less");
    } 
    else if(userGuess < random){
        console.log("it is more");
    }
    else if(userGuess === random){
        alert(`${playerName} wins`);
        break;
    }
}