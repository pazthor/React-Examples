describe('es una prueba ', ()=> {
  beforeEach(() =>{
    console.log('before each')
  })

  beforeAll(() => {
    console.log(' antes ke todo')
  })
  it("should display a list  of items", () => {
    expect(2+2).toEqual(5);
  })

  afterEach(() => {
    console.log('Despues de cada uno')
  })
  afterAll(() => {
    console.log('Despues de todo')
  })
})