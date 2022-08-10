import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage";
const dashboardPage = new DashboardPage;

describe('Pesquisar cliente com sucesso', () => {
  it('passes', () => {
    loginPage.login();
    dashboardPage.preencherSearch('Bruno');
    dashboardPage.clicarBtnSearch();
    
    //Validação
    dashboardPage.validarName('Bruno');
  })
})
