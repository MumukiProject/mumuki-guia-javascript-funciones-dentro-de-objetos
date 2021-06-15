describe("Si agregamos un mouse,", function() {
  let mouse = {
    id: 1,
    titulo: "Mouse Genius",
    precio: 150,
    envioIncluido: false,
  };
  let teclado = {
    id: 2,
    titulo: "Teclado Genius",
    precio: 300,
    envioIncluido: false,
  };
  let monitor = {
    id: 3,
    titulo: "Monitor Genius",
    precio: 2500,
    envioIncluido: false,
  };
  let auriculares = {
    id: 4,
    titulo: "Auriculares Genius",
    precio: 500,
    envioIncluido: false,
  };
  it("y hacemos carrito.detalle() nos retorna el listado con el formato correcto de los tres productos", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(mouse);
    carrito.agregarAlCarrito(teclado);
    carrito.agregarAlCarrito(auriculares);
    assert.equal(carrito.detalle(), 'Listado de productos:\nMouse Genius - 270\n,Auriculares Genius - 620\n,Teclado Genius - 420\nTotal con IVA: 1585.1');
  })
  
});