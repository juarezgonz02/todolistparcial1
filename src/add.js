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

const iconCompleteClass = "fas fa-check";
const iconDeleteClass = "fas fa-trash";

const createTask = ({id, description, completed}) => {

    ///////////////////////////////
    //// HTML ELEMENTS CREATE ////
    let newTaskContainer = document.createElement("div")
    let descriptionContainer = document.createElement("div") 
    let buttonsContainer = document.createElement("div")
    let iconComplete = document.createElement("i")
    let iconDelete =  document.createElement("i")
    let taskDescription = document.createElement("textarea")
    ////////////////////////////////
    newTaskContainer.className = "task"
    descriptionContainer.className = "description-container"
    buttonsContainer.className = "buttons-container"
    iconComplete.className = iconCompleteClass
    iconDelete.className = iconDeleteClass;
    
    
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

    descriptionContainer.appendChild(taskDescription)

    /*  COMPLETION AND DELETION BUTTONS AND ITS EVENTS */ 
    let completeButton = document.createElement("button");
    completeButton.className = "complete-task";
    completeButton.value = `${id}`;
    completeButton.id = "complete-task";
    iconComplete.value = `${id}`
    completeButton.addEventListener("click", (e) => {
        
        
        if (taskList[e.target.value].completed == true)
            taskList[e.target.value].completed = false;
        else
            taskList[e.target.value].completed = true;

        showTasks();
        
    })
    completeButton.appendChild(iconComplete);
    //------------
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";
    deleteButton.value = `${id}`;
    deleteButton.id = "delete-task";    

    deleteButton.addEventListener("click", (e) => {
        taskList.splice(parseInt(e.target.value), 1) 
        showTasks();
    })

    deleteButton.appendChild(iconDelete)

    buttonsContainer.appendChild(completeButton)
    buttonsContainer.appendChild(deleteButton)
    //////////////
    //FINALLY
    newTaskContainer.appendChild(descriptionContainer)
    newTaskContainer.appendChild(buttonsContainer)


    return newTaskContainer;
} 

addTaskButton.addEventListener("click", addTask)

showTasks();
