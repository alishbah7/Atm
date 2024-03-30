#! /usr/bin/env node

import inquirer from "inquirer"

// 1. User will enter a pin code, if it is correct the process will be proceed further otherwise 
//    it will give the message that the pin is incorrect.

// 2. If the pin is correct then 2 options will be shown, first option will be 
//    check balance and second option will be withdraw cash.

// 3. When user will click on the check balance, the current balance in the account will be shown

// 4. When user will click on the withdraw cash, the user will be asked to enter the amount to withdraw.
//    If the user will enter the more amount than the actual amount in the account then a message will appear
//    to enter a valid amount otherwise if the amount is valid then the reamining balance will be shown.


let atmBalance = 10000; 
let atmPin = 1234;

let atmAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please Enter Your Pin To Proceed Further:",
        type: "number"
    }
]); // this will ask the user to enter a pin code

if(atmAnswer.pin === atmPin){
     
    console.log("Correct Pin Code!"); // if the pin code is correct this message will appear 

   let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please Select The Option",
            type: "list",
            choices: ["Check Balance", "Withdraw Cash"]
        }
    ]); // after entering the correct pin, this question with two options will be shown

    if(operationAns.Operation === "Withdraw Cash"){
         
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "Please Enter The Amount:",
                type: "number"
            }
        ]); // if the user will click on "withdraw cash", this question will be asked 

        if(withdrawAmount.amount <= 10000){
            atmBalance -= withdrawAmount.amount
            console.log(`Your Remaining Balance Is: ${atmBalance}`)
        } // if the user will enter a valid amount, this message will be shown
        else{
            console.log("You have entered more amount than you have in your account. Please enter the valid amount!")
            // if the user will enter more than actual amount this message will appear
        };

    }
    else{
        console.log(`Your Balance Is: ${atmBalance}`)
        // if the user will click on "check balance", the current amount will be shown
    };
   
}
else{
    console.log("Incorrect Pin Code!")
    // if the user will enter incorrect pin code, this message will appear
};