const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.getElementById('cards')

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)
        let markup = '';
        for (let i = 0; i < data.length; i++) {
            const { id, title, date, url } = data[i];
            //console.log(id, title, date, url)
            markup += `                
            <div class="col">
                <div class="card rounded-0 position-relative">
                    <img src="./img/pin.svg" alt="${title}" class="position-absolute start-50 translate-middle-x">
                    <figure class="card-body">
                        <img src="${url}" alt="" class="img-fluid mb-3">
                        <h2 class="h5 text-muted">${title}</h2>
                        <p class="text-muted mb-2">${date}</p>
                    </figure>
                </div>
            </div>`
        }
        rowEl.innerHTML = markup;
    })