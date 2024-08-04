document.getElementById("add-button").addEventListener("click", addTodo);

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    const todoList = document.getElementById("todo-list");
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = todoText;
    li.appendChild(textSpan);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Tamamlandı";
    completeButton.addEventListener("click", () => {
        li.classList.toggle("completed");
   });
   li.appendChild(completeButton);

   const deleteButton = document.createElement("button");
   deleteButton.textContent = "Sil";
   deleteButton.addEventListener("click", () => {
    todoList.removeChild(li)
   });
   li.appendChild(deleteButton)

   todoList.appendChild(li);
   todoInput.value = "";
}

