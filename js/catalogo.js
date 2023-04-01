
let productos =

    [
        {
            id:1,
            titulo:"Producto 1",
            detalle:"detalle 1",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/I/814E05Ov8fL._AC_SY450_.jpg",
            amazon_url:"https://amzn.to/42iuPEm",
        },
        {
            id:2,
            titulo:"Producto 2",
            detalle:"detalle 2",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71DHY9INpoL._AC_SX425_.jpg",
            amazon_url:"https://amzn.to/40dqxgp ",
        },
        {
            id:3,
            titulo:"Producto 3",
            detalle:"detalle 3",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/614vmggarwL._AC_SX425_.jpg",
            amazon_url:"https://amzn.to/40hmyPf ",
        },
        {
            id:4,
            titulo:"Producto 4",
            detalle:"detalle 4",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/616p5o8FxhL._AC_SX425_.jpg",
            amazon_url:"https://amzn.to/3JN59bM",
        },
        {
            id:5,
            titulo:"Producto 5",
            detalle:"detalle 5",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61izJJWW1eL._AC_SX679_.jpg",
            amazon_url:"https://amzn.to/42l27Tx",
        },
        {
            id:6,
            titulo:"Producto 6",
            detalle:"detalle 6",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71UCGSPGEsS._AC_SX679_.jpg",
            amazon_url:"https://amzn.to/3LDLwVb",
        },
        {
            id:7,
            titulo:"Producto 7",
            detalle:"detalle 7",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71EBAOuEUpL._AC_SX425_.jpg",
            amazon_url:"https://amzn.to/3JMlNaz",
        },
        {
            id:8,
            titulo:"Producto 8",
            detalle:"detalle 1",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61X6EEV4gFL._AC_SX679_.jpg",
            amazon_url:"https://amzn.to/3JrRd5F",
        },
        {
            id:9,
            titulo:"Producto 9",
            detalle:"detalle 9",
            precio:0,
            imagen_url: "https://m.media-amazon.com/images/I/814E05Ov8fL._AC_SY450_.jpg",
            amazon_url:"",
        },



    ]



 productos.forEach( item =>{

    // 'console.log(item.titulo);
    // pro += Imprimir(item.id,item.titulo,item.imagen_url);
    // console.log(pro);


 })

 let wrapper = document.getElementById("wrapper")


 function imprimir(){

    let wrapper = document.getElementById("wrapper")
    let resultado = "";

    productos.forEach(element => {
        let template_card = `
        <a href="${element.amazon_url}">
        <div class="card" id="${element.id}">
    
            <img src="${element.imagen_url}" alt="" srcset="">
            <div>
                <h2>${element.titulo}</h2>
                <h3>${element.precio}</h3>
                <p>${element.detalle}</p>
                <button>Ver en Amazom</button>
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
 


