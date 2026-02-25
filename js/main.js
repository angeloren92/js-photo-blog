const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.getElementById('cards')

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)
        let markup = '';
        for (let i = 0; i < data.length; i++) {
            const { title, date, url } = data[i];
            //console.log(id, title, date, url)
            markup += `                
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card rounded-0 position-relative">
                    <img src="./img/pin.svg" alt="" class="position-absolute start-50 translate-middle-x">
                    <figure class="card-body">
                        <img src="${url}" alt="${title}" class="img-fluid mb-3">
                        <p class="text-muted mb-0">${date}</p>
                        <h2 class="h4 fw-bold">${title.toUpperCase()}</h2>
                    </figure>
                </div>
            </div>`
        }
        rowEl.innerHTML = markup;
    })