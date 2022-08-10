import HomePage from "../pages/HomePage";
const homePage = new HomePage;

import SignUpPage from "../pages/SignUpPage";
const signUpPage = new SignUpPage;

describe('Cadastro com sucesso', () => {
  it('passes', () => {
    homePage.abrirNavegador();
    homePage.clicarSignUp();
    signUpPage.preencherFirstName();
    signUpPage.preencherSurname();
    signUpPage.preencherEpost();
    signUpPage.preencherMobile();
    signUpPage.preencherUsername();
    signUpPage.preencherPassword();
    signUpPage.preencherConfirmPassword();
    signUpPage.clickBtnSubmit();

    //validação
    signUpPage.registrationSuccessful();
  })
})

describe('Cadastro sem um campo obrigatorio', () => {
  it('passes', () => {
    homePage.abrirNavegador();
    homePage.clicarSignUp();
    signUpPage.preencherFirstName();
    signUpPage.preencherEpost();
    signUpPage.preencherMobile();
    signUpPage.preencherUsername();
    signUpPage.preencherPassword();
    signUpPage.preencherConfirmPassword();
    signUpPage.clickBtnSubmit();

    //validação
    signUpPage.enterSurnameMessage();
  })
})

describe('Cadastro de usuário já existente', () => {
  it('passes', () => {
    homePage.abrirNavegador();
    homePage.clicarSignUp();
    signUpPage.preencherFirstName();
    signUpPage.preencherSurname();
    signUpPage.preencherEpost();
    signUpPage.preencherMobile();
    signUpPage.preencherUsernameDefault();
    signUpPage.preencherPasswordDefault();
    signUpPage.preencherConfirmPasswordDefault();
    signUpPage.clickBtnSubmit();

    //validação
    signUpPage.usernameExistsMessage();
  })
})