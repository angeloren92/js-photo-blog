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
                        <img id="cardImg" src="${url}" alt="${title}" class="img-fluid mb-3">
                        <p class="text-muted fw-bold mb-0">${date}</p>
                        <h2 class="h4 fw-bold mb-0">${title.toUpperCase()}</h2>
                    </figure>
                </div>
            </div>`
    })
    return markup;
}



    // <div id="overlay">
    //     <div class="row-cols-1 my-4">
    //         <div class="col">
    //             <button class="mb-5" onclick="off()">Chiudi</button>
    //         </div>
    //         <div class="col">
    //             <img src="./img/cork.png" alt="" class="img-fluid w-50">
    //         </div>
    //     </div>
    // </div>

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}