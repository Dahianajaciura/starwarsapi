import { setLocalList, getLocalList } from "../utils/localStorage";

export default function saved() {
  $(".saveChar").on("click", function() {
    let eye_color = $(this)
      .parent()
      .prev()
      .text();
    console.log(eye_color);
    let mass = $(this)
      .parent()
      .prev()
      .prev()
      .text();
    console.log(mass);
    let height = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .text();
    console.log(height);
    let gender = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .text();
    console.log(gender);
    let name = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .text();
    console.log(name);
    let position = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .text();
    console.log(position);

    var character = {
      id: position,
      name: name,
      gender: gender,
      height: height,
      mass: mass,
      eye_color: eye_color
    };

    if (getLocalList("charactersRecived")) {
      console.log("si");
      var listSaveChar = getLocalList("charactersRecived");
      listSaveChar.push(character);
    } else {
      console.log("no");
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
