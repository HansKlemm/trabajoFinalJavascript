
const noticias = document.getElementById('container-news');
const urlNot = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e2e2fb27d47e444cb1fbdbe04cf0dce1&pageSize=6';

var reqNot = new Request(urlNot);

fetch(reqNot)
    .then(function(respuesta) {
        // Verifica si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud: ' + respuesta.statusText);
        }
        // Retorna la promesa que se resuelve con los datos JSON
        return respuesta.json();
        
    })
    .then(data => {
        // Aquí 'data' es el objeto con los datos de la API
        //console.log(data)
        data.articles.forEach(noticia => {
            noticias.innerHTML +=
            `
            <div class="tarjeta">
                <h1 class="titleTarget">${noticia.title}</h1>
                <a href="${noticia.url}" target="_blank">    
                    <img src="${noticia.urlToImage}" alt="" class="urlToImage">
                </a>                
                <p class="description">${noticia.description}</p>
                <a href="${noticia.url}" class="enlaceTarget" target="_black">Continuar leyendo.</a>
                <p class="publishedAt">${noticia.publishedAt}</p>
            </div>
            `;
        });
    })
    .catch(error => {
        // Muestra cualquier error en la consola
        //console.log('Hubo un error:', error);
    });

const juegos = document.getElementById('container-games');
const urlPlataforma = 'https://api.rawg.io/api/platforms?key=1215ba775b164997a8197ccd471f09a7'
const urlGames = 'https://api.rawg.io/api/games?key=1215ba775b164997a8197ccd471f09a7&platforms=18,1,7&page_size=6';

    fetch(urlPlataforma)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error en la solicitud de juegos: ' + res.statusText);
            }
            return res.json();
        })
        .then(data => {
            // console.log(data); 
            
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud de juegos:', error);
        });

    fetch(urlGames)
        .then(res => {
            if (!res.ok){
                throw new Error('Error en la solicitud: ' + res.statusText);
            }
            return res.json();
        })

        .then(data => {
            // Aquí 'data' es el objeto con los datos de la API
            console.log(data.results)

            data.results.forEach(resultado => {
                juegos.innerHTML +=
                `
                <div class="tarjetaGame">
                    <img src="${resultado.background_image}" alt="" class="urlToImageGame">
                    <h1 class="titleTarget">${resultado.name}</h1>
                    <p class="description"><b>Valoración:</b> ${resultado.rating}</P>
                    <p class="description"><b>Fecha de publicación:</b> ${resultado.released}</P>
                    <p class="publishedAt">${resultado.updated}</p>
                </div>
                `;
            })
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud de plataformas:', error);
        });


///////////////////////////////////////////////////////////
///////////////////SCRIPTS DE LA GALERIA\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

lightbox.option({
    wrapAround: true,
});


