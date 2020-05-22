describe('https://acid.com.mx', ()=>{
    describe('Cargar página', ()=>{
        it('Debería de cargar la página', ()=>{
            cy.visit('https://acid.com.mx')
        })
    })
})

describe('https://acid.com.mx', ()=>{
    describe('Tiene productos notorios', ()=>{
        it('Debería tener productos notorios', ()=>{
            cy.visit('https://acid.com.mx')
            cy.contains('Productos notorios')
        })
    })
})

describe('https://acid.com.mx', ()=>{
    describe('Tiene tabla de descuentos', ()=>{
        it('Debería darle click a la tabla de Descuentos', ()=>{
            cy.visit('https://acid.com.mx')
            cy.contains('Descuentos').click()
            cy.url().should('include', '/descuentos');
        })
    })
})