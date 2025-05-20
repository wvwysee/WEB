const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span> <span class="close">×</span>`;

        taskList.appendChild(li);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("close")) {
        event.target.parentElement.remove();
    }
});