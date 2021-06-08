describe("", function() {
  it("Si tenemos un perfil que tiene nombre Hedy y apellido Lamarr, al hacer perfil.obtenerNombreCompleto() retorna Hedy Lamarr", function() {
    let perfil = {
      nombre: "Hedy",
      apellido: "Lamarr",
      edad: 30,
    };
    let resultado = perfil.obtenerNombreCompleto;
    assert.equal(resultado,'Hedy Lamarr');
  })
});

describe("", function() {
  it("Si tenemos un perfil que tiene nombre Marilina y apellido Bertoldi, al hacer perfil.obtenerNombreCompleto() retorna Marilina Bertoldi", function() {
    let perfil = {
      nombre: "Marilina",
      apellido: "Bertoldi",
      edad: 32,
    };
    let resultado = perfil.obtenerNombreCompleto();
    assert.equal(resultado,'Marilina Bertoldi');
  })
});