describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.get('[data-test="login-button"]').click();
    cy.intercept(
      "POST",
      "https://adopet-api-i8qu.onrender.com/adotante/login",
      {
        statusCode: 400,
      }
    ).as("stubPost");
  });

  it("Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página", () => {
    cy.login("ana", "senha");
    cy.contains("Por favor, verifique o email digitado").should("be.visible");
    cy.contains(
      "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
    ).should("be.visible");
  });

  it("Deve falhar mesmo que os campos sejam preenchidos corretamente", () => {
    cy.login("ana@email.com", "Senha123");
    cy.wait("@stubPost");
    cy.contains("Falha no login. Consulte suas credenciais.").should(
      "be.visible"
    );
  });
});
