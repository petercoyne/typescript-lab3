import {todoInterface} from './todo-interface.js';

class Todo implements todoInterface {
    constructor() {}

    tasks: Array<string> = [];

    addTask(task: string): number {
        this.tasks.push(task);
        console.log("Inserting task: " + task);
        return this.tasks.length;
    }

    listAllTasks() {
        this.tasks.forEach(element => {
            console.log("* " + element);
        });
    }

    deleteTask(task: string): number {
        let index: number = this.tasks.indexOf(task);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            console.log("Deleting task: " + task);
        }
        return this.tasks.length;
    }
}

let myTodos = new Todo();
myTodos.addTask("Get milk");
myTodos.addTask("Use bathroom");
myTodos.listAllTasks();
myTodos.deleteTask("Use bathroom");
myTodos.listAllTasks();