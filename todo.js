"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Inserting task: " + task);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (element) {
            console.log("* " + element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            console.log("Deleting task: " + task);
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Get milk");
myTodos.addTask("Use bathroom");
myTodos.listAllTasks();
myTodos.deleteTask("Use bathroom");
myTodos.listAllTasks();
