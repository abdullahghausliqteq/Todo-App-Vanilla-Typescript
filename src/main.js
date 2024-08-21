"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const todos = [];
const todosContainer = document.querySelector(".todosContainer");
const todoInput = document.getElementsByName("title")[0];
const myForm = document.getElementById("myForm");
myForm.onsubmit = (e) => {
    e.preventDefault();
    const todo = {
        title: todoInput.value, // Corrected this line
        isCompleted: false,
        id: String(Math.random() * 10)
    };
    todos.push(todo);
    console.log(todos);
};
