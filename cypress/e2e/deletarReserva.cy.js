describe('(Treinamento) testes de api na restfull broker - reservas de hospedagem ',()=>{
    it('Deve deletar uma reserva',()=>{
        cy.request({
            method:'DELETE',
            url:'https://restful-booker.herokuapp.com/booking/5',
            headers:{
                cookie:'token=a55303d317c8163'
            },
        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.eq('Created')
        })
    })
})