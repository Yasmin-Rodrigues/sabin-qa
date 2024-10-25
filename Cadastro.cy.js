const { faker } = require('@faker-js/faker');
 
describe('Cadastro de Cliente', () => {
//Função para validar CPF
    function gerarCPF() {
        const random = (n) => Math.floor(Math.random() * n);
       
        const cpf = Array(9)
            .fill(0)
            .map(() => random(9));
 
        const calcDigito = (cpf, n) => {
            const fator = n + 1;
            const digito = cpf
                .slice(0, n)
                .reduce((acc, curr, index) => acc + curr * (fator - index), 0);
 
            return (digito * 10) % 11 % 10;
        };
 
        cpf.push(calcDigito(cpf, 9));
        cpf.push(calcDigito(cpf, 10));
 
        return cpf.join('');
    }
//Preencher os campos para cadastro 
    const preencherCadastro = (nome, email, senha, dataNascimento, cpf, telefone) => {
        cy.get('.createAccountButton__R-o0s').click();
        cy.get('[data-testid="register-fullname-input"]').type(nome);
        cy.get('[data-testid="register-email-input"]').type(email);
        cy.get('[data-testid="register-confirmation-email-input"]').type(email);
        cy.get('[data-testid="register-password-input"]').type(senha);
        cy.get('[data-testid="register-newsletter-input"]').click();
        cy.get('[data-testid="register-firststep-submit"]').click();
        cy.get('[data-testid="register-dob-input"]').type(dataNascimento);
        cy.get('[data-testid="register-cpf-input"]').type(cpf);
        cy.get('[data-testid="register-female-radio"]').click();
        cy.get('[data-testid="generic-input"]').type('Filiação Teste');
        cy.get('[data-testid="register-secondstep-submit"]').click();
    };
    it('deve acessar a página de cadastro da loja', () => {
        cy.visit('https://open-mage-ecommerce-server-qa.cloudsabin.com/entre');
        cy.get('[data-testid="brasilia_df-button"]').click();
 
        const nome = faker.name.fullName();
        const email = faker.internet.email();
        const senha = faker.internet.password(8);
        const dataNascimento = '10102010';
        const cpfValido = gerarCPF();
        const telefone = faker.phone.number('219########');
 
        preencherCadastro(nome, email, senha, dataNascimento, cpfValido, telefone);

//Preencher os campos de endereço
        const preencherEndereco = (cep, numero, telefone) => {
            cy.get('[data-testid="register-postcode-input"]').click();
            cy.get('[data-testid="register-postcode-input"]').type(cep);
            cy.get('[data-testid="register-search-cep-button"]').click();
            cy.get('[data-testid="register-postcode-input"]', { timeout: 9000 }).type(numero);
            cy.get('[data-testid="register-phone-input"]').type(telefone);
            cy.get('[data-testid="register-thirdstep-submit"]').click();
        };
 
        preencherEndereco('24457320', '123', telefone);
    });
});