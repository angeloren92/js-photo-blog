/**
 * ## Markup per le Cards della pagina
 * @param {key} data - chiavi da usare
 * @returns restituisce il markup
 */
function getMarkup(data) {
    let markup = '';
    data.forEach(({ title, date, url }) => {
        markup += `                
            <div class="col-8 col-md-6 col-lg-4 mx-auto">
                <div class="card rounded-0 bg-white">
                    <img src="./img/pin.svg" alt="image of pin for postcards" class="position-absolute start-50 translate-middle-x">
                    <figure class="card-body mb-0">
                        <img src="${url}" alt="${title}" class="cardImg img-fluid mb-3">
                        <p class="text-muted fw-bold mb-0">${date}</p>
                        <h2 class="h4 fw-bold mb-0">${title.toUpperCase()}</h2>
                    </figure>
                </div>
            </div>`
    })
    return markup;
}

/**
 * ## inserisce il markup per ogni evento, creando markup da inserire 
 * @param {array di nodi} nodesCardsImg - inseriamo l'array di nodi per l'evento
 * @param {nodo per l'output} overlayEl - nodo dove vogliamo che compaia l'output
 */
function activateOverlayMarkup(nodesCardsImg, overlayImgEl, overlayEl) {
    nodesCardsImg.forEach((element) => {
        element.addEventListener('click', function () {
            const src = element.src;
            const alt = element.alt;
            const overlayMarkup = `               
                <img src="${src}" alt="${alt}" class="img-fluid w-50">
                `
            overlayImgEl.insertAdjacentHTML('beforeend', overlayMarkup);
            overlayEl.style.display = "block";
        })
    })
}

/**
 * ## Serve a chiudere e far sparire l'overlay e pulire l'html
 * @param {bottone} btnEl - nodo bottone per far scatenare evento
 * @param {div} overlayEl - nodo div dell'overlay
 */
function deactivateOverlayMarkup(btnEl, overlayEl, overlayImgEl) {
    btnEl.addEventListener('click', function () {
        overlayImgEl.innerHTML = "";
        overlayEl.style.display = "none";
    })
}