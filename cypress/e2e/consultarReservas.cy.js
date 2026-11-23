describe ('(Treinamento) testes de api na restfull broker - reservas de hospedagem ',()=>{
    it('Deve listar todas as reservas',()=>{
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
        }) .then((response)=>{
            expect(response.status).to.eq(200);
             expect(response.body).to.be.an('array');
        })
        
    })
})