import inquirer from "inquirer"

let todos = [];
console.log("Welcometo to-do app.")

let condition = true; // should be true to run the program

while(condition){

    let todoQuestions = await inquirer.prompt(
        [
            {
                name : "firstQuestion",
                type : "input",
                message : "what do you want to add in your todos?"
            },
        
            {
                name : "secondQuestion",
                type: "confirm",
                message: "are you sure you want to add more?",
                default: "true"
            }
        ]
    );
    todos.push(todoQuestions.firstQuestion); // to add in arrays
    condition = todoQuestions.secondQuestion; // to stop questioning after no
    console.log(todos); //to execute whole program
}