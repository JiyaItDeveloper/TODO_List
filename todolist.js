#! /usr/bin/env node
import inquirer from "inquirer";
//using whileloop
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    let condition = await inquirer.prompt([{
            name: "options",
            type: "list",
            message: "Please select your options",
            choices: ["Add", "Remove"]
        }]);
    //***********************************Add**************************************** */
    if (condition.options === "Add") {
        let ans = await inquirer.prompt([{
                name: "user",
                type: "input",
                message: "Write something to add in the task list."
            }]);
        if (ans.user !== '') {
            todo_list.push(ans.user);
            console.log(todo_list);
        }
        else {
            console.log("Please add something in your todo list");
        }
    }
    //***********************************Remove**************************************** */
    else if (condition.options === "Remove") {
        let removechoice = await inquirer.prompt([{
                name: "remove_items",
                type: "list",
                choices: todo_list,
                message: "Remove item to add in the task list."
            }]);
        let index_remove = todo_list.indexOf(removechoice.remove_items);
        if (index_remove >= 0) {
            todo_list.splice(index_remove, 1);
            console.log("You remove :", removechoice.remove_items);
            console.log(todo_list);
        }
    }
    //***********************************Remove whileloop**************************************** */
    let user_ans = await inquirer.prompt([{
            name: "selection",
            type: "confirm",
            message: "\nDo you want to continious?.",
            default: true
        }]);
    if (user_ans.selection === false) {
        while_condition = false;
    }
}
console.log(`Thank you for using TODO_LIST!!`);
