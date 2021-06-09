describe("", function() {
  it("Si agregamos un mouse con envio incluido el precio se mantiene igual", function() {
    let mouse = {
      id: 0,
      titulo: "Mouse Genius",
      precio: 150,
      envioIncluido: false,
    };
      carrito.agregarAlCarrito(mouse);
      assert.equal(mouse.precio,150);
  })
});

describe("", function() {
  it("Si agregamos un teclado que no tiene envio incluido, se le suman 120 al precio del producto", function() {
    let teclado = {
      id: 0,
      titulo: "teclado Genius",
      precio: 300,
      envioIncluido: false,
    };
      carrito.agregarAlCarrito(teclado);
      assert.equal(teclado.precio, 420);
  })
});

describe("", function() {
  it("Si agregamos un mouse de 150 y un teclado de 420 más envio al hacer precioConIVA retorna 689.7", function() {
      assert.equal(carrito.obtenerTotal(), 689.7);
  })
});
