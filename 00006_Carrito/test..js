describe("", function() {
  it("Si agregamos un mouse, y un teclado el carrito tiene estos dos productos", function() {
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
    carrito.agregarAlCarrito(mouse);
    carrito.agregarAlCarrito(teclado);
    assert.deepEqual(carrito.productos,[mouse, teclado]);
  })
});

describe("", function() {
  it("Si agregamos un mouse de 150, y un teclado de 300, al hacer carrito.obtenerTotal retorna 450", function() {
      assert.equal(carrito.obtenerTotal(), 450);
  })
});

describe("", function() {
  it("Si agregamos un monitor, y unos auriculares el carrito tiene estos dos productos", function() {
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
      carrito.productos = [];
      carrito.agregarAlCarrito(monitor);
      carrito.agregarAlCarrito(auriculares);
      assert.deepEqual(carrito.productos, [monitor, auriculares]);
  })
});

describe("", function() {
  it("Si agregamos un monitor de 2500, y unos auriculares de 500, al hacer carrito.obtenerTotal retorna 3000", function() {
      assert.equal(carrito.obtenerTotal(), 3000);
  })
});