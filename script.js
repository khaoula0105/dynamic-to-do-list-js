document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Create new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add click event to remove button
        removeButton.addEventListener('click', function() {
            taskItem.remove();
            updateLocalStorage();
        });

        // Append remove button to task item
        taskItem.appendChild(removeButton);

        // Append task item to task list
        taskList.appendChild(taskItem);

        // Save to Local Storage if `save` is true (default)
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to update Local Storage after task removal
    function updateLocalStorage() {
        const tasks = Array.from(taskList.getElementsByTagName('li')).map(li => li.textContent.trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listener for adding a new task via button click
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear input field after adding task
        } else {
            alert('Please enter a task!');
        }
    });

    // Event listener for adding a new task via Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = ''; // Clear input field after adding task
            } else {
                alert('Please enter a task!');
            }
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
