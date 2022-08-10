import Utils from "../utils/utils";
const utils = new Utils;

import HomeElements from "../elements/HomeElements";
const homeElements = new HomeElements;

import SignUpPage from "./SignUpPage";
const signUpPage = new SignUpPage;

export default class HomePage{
  abrirNavegador(){
    utils.navegar(homeElements.url);
  }

  clicarSignUp(){
    utils.click(homeElements.btnSignUp);
  }

  clicarLogin(){
    utils.click(homeElements.btnLogin);
  }
}