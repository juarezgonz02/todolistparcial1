const addTask = () => {
    let taskDescription = taskDescriptionInput.value
    
    let newTask = { 
        id: taskList.length + 1,
        description: taskDescription,
        completed: false 
    } 

    taskList.push(newTask);
    taskDescriptionInput.value = "";
    addTaskButton.disabled = true;

    showTasks();
}

const createTask = ({id, description, completed}) => {
    let newTaskContainer = document.createElement("div")
    let taskDescription = document.createElement("textarea")
    
    newTaskContainer.className = "task"

    if(completed)
        taskDescription.className = "description completed"
    else
        taskDescription.className = "description"
    
    taskDescription.name = `${id}`;
    taskDescription.innerText = description
    
    taskDescription.addEventListener("change", (e) => {
        taskList[e.target.name].description = e.target.value 
        showTasks();
    })

    let completeButton = document.createElement("button");
    completeButton.className = "complete-task";
    completeButton.value = `${id}`;
    completeButton.id = "complete-task";
    
        ////// EVENTO ////// EVENTO 
    completeButton.addEventListener("click", (e) => {
        
        
        if (taskList[e.target.value].completed == true)
            taskList[e.target.value].completed = false;
        else
            taskList[e.target.value].completed = true;

        showTasks();
        
    })

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";
    deleteButton.value = `${id}`;
    deleteButton.id = "delete-task";    

        ////// EVENTO ////// EVENTO 
    deleteButton.addEventListener("click", (e) => {
        taskList.splice(parseInt(e.target.value), 1) 
        showTasks();
    })
    
    newTaskContainer.appendChild(taskDescription)
    newTaskContainer.appendChild(completeButton)
    newTaskContainer.appendChild(deleteButton)

    return newTaskContainer;
} 

addTaskButton.addEventListener("click", addTask)

showTasks();
