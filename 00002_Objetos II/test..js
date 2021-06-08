describe("", function() {
  it("Si tenemos una pelicula de nombre The Dark Knight y año 2008 al hacer pelicula.mostrarInfo() retorna Película: The Dark Knight - Año: 2008", function() {
    let pelicula = {
    titulo: "The Dark Knight",
    anio: 2008,
    director: "Christopher Nolan",
};
    let resultado = pelicula.mostrarInfo();
    assert.equal(resultado,'Película: The Dark Knight - Año: 2008');
  })
});

describe("", function() {
  it("Si tenemos una pelicula de nombre El laberinto del fauno y año 2006 al hacer pelicula.mostrarInfo() retorna Película: El laberinto del fauno - Año: 2006", function() {
    let pelicula = {
    titulo: "El laberinto del fauno",
    anio: 2006,
    director: "Guillermo del Toro",
};
    let resultado = pelicula.mostrarInfo();
    assert.equal(resultado,'Película: El laberinto del fauno - Año: 2006');
  })
});