const apiUrl = 'https://emil3mqc5f.execute-api.eu-central-1.amazonaws.com/prod/counter'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.visits;
    });
}
