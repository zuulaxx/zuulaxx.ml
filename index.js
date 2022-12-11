var timestamp = Date.now();
const date = new Date(timestamp);
document.getElementById('current-date').innerHTML = `Le ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}`
