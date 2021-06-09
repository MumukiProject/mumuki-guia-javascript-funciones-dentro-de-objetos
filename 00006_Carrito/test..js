describe("", function() {
  it("Si agregamos un mouse, y un teclado el carrito tiene estos dos productos", function() {
      carrito.agregarAlCarrito(mouse);
      carrito.agregarAlCarrito(teclado);
      assert.deepEqual(carrito.productos(),[mouse, teclado]);
  })
});

describe("", function() {
  it("Si agregamos un mouse de 150, y un teclado de 300, al hacer carrito.obtenerTotal retorna 450", function() {
      carrito.agregarAlCarrito(mouse);
      carrito.agregarAlCarrito(teclado);
      assert.equal(carrito.obtenerTotal(), 450);
  })
});

describe("", function() {
  it("Si agregamos un monitor, y unos auriculares el carrito tiene estos dos productos", function() {
      carrito.productos = [];
      carrito.agregarAlCarrito(monitor);
      carrito.agregarAlCarrito(auriculares);
      assert.deepEqual(carrito.productos(),[monitor, auriculares]);
  })
});