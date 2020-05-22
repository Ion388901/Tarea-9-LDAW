describe('https://www.yotepresto.com/prestamos-en-linea', ()=>{
     describe('carga prestamo', ()=>{
          it('debería de mostrar nuestra mejor tasa',()=>{
              cy.visit('https://www.yotepresto.com/prestamos-en-linea')
              cy.contains('Entendido')
                .click()
              cy.get('#amount')
                .clear()
                .type(50000);
              cy.get('#loan_term')
                .select('48');
              cy.contains('Nuestra mejor tasa').should('be.visible')
          })
     })
})