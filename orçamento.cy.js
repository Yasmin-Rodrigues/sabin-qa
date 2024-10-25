import login from "../../support/pages/login";

describe('Orçamento de pedido médico', () => {
  it('Deve realizar a solicitação de orçamento do pedido médico', () => {
    // Acessar a home page da loja
    cy.visit('https://open-mage-ecommerce-server-qa.cloudsabin.com');
    cy.get('[data-testid="brasilia_df-button"]').click();

    //Acessar modal para enviar pedido
    cy.get('popper_xi6m83gq_orl7ve').click();
    login.preencherLogin
  })
})