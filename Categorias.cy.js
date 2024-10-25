import login from "../../support/pages/login";describe('Compra de produto', () => {
  it('deve acessar home page da loja e adicionar produtos ao carrinho', () => {
    // Acessar a home page da loja
    cy.visit('https://open-mage-ecommerce-server-qa.cloudsabin.com');
    cy.get('[data-testid="brasilia_df-button"]').click();

    // Adicionar produto através da categoria Exames Laboratoriais 
    cy.get('[data-testid="widget-link-0"] > .absolute').click();
    cy.get('.shrink-0 > [data-testid="product-card-button-cortisol-8-horas"]', { timeout: 9000 }).click();
    cy.get('.addToCartButton__mrzSD', { timeout: 9000 }).click();
    cy.get(':nth-child(2) > .attendance-picker > .attendanceButtonContent__v8wrV > [data-testid="attendance-picker-input"]').click();
    cy.get(':nth-child(2) > .discrete-scrollbar > .root__7ofjn > [data-testid="product-page-units-button"] > .arrowIcon__DlIqF').click();
    cy.get(':nth-child(2) > .discrete-scrollbar > .root__7ofjn > .openDropdownContainer__aDcxF > .ul__UGgbu > .root__rCOvG > .text-left > .store__3-JVR > [data-testid="attendance-picker-input"]').click();
    cy.get(':nth-child(2) > .discrete-scrollbar > .root__7ofjn > .openDropdownContainer__aDcxF > .ul__UGgbu > .root__rCOvG > .mb-3 > .submitButton__xyx6d').click();
    cy.get('.continueBuyingButton__TqQ4s', { timeout: 9000 }).click();

    // Adicionar produto através da Categoria Vacinas 
    cy.get('[data-testid="widget-link-2"] > .absolute').click();
    cy.get(':nth-child(1) > .bg-light-gray > .gap-y-2\.5 > .buyButton__60cZa > img').click();
    cy.get('#term-check-input').click();
    cy.get('.mb-\[2\.5rem\]').click();
    cy.get('.arrowIcon__DlIqF').click();
    cy.get('.store__3-JVR > [data-testid="attendance-picker-input"]').click();
    cy.get('.submitButton__xyx6d').click();
    cy.get('.continueBuyingButton__TqQ4s').click();
    login.preencherLogin
  });
});


