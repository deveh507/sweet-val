
let productos =

    [
        {
            id:1,
            titulo:"SIMPDIY Shoe Box",
            detalle:"",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/I/814E05Ov8fL._AC_SY450_.jpg",
            amazon_url:"https://amzn.to/42iuPEm",
        },
        {
            id:2,
            titulo:"20 Pack Vacuum Storage Bags",
            detalle:"",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71DHY9INpoL._AC_SX425_.jpg",
            amazon_url:"https://amzn.to/40dqxgp ",
        },
        {
            id:3,
            titulo:"ilikable Vacuum Shower Caddy ",
            detalle:"",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/614vmggarwL._AC_SX425_.jpg",
            amazon_url:"https://amzn.to/40hmyPf ",
        },
        {
            id:4,
            titulo:"DEKCO 2K Security Camera",
            detalle:"",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/616p5o8FxhL._AC_SX425_.jpg",
            amazon_url:"https://amzn.to/3JN59bM",
        },
        {
            id:5,
            titulo:"Automatic Soap Dispenser",
            detalle:"",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61izJJWW1eL._AC_SX679_.jpg",
            amazon_url:"https://amzn.to/42l27Tx",
        },
        {
            id:6,
            titulo:"Lirex Handbag Hanging Organizer",
            detalle:"",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71UCGSPGEsS._AC_SX679_.jpg",
            amazon_url:"https://amzn.to/3LDLwVb",
        },
        {
            id:7,
            titulo:"360 Rotating Makeup Organizer",
            detalle:"",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71EBAOuEUpL._AC_SX425_.jpg",
            amazon_url:"https://amzn.to/3JMlNaz",
        },
        {
            id:8,
            titulo:"Inumsu Electric Spin Scrubber",
            detalle:"",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61X6EEV4gFL._AC_SX679_.jpg",
            amazon_url:"https://amzn.to/3JrRd5F",
        },




    ]


//   let wrapper = document.getElementById("wrapper")


 function imprimir(){

    let wrapper = document.getElementById("wrapper")
    let resultado = "";

    productos.forEach(element => {
        let template_card = `
        <a href="${element.amazon_url}">    
        <div class="card">
            <div class="container_img">
                <img src="${element.imagen_url}" alt="" srcset="">
            </div>
            <div class="container_body">

                <h2>${element.titulo}</h2>
                <p>${element.detalle}</p> 

            </div>
        </div>
    </a> 
    
    `;
        resultado += template_card;
    });

    //Imprimiendo
    wrapper.innerHTML = resultado; 

 }


 //Run
 imprimir()
 


