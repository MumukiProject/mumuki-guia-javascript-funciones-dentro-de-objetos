describe("", function() {
  it("Si hacemos playlist.agregarCancion('Blackbird'), la canción se agrega al array de canciones", function() {
    playlist.agregarCancion('Blackbird')
    assert.deepEqual(playlist.canciones,['Blackbird']);
  })
})

describe("", function() {
  it("Si luego hacemos playlist.agregarCancion('Lotus Flower'), el array de canciones muestra las dos canciones", function() {
    playlist.agregarCancion('Lotus Flower');
    assert.deepEqual(playlist.canciones,['Black Bird', 'Lotus Flower']);
  })
})