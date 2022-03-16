
const url = "https://api.jikan.moe/v4/manga"
const url2 = "https://api.jikan.moe/v4/top/manga"

const apiManga = async()=>{
    /*Lista de mangas*/
    const datos = await fetch(url)
    const formato = await datos.json()
    const resultado = formato.data

    let contenManga = ''    
    for(let i = 0 ; i< resultado.length ; i++){
        contenManga += `
        <div class="manga">
        <div class="img_manga">
            <img src="${resultado[i].images.webp.image_url}" alt="">
            <div class="btn_ver">
                <a class="btn_ir" href="view/descrip.html?caro=${resultado[i].mal_id}">Ver</a>
            </div>
        </div>
        <p>${resultado[i].title}</p>
        </div>
        `
    }

    document.querySelector(".mangas_all").innerHTML = contenManga

    /*Lista de mangas Top*/ 
    const datosTop = await fetch(url2)
    const formatoTop =await datosTop.json()
    const emision = formatoTop.data
    
    let TopManga = ''
    for(let i = 0; i< 15;i++){
        if(emision[i].status == "Publishing"){
            TopManga += `
            <div class="manga">
            <div class="img_manga">
                <img src="${emision[i].images.webp.image_url}" alt="">
                <div class="btn_ver">
                <a class="btn_ir" href="../view/descrip.html?caro=${emision[i].mal_id}">Ver</a>
                </div>
            </div>
            <p>${emision[i].title}</p>
           
            </div>`
        }
    }

    document.querySelector(".mangas_top").innerHTML = TopManga

    
    

    console.log(emision)
}

apiManga()

