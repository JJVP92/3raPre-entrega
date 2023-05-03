const tienda = document.getElementById("tienda");
const mostrador = document.getElementById("mostrador")
const caja=document.getElementById("caja")


const productos = [
  { nombreproducto: "Totem", precio: 4500, img: "https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/343324046_1006804036977005_3090230678395515038_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHl9e9xnBvq6qisxoPqrN5O0QMri8F4hUXRAyuLwXiFRTBsz8LICdcuyh_hHXzQ3FBAQF2Dgrf_JIhbP7TXm38S&_nc_ohc=ryf4i5y2sboAX_xIttw&_nc_ht=scontent.feze10-1.fna&oh=00_AfB7-cJWvPoJM3R_iqpZIaYGGG7HU1v4gd_coMhMYuqW2g&oe=64554640", },

  { nombreproducto: "Muñequito", precio: 5605, img: "https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/339749663_1335618180331303_6819847430617156514_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH1AKO5QY0mmng93a3_9ebwFuGdwlNCKsgW4Z3CU0IqyE5s5xhuR2qxlCvtoN82xeCLH40X_KtWBAUZ-KtYs8Ll&_nc_ohc=7ywnlJs2zgkAX9gnApm&_nc_ht=scontent.feze10-1.fna&oh=00_AfDJaeRhcqMbpLuV-dtsA8FLKpaFddpw-UU7Rnm-3nMpFQ&oe=6454CBA7", },

  { nombreproducto: "Tematicos", precio: 50034, img: "https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/342324097_897254771503546_8046110414159255419_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHncGBkEUWTgBTHZPJAVV1xFIaoaYQYoEwUhqhphBigTAabzdUly7oqx5P_zp_nCxpkVlRDk8e_u6YCCOSJtEXh&_nc_ohc=nLJMH_P5saoAX_Rz-3X&_nc_ht=scontent.feze10-1.fna&oh=00_AfDMdw19F6tKKE5YVkYtl6X8QMQE5p-YXnUCxvQhyK9FSg&oe=6455622C", },

  { nombreproducto: "Arco decorativo", precio: 14500, img: "https://http2.mlstatic.com/D_NQ_NP_2X_835773-MLA54925744903_042023-F.webp", },

  { nombreproducto: "Combo infantil", precio: 34605, img: "https://http2.mlstatic.com/D_NQ_NP_2X_661832-MLA51344899189_082022-F.webp", },

  { nombreproducto: "Globos fluor", precio: 1034, img: "https://http2.mlstatic.com/D_NQ_NP_2X_682134-MLA51327130120_082022-F.webp", },

  { nombreproducto: "Letras", precio: 4500, img: "https://http2.mlstatic.com/D_NQ_NP_2X_641882-MLA41444509559_042020-F.webp", },

  { nombreproducto: "Globos perlados", precio: 3605, img: "https://http2.mlstatic.com/D_NQ_NP_2X_624630-MLA44114391675_112020-F.webp", },

  { nombreproducto: "Star wars", precio: 50034, img: "https://http2.mlstatic.com/D_NQ_NP_2X_994117-MLA53132950319_012023-F.webp", },

  { nombreproducto: "Marsahl el oso", precio: 34605, img: "https://http2.mlstatic.com/D_NQ_NP_2X_677621-MLA54389259828_032023-F.webp", },

  { nombreproducto: "Pokebolas", precio: 1034, img: "https://http2.mlstatic.com/D_NQ_NP_2X_945763-MLA52968715455_122022-F.webp", },

  { nombreproducto: "San Lorenzo", precio: 4500, img: "https://http2.mlstatic.com/D_NQ_NP_2X_776273-MLA51481809096_092022-F.webp", },

  { nombreproducto: "Metalizados", precio: 3605, img: "https://http2.mlstatic.com/D_NQ_NP_2X_775457-MLA43697059102_102020-F.webp", },

  { nombreproducto: "Globos Led", precio: 50034, img: "https://http2.mlstatic.com/D_NQ_NP_2X_857035-MLA49736471257_042022-F.webp", },

];



let carro = JSON.parse(localStorage.getItem("carro")) || [];

productos.forEach((productos) => {
  let showtienda = document.createElement("div");
  showtienda.className = "showtienda";
  showtienda.innerHTML = `
      <img class="imagenestienda" src="${productos.img}">
      <h3 class= "nombreproducto">${productos.nombreproducto}</h3>
      <p class="precio">${productos.precio} $</p>
       `;
  tienda.append(showtienda);
  let agregar = document.createElement("button");
  agregar.innerText = "Agregar"
  agregar.className = "agregar"
  showtienda.append(agregar);
  agregar.addEventListener("click", () => {
    carro.push({
      nombre: productos.nombreproducto,
      img: productos.img,
      precio: productos.precio,
     

    })
    localStorage.setItem("carro",JSON.stringify(carro));

  })



})

mostrador.addEventListener("click",()=>{
  caja.style.display="block"
  caja.innerHTML="";
  const cajacabezera= document.createElement("div")
  cajacabezera.className="cajacabezera";
  cajacabezera.innerHTML=`
  <h1>Productos del carrito</h1>
  `;
  caja.append(cajacabezera);
  
  const botonx = document.createElement("h1");
  botonx.innerHTML = '<i class="bi bi-x-square"></i>'
  ;
  
  botonx.addEventListener("click", () => {
    caja.style.display = "none";
  });
  cajacabezera.append(botonx)

   carro.forEach((productos)=>{
    let contenedordeproducto=document.createElement("div")
    contenedordeproducto.className="contenedordeproductos"
    contenedordeproducto.innerHTML=`
    <img class="imagenesdelcarrito" src="${productos.img}">
    <h2>${productos.nombre}</h2>
    <h2>$ ${productos.precio}</h2>
    
    `;
    caja.append(contenedordeproducto)
  })

  const total= carro.reduce((acc, elemento)=> acc + elemento.precio, 0);
  const totaltotal=document.createElement("div");
  totaltotal.className="total"
  totaltotal.innerHTML=`<h3>Precio a pagar: ${total}</h3>`;
  caja.append(totaltotal);

  const borrar=document.createElement("button");
  borrar.innerText="Borrar elementos";
  borrar.addEventListener("click",() =>{
  carro=[]
  caja.style.display="none"
  localStorage.removeItem("carro");
  
 

  })
  totaltotal.append(borrar)
  
  
  





});
