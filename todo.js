let tasks = [];

/**
 * Aggiunge una nuova task alla lista.
 * @param {string} task - La task da aggiungere.
 */
function addTask(task) {
    tasks.push(task);
}

/**
 * Rimuove una task specifica dalla lista.
 * @param {string} task - La task da rimuovere.
 */
function removeTask(task) {
    tasks = tasks.filter(t => t !== task);
}

/**
 * Restituisce tutte le task nella lista.
 * @returns {string[]} - L'array delle task.
 */
function listTasks() {
    return tasks;
}

/**
 * Aggiunge una nuova task alla lista se non è vuota o duplicata.
 * @param {string} task - La task da aggiungere.
 */
function addTask(task) {
    if (!task || tasks.includes(task)) {
        console.log("Task non valida o già presente.");
        return;
    }
    tasks.push(task);
}
