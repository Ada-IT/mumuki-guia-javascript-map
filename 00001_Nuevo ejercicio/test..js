describe("Descripción del grupo", function() {
  let resultado = [1, 2, 3, 4, 5].map(n => n + 10);
  it("Cada valor tiene +10", function() {
    numerosMasDiez.forEach((n, i) => n.should.equal(resultado[i]);
  })
})