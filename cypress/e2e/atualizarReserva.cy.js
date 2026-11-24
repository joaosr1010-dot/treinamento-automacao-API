describe ('(Treinamento) testes de api na restfull broker - reservas de hospedagem',()=>{
    it('Deve atualizar reserva',()=>{
        cy.request({
            method:'PUT',
            url:'https://restful-booker.herokuapp.com/booking/7',
            headers:{
                cookie: 'token=cd946208d7b840c'
            },
            body:{
                  firstname: 'Joao',
                  lastname: 'Rodrigues Atualizado',
                  totalprice: 150,
                  depositpaid: true,
                  bookingdates: {
                  checkin: '2026-11-20',
                  checkout: '2026-11-25'
                  },
                  additionalneeds: 'Breakfast'
            }
        }).then ((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.lastname).to.eq('Rodrigues Atualizado')
        })
    })
})