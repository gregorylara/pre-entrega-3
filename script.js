function crearProducto(caracteristicas) {
    const [nombre, descripcion, codigo, precio, stock, imagen, categoria] = caracteristicas;
    return {
      nombre,
      descripcion,
      codigo,
      precio,
      stock,
      imagen,
      categoria
    };
  }
  function getNombreProducto() {
    return document.getElementById("nombreProducto").value;
  }
  
  function getDescripcionProducto() {
    return document.getElementById("descripcionProducto").value;
  }
  
  function getCodigoProducto() {
    return document.getElementById("codigoProducto").value;
  }
  
  function getPrecioProducto() {
    return document.getElementById("precioProducto").value;
  }
  
  function getStockProducto() {
    return document.getElementById("stockProducto").value;
  }
  
  function getCategoriaProducto() {
    return document.getElementById("categoriaProducto").value;
  }
  const formulario = document.querySelector('form');
const productosContainer = document.querySelector('.productos-container');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener valores de los campos
  const nombre = document.querySelector('#nombreProducto').value;
  const descripcion = document.querySelector('#descripcionProducto').value;
  const codigo = document.querySelector('#codigoProducto').value;
  const precio = document.querySelector('#precioProducto').value;
  const stock = document.querySelector('#stockProducto').value;
  const categoria = document.querySelector('#categoriaProducto').value;
  const imagen = document.querySelector('#imagenProducto').files[0];

  // Crear nueva tarjeta de producto
  const card = document.createElement('div');
  card.classList.add('card', 'mt-4');

  // Crear imagen de la tarjeta
  const imagenTarjeta = document.createElement('img');
  imagenTarjeta.classList.add('card-img-top');
  imagenTarjeta.src = URL.createObjectURL(imagen);
  imagenTarjeta.alt = nombre;
  card.appendChild(imagenTarjeta);

  // Crear cuerpo de la tarjeta
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  // Crear título de la tarjeta
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = nombre;
  cardBody.appendChild(cardTitle);

  // Crear descripción de la tarjeta
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = descripcion;
  cardBody.appendChild(cardText);

  // Crear lista de características de la tarjeta
  const listGroup = document.createElement('ul');
  listGroup.classList.add('list-group', 'list-group-flush');
  card.appendChild(listGroup);

  // Crear características de la tarjeta
  const codigoItem = document.createElement('li');
  codigoItem.classList.add('list-group-item');
  codigoItem.textContent = `Código: ${codigo}`;
  listGroup.appendChild(codigoItem);

  const precioItem = document.createElement('li');
  precioItem.classList.add('list-group-item');
  precioItem.textContent = `Precio: ${precio}`;
  listGroup.appendChild(precioItem);

  const stockItem = document.createElement('li');
  stockItem.classList.add('list-group-item');
  stockItem.textContent = `Stock: ${stock}`;
  listGroup.appendChild(stockItem);

  const categoriaItem = document.createElement('li');
  categoriaItem.classList.add('list-group-item');
  categoriaItem.textContent = `Categoría: ${categoria}`;
  listGroup.appendChild(categoriaItem);

  // Agregar tarjeta al contenedor de productos
  productosContainer.appendChild(card);

  // Limpiar formulario
  formulario.reset();
});

function guardarProductoEnJson(producto) {
  // Obtener los productos ya guardados
  let productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

  // Agregar el nuevo producto al array de productos guardados
  productosGuardados.push(producto);

  // Guardar los productos en el Local Storage como un string JSON
  localStorage.setItem('productos', JSON.stringify(productosGuardados));
}

