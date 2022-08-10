import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage";
const dashboardPage = new DashboardPage;

describe('Login com sucesso', () => {
  it('passes', () => {
    loginPage.login();

    //validação
    dashboardPage.validarLogin();
  })
})

describe('Login sem senha', () => {
  it('passes', () => {
    loginPage.loginSemSenha();

    //validação
    loginPage.validarCampoSenha();
  })
})

describe('Login campo invalido', () => {
  it('passes', () => {
    loginPage.loginCampoInvalido();

    //validação
    loginPage.validarCredenciais();
  })
})