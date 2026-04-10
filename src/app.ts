const input = document.getElementById("todoInput") as HTMLInputElement;
const button = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;
const count = document.getElementById("taskCount") as HTMLParagraphElement;
const emptyMsg = document.getElementById("emptyMsg") as HTMLParagraphElement;

let taskCount = 0;

function getRandomColor(): string {
  const colors = [
    "#ff6b6b",
    "#6bcB77",
    "#4d96ff",
    "#feca57",
    "#9b59b6",
    "#1dd1a1",
    "#ff9f43"
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

function updateUI() {
  count.textContent = `Total Tasks: ${taskCount}`;
  emptyMsg.style.display = taskCount === 0 ? "block" : "none";
}

function addTodo(): void {
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");

 
  li.style.background = getRandomColor();
  li.style.color = "#fff";

  const span = document.createElement("span");
  span.textContent = task;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

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


button.addEventListener("click", addTodo);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

updateUI();