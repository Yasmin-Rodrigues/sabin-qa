class login {
    preencherLogin(){
        cy.get('[data-testid="login-email-input"]').type('clientesabinloja@tuamaeaquelaursa.com');
        cy.get('[data-testid="login-password-input"]').type('@Naruto02');
        cy.get('[data-testid="login-submit-button"]').click();
    }
}

export default new login();