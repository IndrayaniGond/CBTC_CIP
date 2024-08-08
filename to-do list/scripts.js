function addTask() {
    const taskInput = document.getElementById('taskInput');
    const categorySelect = document.getElementById('categorySelect');
    const prioritySelect = document.getElementById('prioritySelect');
    const dueDate = document.getElementById('dueDate');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.classList.add(`priority-${prioritySelect.value.toLowerCase()}`);

    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');
    taskInfo.innerHTML = `
        <strong>${taskInput.value}</strong><br>
        <small>Category: ${categorySelect.value}</small><br>
        <small>Due: ${dueDate.value || 'No due date'}</small>
    `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => taskList.removeChild(li);

    li.appendChild(taskInfo);
    li.appendChild(deleteButton);
    li.onclick = () => li.classList.toggle('completed');

    taskList.appendChild(li);
    taskInput.value = '';
    categorySelect.value = 'Personal';
    prioritySelect.value = 'Low';
    dueDate.value = '';
}
