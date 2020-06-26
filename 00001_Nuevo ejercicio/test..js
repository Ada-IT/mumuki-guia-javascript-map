describe("Descripción del grupo", function() {
  
  const result = [11, 12, 13, 14, 15];
  
  const makeTest = (val, i) => it(`El valor de la posición ${i} tiene que ser ${val}`, () => assert.equal(numerosMasDiez[i], val))
  
  
  result.forEach(makeTest)
})