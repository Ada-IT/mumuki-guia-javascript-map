describe("Descripción del grupo", function() {
  it("Cada valor tiene +10", function() {
    [1, 2, 3, 4, 5].map(n => n + 10).to.eql(numerosMasDiez)
  })
})