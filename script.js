document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task input value and trim whitespace
        let taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create new <li> element
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            // Add click event to remove button
            removeButton.addEventListener('click', function() {
                taskItem.remove();
            });

            // Append remove button to task item
            taskItem.appendChild(removeButton);

            // Append task item to task list
            taskList.appendChild(taskItem);

            // Clear task input
            taskInput.value = '';
        } else {
            // Alert user if task input is empty
            alert('Please enter a task!');
        }
    }

    // Event listener for add task button click
    addButton.addEventListener('click', addTask);

    // Event listener for enter key press in task input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
