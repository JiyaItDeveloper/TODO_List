import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    let condition = await inquirer.prompt([{
            name: "options",
            type: "list",
            message: "Please select your options",
            choices: ["Add", "Remove"]
        }]);
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
    }
}
