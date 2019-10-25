import { setLocalList, getLocalList } from "../utils/localStorage";

export default function saved() {
  $(".saveChar").on("click", function() {
    let eye_color = $(this)
      .parent()
      .prev()
      .text();

    let mass = $(this)
      .parent()
      .prev()
      .prev()
      .text();

    let height = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .text();

    let gender = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .text();

    let name = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .text();

    let position = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .text();

    var character = {
      id: position,
      name: name,
      gender: gender,
      height: height,
      mass: mass,
      eye_color: eye_color
    };

    if (getLocalList("charactersRecived")) {
      var listSaveChar = getLocalList("charactersRecived");
      listSaveChar.push(character);
    } else {
      var listSaveChar = [];
      listSaveChar.push(character);
    }

    setLocalList("charactersRecived", listSaveChar);
    $(this)
      .parent()
      .parent()
      .hide();
  });
}
