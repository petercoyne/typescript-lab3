var tasks = ["Get milk", "Clean kitchen", "Light fire"];
var addTask = function (task) {
    tasks.push(task);
    console.log("Inserting task: " + task);
    return tasks.length;
};
var listAllTasks = function () {
    tasks.forEach(function (element) {
        console.log(element);
    });
};
var deleteTask = function (task) {
    var index = tasks.indexOf(task);
    if (index >= 0) {
        tasks.splice(index, 1);
        console.log("Deleting task: " + task);
    }
    return tasks.length;
};
addTask("Buy newspaper");
listAllTasks();
deleteTask("Get milk");
listAllTasks();
