const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.getElementById('cards');
const overlayEl = document.getElementById("overlay");
const overlayImgEl = document.getElementById('overlayImg');
const btnEl = document.querySelector('button[type="reset"]');

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        const markup = getMarkup(data);
        rowEl.insertAdjacentHTML('beforeend', markup);
        const cardImgEl = document.querySelectorAll('.cardImg');
        activateOverlayMarkup(cardImgEl, overlayImgEl, overlayEl);
        deactivateOverlayMarkup(btnEl, overlayEl, overlayImgEl);
    })