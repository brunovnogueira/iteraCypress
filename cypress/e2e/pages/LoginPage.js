import Utils from "../utils/utils";
const utils = new Utils;

import HomePage from "../pages/HomePage";
const homePage = new HomePage;

import SignUpPage from "../pages/SignUpPage";
const signUpPage = new SignUpPage;

import LoginElements from "../elements/LoginElements";
const loginElements = new LoginElements;

export default class LoginPage{
  clickBtnLogin(){
    utils.click(loginElements.btnLogin);
  }

  login(){
    homePage.abrirNavegador();
    homePage.clicarLogin();
    signUpPage.preencherUsernameDefault();
    signUpPage.preencherPasswordDefault();
    this.clickBtnLogin();
  }

  loginSemSenha(){
    homePage.abrirNavegador();
    homePage.clicarLogin();
    signUpPage.preencherUsernameDefault();
    this.clickBtnLogin();
  }

  loginCampoInvalido(){
    homePage.abrirNavegador();
    homePage.clicarLogin();
    signUpPage.preencherUsernameDefault();
    signUpPage.preencherPassword();
    this.clickBtnLogin();
  }

  validarCampoSenha(){
    utils.validarText(loginElements.enterPassword,'Please enter password');
  }

  validarCredenciais(){
    utils.validarText(loginElements.wrongUsernamePassword,'Wrong username or password');
  }
}