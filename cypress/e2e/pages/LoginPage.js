import Utils from "../utils/utils";
const utils = new Utils;

import LoginElements from "../elements/LoginElements";
const loginElements = new LoginElements;

export default class LoginPage{
  clickBtnLogin(){
    utils.click(loginElements.btnLogin);
  }
}