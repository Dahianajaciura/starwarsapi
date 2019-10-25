import { getLocalList } from "./localStorage";

export default function searchChar(_id) {
  var listSaveChar = getLocalList("charactersRecived");
  for (var i = 0; i < listSaveChar.length; i++) {
    var charSaved = listSaveChar[i].id;

    if (charSaved == _id) {
      return true;
    }
  }
}
