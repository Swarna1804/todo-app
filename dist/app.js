"use strict";
const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const count = document.getElementById("taskCount");
const emptyMsg = document.getElementById("emptyMsg");
let taskCount = 0;
function updateUI() {
    count.textContent = `Total Tasks: ${taskCount}`;
    emptyMsg.style.display = taskCount === 0 ? "block" : "none";
}
function addTodo() {
    const task = input.value.trim();
    if (!task)
        return;
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;
    const actions = document.createElement("div");
    actions.className = "actions";
    // ✅ Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = () => {
        li.classList.toggle("completed");
    };
    // ❌ Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => {
        li.remove();
        taskCount--;
        updateUI();
    };
    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    list.appendChild(li);
    taskCount++;
    updateUI();
    input.value = "";
}
// Click event
button.addEventListener("click", addTodo);
// Enter key support
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter")
        addTodo();
});
// Initial UI state
updateUI();
