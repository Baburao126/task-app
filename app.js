document.addEventListener('DOMContentLoaded', () => {
    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('tasks');

  
    const createTaskItem = (title, description) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="task-title">${title}</span>
            <span class="task-description">${description}</span>
            <button class="update-task">Update</button>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskTitleInput.value = '';
        taskDescriptionInput.value = '';

        return taskItem;
    };

    addTaskButton.addEventListener('click', () => {
        const title = taskTitleInput.value;
        const description = taskDescriptionInput.value;

        if (!title) {
            alert('Please enter a task title.');
            return;
        }

       
        createTaskItem(title, description);
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-task')) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        } else if (event.target.classList.contains('update-task')) {
            const taskItem = event.target.parentElement;
            const taskTitle = taskItem.querySelector('.task-title');
            const taskDescription = taskItem.querySelector('.task-description');

            taskItem.classList.add('updating');

            const newTitle = prompt('Update Task Title:', taskTitle.innerText);
            if (newTitle !== null) {
                const newDescription = prompt('Update Task Description:', taskDescription.innerText);
                if (newDescription !== null) {
                    taskTitle.innerText = newTitle;
                    taskDescription.innerText = newDescription;
                }

                taskItem.classList.remove('updating');
            }

    
        }
    });


});
