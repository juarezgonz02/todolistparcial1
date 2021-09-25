const addTaskButton = document.getElementById("add-task")
const taskDescriptionInput = document.getElementById("task-description")
const tasksContainer = document.getElementById("tasks");
const storage = window.localStorage;

if (localStorage.getItem("tasks") != null)
    var taskList = JSON.parse(localStorage.getItem("tasks"))
else
    var taskList = [];


taskDescriptionInput.addEventListener("input", (e) => {

    if (e.target.value.length > 0) {
        addTaskButton.disabled = false;
    }
    else {
        addTaskButton.disabled = true;
    }
})

taskDescriptionInput.addEventListener("keypress", (e) => {

    if (e.target.value.length > 0 && e.key == "Enter")
        addTask();
})

const showTasks = () => {
    tasksContainer.innerHTML = "";

    let i = 0;

    taskList = taskList.sort((a, b) => {
        if (a.completed) {
            return 1
        }
        else if (b.completed) {
            return -1
        }
        else if (!b.completed && !a.completed) {
            return 0;
        }
        else {
            return 1;
        }
    })


    taskList.forEach(task => {
        task.id = i
        tasksContainer.appendChild(createTask(task))
        i += 1
    })

    localStorage.setItem("tasks", JSON.stringify(taskList))

}
