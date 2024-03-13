import inquirer from "inquirer";
//Question No 8
console.log(`\n\nWelcome to the Game: "Rock Paper Scissors"`);
console.log("\n==================================================================================");
let playAgain = 'true';
while (playAgain) {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "start",
            message: " Do you want to play or exit?",
            choices: ["Play", "Exit"]
        }
    ]);
    console.log("\n==================================================================================");
    //play choose setting
    if (answer.start === "Play") {
        const game = await inquirer.prompt([
            {
                type: "list",
                name: "choices",
                message: "Select an option?",
                choices: ["rock", "paper", "scissors"]
            }
        ]);
        let option = ["rock", "paper", "scissors"];
        let random = Math.floor(Math.random() * option.length);
        let computerChoise = option[random];
        console.log("You choose:" + game.choices + " Computer choose:" + computerChoise);
        if (game.choices === "rock" && computerChoise === "scissors" || game.choices === "paper" && computerChoise === "rock" || game.choices === "ssissors" && computerChoise === "paper ") {
            console.log("You win");
        }
        else if (game.choices === computerChoise) {
            console.log("It's a tie");
        }
        else {
            console.log("You loss");
        }
        //Exit choose setting
    }
    else {
        const exit = await inquirer.prompt([
            {
                type: "confirm",
                name: "response",
                message: "Are you sure you did not want to play again?",
            }
        ]);
        //If user want to start game again.
        if (exit.response === false) {
            const answer = await inquirer.prompt([
                {
                    type: "list",
                    name: "start",
                    message: "Start Your game again Press the Play button.",
                    choices: ["Play"]
                }
            ]);
            console.log("\n=================================Start game again=================================================");
            if (answer.start === "Play") {
                const game = await inquirer.prompt([
                    {
                        type: "list",
                        name: "choices",
                        message: "Select an option?",
                        choices: ["rock", "paper", "scissors"]
                    }
                ]);
                let option = ["rock", "paper", "scissors"];
                let random = Math.floor(Math.random() * option.length);
                let computerChoise = option[random];
                console.log("You choose:" + game.choices + " Computer choose:" + computerChoise);
                if (game.choices === "rock" && computerChoise === "scissors" || game.choices === "paper" && computerChoise === "rock" || game.choices === "ssissors" && computerChoise === "paper ") {
                    console.log("You win");
                }
                else if (game.choices === computerChoise) {
                    console.log("It's a tie");
                }
                else {
                    console.log("You loss");
                }
            }
        }
        //Game End
        else {
            break;
        }
    }
}
console.log("\n\n========================= x ==== x THE END ================================= x ========== x");
