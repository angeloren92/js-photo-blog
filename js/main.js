const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.getElementById('cards')

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        const markup = getMarkup(data);
        rowEl.insertAdjacentHTML('beforeend', markup)
    })

    
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}