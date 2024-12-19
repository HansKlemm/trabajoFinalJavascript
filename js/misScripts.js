
const noticias = document.getElementById('container-news');
const key = '5ea337e57f0293769a990e81926406f9'
const urlNot = `https://api.mediastack.com/v1/news?access_key=${key}&languages=es&country=co,-es`;

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
        console.log(data)
        
        const contenidoNoticias = data.data.filter(noticia => noticia.image);
        contenidoNoticias.forEach(noticia => {

            let contenidoImagen = '';

            if (noticia.image.endsWith('.mp3')) {
                contenidoImagen = `
                    <audio controls>
                        <source src="${noticia.image}" type="audio/mp3">
                        Tu navegador no soporta el reproductor de audio.
                    </audio>
                `;
            } else {
                contenidoImagen = `
                <a href="${noticia.url}" target="_blank">    
                    <img src="${noticia.image}" alt="Imagen de la noticia" class="urlToImage">
                </a>
            `;
            }

            noticias.innerHTML +=
            `
            <div class="tarjeta">
                ${contenidoImagen}
                <h1 class="titleTarget protest gradientText">${noticia.title}</h1>
                <p class="description gradientText">${noticia.description}</p>
                <a href="${noticia.url}" class="enlaceTarget" target="_black">Continuar leyendo.</a>
                <p class="publishedAt gradientText">${noticia.published_at}</p>
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
                    <h1 class="titleTarget gradientText protest">${resultado.name}</h1>
                    <p class="description gradientText"><b>Valoración:</b> ${resultado.rating}</P>
                    <p class="description gradientText"><b>Fecha de publicación:</b> ${resultado.released}</P>
                    <p class="publishedAt gradientText">${resultado.updated}</p>
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


