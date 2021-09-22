const addTaskButton = document.getElementById("add-task")
const taskDescriptionInput = document.getElementById("task-description")
const tasksContainer = document.getElementById("tasks");
const storage = window.localStorage;

if(localStorage.getItem("tasks") != null)
    var taskList = JSON.parse(localStorage.getItem("tasks"))
else 
    var taskList = [];


taskDescriptionInput.addEventListener("input", (e)=>{
    if(e.target.value.length > 0){
        addTaskButton.disabled = false;
    }
    else{
        addTaskButton.disabled = true;
    }
})

const showTasks = () => {
    tasksContainer.innerHTML = "";
    taskList.forEach( task => {
        tasksContainer.appendChild(createTask(task))
    })
    
    localStorage.setItem("tasks", JSON.stringify(taskList))
    
}
