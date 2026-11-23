describe('(Treinamento) testes de api na restfull broker - reservas de hospedagem ',()=>{
    it('Deve criar uma reserva',()=>{
        cy.request({
            method:'post',
            url:'https://restful-booker.herokuapp.com/booking',
            body:{
                  firstname: 'Joao',
                  lastname: 'Rodrigues',
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
            expect(response.body).to.have.property('bookingid')
        })
    })
})