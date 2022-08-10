import Utils from "../utils/utils";
const utils = new Utils;

import DeleteElements from "../elements/DeleteElements";
const deleteElements = new DeleteElements;

export default class DeletePage{
  clicarBtnDelete(){
    utils.click(deleteElements.btnDelete);
  }
}