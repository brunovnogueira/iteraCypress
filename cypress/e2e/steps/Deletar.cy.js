import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage";
const dashboardPage = new DashboardPage;

import CreateCustomerPage from "../pages/CreateCustomerPage";
const createCustomerPage = new CreateCustomerPage;

import DeletePage from "../pages/DeletePage";
const deletePage = new DeletePage;

describe('Deletar com sucesso', () => {
  it('passes', () => {
    loginPage.login();
    dashboardPage.clicarCreateNewBtn();
    createCustomerPage.create();
    dashboardPage.clicarBtnDelete();
    deletePage.clicarBtnDelete();
    createCustomerPage.pesquisarCriado();

    //validação
    createCustomerPage.validarNoMatch();
  })
})