const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.getElementById('cards')

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        const markup = getMarkup(data);
        rowEl.insertAdjacentHTML('beforeend', markup);
        
        const cardImgEl = document.querySelectorAll('#cardImg');
        
        getOverlayMarkup(cardImgEl, data);

        })



function getOverlayMarkup(nodes, data) {
    let markup = '';
    nodes.forEach((element) => { 
        const src = element.src;
        const alt = element.alt;
        console.log(src, alt)
        markup = `
            <div id="overlay">
                <div class="row-cols-1 my-4">
                    <div class="col">
                        <button class="mb-5" onclick="off()">Chiudi</button>
                    </div>
                    <div class="col">
                        <img src="${src}" alt="${alt}" class="img-fluid w-50">
                    </div>
                </div>
            </div>
        `
        })

console.log(markup)
}





