const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)
        for (let i = 0; i < data.length; i++) {
            const {id, title, date, url} = data[i];
            //console.log(id, title, date, url)
            
        }
    })
