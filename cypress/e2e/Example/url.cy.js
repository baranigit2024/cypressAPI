const urls = ['https://www.abc.co.uk', 'https://www.abc.ch', 'https://www.abc.de'];

urls.forEach(url => {

  describe(`Testing url: `, () => {


    //describe(`Testing url: ${url}`, () => {
     before(() => Cypress.config('baseUrl', url))

    it('sees the required baseURL', () => {
      console.log('it', Cypress.config('baseUrl'))
    })

  })
})