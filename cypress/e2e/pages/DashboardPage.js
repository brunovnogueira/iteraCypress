import Utils from "../utils/utils";
const utils = new Utils;

import DashboardElements from "../elements/DashboardElements";
const dashboardElements = new DashboardElements;

export default class DashboardPage{
  validarLogin(){
    utils.validarText(dashboardElements.welcomeMessage, "Welcome userTeste123");
  }
}