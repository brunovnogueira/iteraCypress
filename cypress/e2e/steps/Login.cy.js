import HomePage from "../pages/HomePage";
const homePage = new HomePage;

import SignUpPage from "../pages/SignUpPage";
const signUpPage = new SignUpPage;

import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage";
const dashboardPage = new DashboardPage;

describe('Login com sucesso', () => {
  it('passes', () => {
    homePage.abrirNavegador();
    homePage.clicarLogin();
    signUpPage.preencherUsernameDefault();
    signUpPage.preencherPasswordDefault();
    loginPage.clickBtnLogin();

    dashboardPage.validarLogin();
  })
})