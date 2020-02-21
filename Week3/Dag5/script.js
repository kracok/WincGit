let tasker = {
    construct: function() {
      this.selectElements();
      this.bindEvents();
      this.scanTaskList();
    },
//properties to select DOM objects
    selectElements: function() {
      this.taskInput = document.getElementById('inputTask');              //where you input new task text
      this.taskList = document.getElementById('theTasks');                //the ul for all tasks
      this.taskListChildren = this.taskList.children;                     //all ul children (li's)
      this.addButton = document.getElementById('addTaskButton');          //the button to add tasks
      this.errorMessage = document.getElementById('error');               //the error div
    },
//every time a new task is created this is created as well
    buildTask: function() {
        let taskListItem, taskCheckbox, taskValue, taskButton, taskTrash;
//below creates new li with the class singleTask
        taskListItem = document.createElement('li');
        taskListItem.setAttribute('class', 'singleTask');
//below creates the checkbox
        taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox');
//below is the task value/text
        taskValue = document.createTextNode(this.taskInput.value);
//below is the delete button
        taskButton = document.createElement('button');                    //the trash button
        taskTrash = document.createElement('IMG');                        //the png of the trash icon, I dont know if this works yet
        taskTrash.setAttribute('src', 'icon.png');
        taskTrash.setAttribute("width", "30");
        taskTrash.setAttribute("height", "30");                           //the trash icon
        taskButton.appendChild(taskTrash);                                //places the icon and atributes inside the trash button

//below put all task atributes together
        taskListItem.appendChild(taskCheckbox);
        taskListItem.appendChild(taskValue);
        taskListItem.appendChild(taskButton);
//below puts task tributes to the task itself (puts the li in the ul)
        this.taskList.appendChild(taskListItem);
    },
//this makes the error message gone, but why is it here???
    error: function() {
        this.errorMessage.style.display = 'block';                  
    },
//this puts the input value into the actual task, with an error message if the value is empty
    addTask: function() {
        let taskValue = this.taskInput.value;
        this.errorMessage.style.display = 'none';
        if(taskValue === '') {
            this.error();
        } else {
            this.buildTask();
            this.taskInput.value = '';
            this.scanTaskList();
        }
    },
    enterKey: function(){
        if (event.keyCode === 13 + event.whitch === 13){
            this.addTask();
        }
    },
//below POST the task to the API 
    postTask: function() {
        fetch('https://wincacademydatabase.firebaseio.com/tim/tasks.json', {method: 'POST'})
    },
//below makes pressing the add button or pressing enter on the keyboard call the add task function
    bindEvents: function() {
        this.addButton.onclick = this.addTask.bind(this);
        // this.addButton.onclick = this.postTask.bind(this);
        this.taskInput.onkeypress = this.enterKey.bind(this);
    },
//below bindes the complete task and delete task functions to the added task
    scanTaskList: function() {
        let taskListItem, checkBox, deleteButton;
//loop through everything in the list
        for (i = 0; i < this.taskListChildren.lenght; i++) {
            taskListItem = this.taskListChildren[i];

            checkBox = taskListItem.getElementsByTagName('input')[0];           //select thecheckbos
            deleteButton = taskListItem.getElementsByTagName('button')[0];      //select the delete button

//add click event to the checkbox and the delete button
            checkBox.onclick = this.completeTask.bind(this, taskListItem, checkBox);
            deleteButton.onclick = this.deleteTask.bind(this, i);
        }
    },
//delete function
    deleteTask: function(i) {
        this.taskListChildren[i].remove();
        this.scanTaskList();
        this.fetch('https://wincacademydatabase.firebaseio.com/tim/tasks.json', {method: 'DELETE'})
    },
//complete function to cross the words
    completeTask: function(taskListItem, checkBox) {
        if (checkBox.checked){
            taskListItem.className = 'task completed';
        } else {
            this.incompleteTask(taskListItem);
        }
    },
//incomplete function to return to before the task was completed
    incompleteTask: function(taskListItem){
        taskListItem.className = 'task'
    }
};