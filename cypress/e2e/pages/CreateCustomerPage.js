import Utils from "../utils/utils";
const utils = new Utils;

import CreateCustomerElements from "../elements/CreateCustomerElements";
const createCustomerElements = new CreateCustomerElements;

import DashboardPage from "./DashboardPage";
const dashboardPage = new DashboardPage;

var Chance = require('chance');
var chance = new Chance();

let name = chance.first();
let namePadrao = "Alberto Alberto";
let company = chance.company();
let address = chance.address();
let city = chance.city();
let phone = chance.phone();
let email = chance.email();

export default class CreateCustomerPage{
  preencherName(){
    utils.preencherInput(createCustomerElements.name,name);
  }

  preencherNamePadrao(){
    utils.preencherInput(createCustomerElements.name,name);
  }

  preencherCompany(){
    utils.preencherInput(createCustomerElements.company,company);
  }

  preencherAddress(){
    utils.preencherInput(createCustomerElements.address,address);
  }

  preencherCity(){
    utils.preencherInput(createCustomerElements.city,city);
  }
  
  preencherPhone(){
    utils.preencherInput(createCustomerElements.phone,phone);
  }

  preencherEmail(){
    utils.preencherInput(createCustomerElements.email,email);
  }

  clicarBtnCreate(){
    utils.click(createCustomerElements.btnCreate);
  }

  validarName(){
    dashboardPage.validarName(name);
  }

  validarNoMatch(){
    dashboardPage.validarNoMatch();
  }

  create(){
    this.preencherName();
    this.preencherCompany();
    this.preencherAddress();
    this.preencherCity();
    this.preencherPhone();
    this.preencherEmail();
    this.clicarBtnCreate();
    dashboardPage.preencherSearch(name);
    dashboardPage.clicarBtnSearch();
  }

  pesquisarCriado(){
    dashboardPage.preencherSearch(name);
    dashboardPage.clicarBtnSearch();
  }
}