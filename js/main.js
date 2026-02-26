const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.getElementById('cards')

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        const markup = getMarkup(data);
        rowEl.insertAdjacentHTML('beforeend', markup);

        const cardImgEl = document.querySelectorAll('#cardImg');
        const footerEl = document.querySelector('footer')

        getOverlayMarkup(cardImgEl, footerEl);
        console.log(overlayMarkup)
    })







