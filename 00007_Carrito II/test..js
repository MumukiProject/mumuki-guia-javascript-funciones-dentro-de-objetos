describe("", function() {
  let mouse = {
    id: 1,
    titulo: "Mouse Genius",
    precio: 150,
    envioIncluido: true
  };
  
  let teclado = {
    id: 2,
    titulo: "teclado Genius",
    precio: 300,
    envioIncluido: false
  };
  
  it("Si agregamos un mouse con envio incluido el precio se mantiene igual", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(mouse);
    assert.equal(carrito.obtenerTotal(), 181.5);
  })

  it("Si agregamos un teclado que no tiene envio incluido, se le suman 120 al precio del producto", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(teclado);
    assert.equal(carrito.obtenerTotal(), 508.2);
  })

  it("Si agregamos un mouse de 150 y un teclado de 420 más envio al hacer precioConIVA retorna 689.7", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(mouse);
    carrito.agregarAlCarrito(teclado);
    assert.equal(Math.round(carrito.obtenerTotal()), 689.7);
  })
});
