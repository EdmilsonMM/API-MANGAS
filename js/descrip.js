const valores  = window.location.search;
const paramentros  = new URLSearchParams(valores)

let id = paramentros.get('caro')
console.log(id)

const urlID = `https://api.jikan.moe/v4/manga/${id}`

const mangaID = async ()=>{
    const datos = await fetch(urlID)
    const formato = await datos.json()
    const resultado = formato.data
    console.log(resultado)

    let descrip = `<div class="descrip_manga">
                    <h1>${resultado.title}</h1>
                    <hr>
                    <div class="descrip_img">
                        <img src="${resultado.images.webp.image_url}" alt="">
                    </div>
                    <div class="decrip_parrafo">
                        <p>${resultado.synopsis}</p>
                        <span> Popularidad : ${resultado.popularity}</span>
                        <span> Estado : ${resultado.status}</span>
                        <span> Publicado  : ${resultado.published.prop.from.year}</span>
                    </div>
                    </div>`

    document.querySelector(".mangas_descrip").innerHTML = descrip

    console.log(resultado.chapters)
}

mangaID()