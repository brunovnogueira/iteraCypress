import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage";
const dashboardPage = new DashboardPage;

import EditCustomerPage from "../pages/EditCustomerPage"
const editCustomerPage = new EditCustomerPage;

describe('Editar cliente com sucesso', () => {
  it('passes', () => {
    loginPage.login();
    dashboardPage.clicarBtnEdit();
    editCustomerPage.edit();
    
    //Validação
    editCustomerPage.validarName();
  })
})
