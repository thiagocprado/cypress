describe("Página de Cadastro", () => {
  it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.cadastrar("Ana Maria", "ana_maria_braga@email.com", "Senha123");
  });
});
