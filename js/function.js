/**
 * ## Markup per le Cards della pagina
 * @param {key} data - chiavi da usare
 * @returns restituisce il markup
 */
function getMarkup(data) {
    let markup = '';
    data.forEach(({title, date, url}) => {
        markup += `                
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card rounded-0 position-relative">
                    <img src="./img/pin.svg" alt="image of pin for postcards" class="position-absolute start-50 translate-middle-x">
                    <figure class="card-body mb-0">
                        <img src="${url}" alt="${title}" class="img-fluid mb-3">
                        <p class="text-muted fw-bold mb-0">${date}</p>
                        <h2 class="h4 fw-bold mb-0">${title.toUpperCase()}</h2>
                    </figure>
                </div>
            </div>`
    })
    return markup;
}