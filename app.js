// Get the necessary DOM elements
const taskInput = document.getElementById('taskInput');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = taskText;
    taskItem.addEventListener('click', completeTask);
    pendingTasks.appendChild(taskItem);
    taskInput.value = '';
  }
}

// Function to mark a task as complete
function completeTask() {
  const taskItem = this;
  taskItem.removeEventListener('click', completeTask);
  taskItem.classList.add('completed');
  completedTasks.appendChild(taskItem);
  taskItem.addEventListener('click', uncompleteTask);
}

// Function to unmark a task as complete
function uncompleteTask() {
  const taskItem = this;
  taskItem.removeEventListener('click', uncompleteTask);
  taskItem.classList.remove('completed');
  pendingTasks.appendChild(taskItem);
  taskItem.addEventListener('click', completeTask);
}
