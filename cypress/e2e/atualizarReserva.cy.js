describe ('(Treinamento) testes de api na restfull broker - reservas de hospedagem',()=>{
    it('Deve atualizar reserva',()=>{
        cy.request({
            method:'PUT',
            url:'https://restful-booker.herokuapp.com/booking/1573',
            headers:{
                cookie: 'token=3bb7c1557260106'
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