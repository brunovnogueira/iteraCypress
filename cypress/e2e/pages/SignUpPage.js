import Utils from "../utils/utils";
const utils = new Utils;

import SignUpElements from "../elements/SignUpElements";
const signUpElements = new SignUpElements;

var Chance = require('chance');
var chance = new Chance();

let name = chance.first();
let surname = chance.last();
let ePost = chance.zip();
let mobile = chance.phone();
let username = chance.word();
let password = chance.word();
let usernameDefault = "userTeste123";
let passwordDefault = "123";

export default class SignUpPage{
  
  preencherFirstName(){
    utils.preencherInput(signUpElements.firstName,name);
  }

  preencherSurname(){
    utils.preencherInput(signUpElements.surname,surname);
  }

  preencherEpost(){
    utils.preencherInput(signUpElements.firstName,ePost);
  }

  preencherMobile(){
    utils.preencherInput(signUpElements.mobile,mobile);
  }

  preencherUsername(){
    utils.preencherInput(signUpElements.username,username);
  }

  preencherPassword(){
    utils.preencherInput(signUpElements.password,password);
  }

  preencherConfirmPassword(){
    utils.preencherInput(signUpElements.confirmPassword,password);
  }

  preencherUsernameDefault(){
    utils.preencherInput(signUpElements.username,usernameDefault);
  }

  preencherPasswordDefault(){
    utils.preencherInput(signUpElements.password,passwordDefault);
  }

  preencherConfirmPasswordDefault(){
    utils.preencherInput(signUpElements.confirmPassword,passwordDefault);
  }

  clickBtnSubmit(){
    utils.click(signUpElements.btnSubmit);
  }

  registrationSuccessful(){
    utils.validarText(signUpElements.successfull,"Registration Successful");
  }
}