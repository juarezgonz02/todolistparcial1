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

const createTask = ({ id, description, completed }) => {

    ///////////////////////////////
    //// HTML ELEMENTS CREATE ////
    let newTaskContainer = document.createElement("div")
    let descriptionContainer = document.createElement("div")
    let buttonsContainer = document.createElement("div")
    let iconComplete = document.createElement("i")
    let iconDelete = document.createElement("i")
    let taskDescription = document.createElement("textarea")
    ////////////////////////////////
    newTaskContainer.className = "task"
    taskDescription.className = "description"
    descriptionContainer.className = "description-container"
    buttonsContainer.className = "buttons-container"
    iconComplete.className = iconCompleteClass
    iconDelete.className = iconDeleteClass;


    if (completed)
        newTaskContainer.className = "task completed"

    /**
     * HERE, TASK TEXT IS ADDED AND CHANGED
     */
    taskDescription.name = `${id}`;
    taskDescription.innerText = description

    taskDescription.addEventListener("change", (e) => {
        taskList[e.currentTarget.name].description = e.currentTarget.value
        showTasks();
    })

    descriptionContainer.appendChild(taskDescription)

    /*  COMPLETION AND DELETION BUTTONS AND ITS EVENTS */
    let completeButton = document.createElement("button");
    completeButton.className = "complete-task";
    completeButton.name = `${id}`;
    completeButton.id = "complete-task";
    completeButton.addEventListener("click", (e) => {



        if (taskList[e.currentTarget.name].completed == true)
            taskList[e.currentTarget.name].completed = false;
        else
            taskList[e.currentTarget.name].completed = true;
        debugger;
        showTasks();

    })
    completeButton.appendChild(iconComplete);


    //------------
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";
    deleteButton.name = `${id}`;
    deleteButton.id = "delete-task";

    deleteButton.addEventListener("click", (e) => {
        taskList.splice(parseInt(e.currentTarget.name), 1)
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
