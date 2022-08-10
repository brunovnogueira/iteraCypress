import Utils from "../utils/utils";
const utils = new Utils;

import DashboardElements from "../elements/DashboardElements";
const dashboardElements = new DashboardElements;

export default class DashboardPage{
  validarLogin(){
    utils.validarText(dashboardElements.welcomeMessage, "Welcome userTeste123");
  }

  clicarCreateNewBtn(){
    utils.click(dashboardElements.createNewBtn);
  }

  preencherSearch(name){
    utils.preencherInput(dashboardElements.search,name)
  }

  clicarBtnSearch(){
    utils.click(dashboardElements.searchBtn);
  }

  clicarBtnEdit(){
    utils.click(dashboardElements.editBtn);
  }

  validarName(name){
    utils.validarText(dashboardElements.nameTable,name);
  }

  validarNoMatch(){
    utils.validarText(dashboardElements.noMatch,'No Match');
  }

  clicarBtnDelete(){
    utils.click(dashboardElements.deleteBtn);
  }
}