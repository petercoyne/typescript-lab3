let tasks: string[] = ["Get milk", "Clean kitchen", "Light fire"];

let addTask = (task: string): number => {
    tasks.push(task);
    console.log("Inserting task: " + task);
    return tasks.length;
}

let listAllTasks = () => {
    tasks.forEach(element => {
        console.log("* " + element);
    });
}

let deleteTask = (task: string): number => {
    let index: number = tasks.indexOf(task);
    if (index >= 0) {
        tasks.splice(index, 1);
        console.log("Deleting task: " + task);
    }
    return tasks.length;
}

// Debug
addTask("Buy newspaper");
listAllTasks();
deleteTask("Get milk");
listAllTasks();