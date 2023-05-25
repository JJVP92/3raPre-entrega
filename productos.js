const tienda = document.getElementById("tienda");
const mostrador = document.getElementById("mostrador")
const caja = document.getElementById("caja")





let carro = JSON.parse(localStorage.getItem("carro")) || [];
const productoslocal = async () => {
  const respuesta = await fetch("productos.json")
  const arrayproductos = await respuesta.json()
  arrayproductos.forEach((productos) => {
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
      Swal.fire({
        title: 'Producto agregado al carrito',
        text: 'Muchas gracias 😘',
        icon: 'success',
        confirmButtonText: 'seguir comprando'
      })
      carro.push({
        nombre: productos.nombreproducto,
        img: productos.img,
        precio: productos.precio,
  
  
      })
      localStorage.setItem("carro", JSON.stringify(carro));
  
    })
  
  
  
  })
};

productoslocal();







mostrador.addEventListener("click", () => {
  caja.style.display = "block"
  caja.innerHTML = "";
  const cajacabezera = document.createElement("div")
  cajacabezera.className = "cajacabezera";
  cajacabezera.innerHTML = `
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

  carro.forEach((productos) => {
    let contenedordeproducto = document.createElement("div")
    contenedordeproducto.className = "contenedordeproductos"
    contenedordeproducto.innerHTML = `
    <img class="imagenesdelcarrito" src="${productos.img}">
    <h2>${productos.nombre}</h2>
    <h2>$ ${productos.precio}</h2>
    
    `;
    caja.append(contenedordeproducto)
  })

  const total = carro.reduce((acc, elemento) => acc + elemento.precio, 0);
  const totaltotal = document.createElement("div");
  totaltotal.className = "total"
  totaltotal.innerHTML = `<h3>Precio a pagar: ${total}</h3>`;
  caja.append(totaltotal);

  const borrar = document.createElement("button");
  borrar.innerText = "Borrar elementos";
  borrar.addEventListener("click", () => {
    Toastify({
      text: "Carrito vacio",
      duration: 5000,


      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, pink, grey)",


      },
      onClick: function () { }
    }).showToast();

    carro = []
    caja.style.display = "none"
    localStorage.removeItem("carro");



  })
  totaltotal.append(borrar)








});
