import HomePage from "../pages/HomePage";
const homePage = new HomePage;

import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage";
const dashboardPage = new DashboardPage;

import CreateCustomerPage from "../pages/CreateCustomerPage"
const createCustomerPage = new CreateCustomerPage;

describe('Adicionar cliente com sucesso', () => {
  it('passes', () => {
    loginPage.login();
    dashboardPage.clicarCreateNewBtn();
    createCustomerPage.create();
    
    //Validação
    createCustomerPage.validarName();
  })
})
