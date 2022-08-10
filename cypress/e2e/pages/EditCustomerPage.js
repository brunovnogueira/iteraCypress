import Utils from "../utils/utils";
const utils = new Utils;

import EditCustomerElements from "../elements/EditCustomerElements";
const editCustomerElements = new EditCustomerElements;

import DashboardPage from "./DashboardPage";
const dashboardPage = new DashboardPage;

var Chance = require('chance');
var chance = new Chance();

let name = chance.first();
let company = chance.company();
let address = chance.address();
let city = chance.city();
let phone = chance.phone();
let email = chance.email();

export default class EditCustomerPage{
  preencherName(){
    utils.preencherInput(editCustomerElements.name,name);
  }

  preencherCompany(){
    utils.preencherInput(editCustomerElements.company,company);
  }

  preencherAddress(){
    utils.preencherInput(editCustomerElements.address,address);
  }

  preencherCity(){
    utils.preencherInput(editCustomerElements.city,city);
  }
  
  preencherPhone(){
    utils.preencherInput(editCustomerElements.phone,phone);
  }

  preencherEmail(){
    utils.preencherInput(editCustomerElements.email,email);
  }

  clicarBtnSave(){
    utils.click(editCustomerElements.saveBtn);
  }

  validarName(){
    dashboardPage.validarName(name);
  }

  edit(){
    this.preencherName();
    this.preencherCompany();
    this.preencherAddress();
    this.preencherCity();
    this.preencherPhone();
    this.preencherEmail();
    this.clicarBtnSave();
    dashboardPage.preencherSearch(name);
    dashboardPage.clicarBtnSearch();
  }
}