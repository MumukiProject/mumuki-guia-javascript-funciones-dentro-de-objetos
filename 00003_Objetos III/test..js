describe("", function() {
  it("Si hacemos playlist.agregarCancion('Black Bird'), la canción se agrega al array de canciones", function() {
    playlist.agregarCancion('Black Bird')
    assert.deepEqual(playlist.canciones,['Black Bird']);
  })
})

describe("", function() {
  it("Si luego hacemos playlist.agregarCancion('Lotus Flower'), el array de canciones muestra las dos canciones", function() {
    //playlist.agregarCancion('Geronimo');
    playlist.agregarCancion('Lotus Flower');
    assert.deepEqual(playlist.canciones,['Geronimo', 'Lotus Flower']);
  })
})