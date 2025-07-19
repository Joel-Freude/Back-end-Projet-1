const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'tasks.json');

function loadTasks() {
    if(!fs.existsSync(file)) {
        return [];
    }
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse

}

function saveTasks(tasks) {
    fs.writeFileSync(file, JSON.stringify(tasks, null, 2), 'utf8');

}
function addTask(task) {
    const tasks = loadTasks();
    if(tasks.length === 0){
        return console.log("❌No tasks found.");
    }
    tasks.push({text: taskText, done: false});
    saveTasks(tasks);
    console.log(`✅ Task added: ${taskText}`);
}

function listTasks() {
    const tasks = loadTasks();
    if(index < 1 || index > tasks.length) {
        return console.log("❌Invalid task index.");
    }
    tasks[index - 1].done = true;
    saveTasks(tasks);
    console.log(`👍Task #${index} completed.`);

}

function deleteTask(index){
    const tasks = LoadTasks();
    if(index < 1 || index > tasks.length){
        return console.log("❌Invalid task index.");
    }
    const deleted = tasks.splice(index - 1, 1);
    saveTasks(tasks);
    console.log(`🗑️ Task deleted: ${deleted[0].text}`);

}

const [,, command, ...args] = process.argv;

switch(cmd){
    case 'add':
        addTask(args.join(' '));
        break;
    case 'list':
        listTasks();
        break;
    case 'delete':
        deleteTask(parseInt(args[0], 10));
        break;
    default:
        console.log("😢Unknown command.");
        break;
}