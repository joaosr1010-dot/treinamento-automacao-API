describe('(Treinamento) testes de api na restfull broker - reservas de hospedagem',() =>{
    it('Deve consultar reservas por ID', ()=>{
        cy.request({
            method:'GET',
            url:'https://restful-booker.herokuapp.com/booking/2',
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('firstname');

        })
    })
})