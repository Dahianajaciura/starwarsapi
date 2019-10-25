import { getLocalList, setLocalList } from "./localStorage";
export default function deleteChar() {
  $(".deleteChar").on("click", function() {
    var listSaveChar = getLocalList("charactersRecived");

    let position = $(this)
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .text();

    for (let index = 0; index < listSaveChar.length; index++) {
      var charLocal = listSaveChar[index].id;

      if (charLocal == position) {
        listSaveChar.splice(index, 1);

        setLocalList("charactersRecived", listSaveChar);
        $(this)
          .parent()
          .parent()
          .hide();
      }
    }
  });
}
