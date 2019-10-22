import { getLocalList, setLocalList } from "./localStorage";
export default function deleteChar() {
  $(".deleteChar").on("click", function() {
    console.log("bien, hiciste click");
    var listSaveChar = getLocalList("charactersRecived");
    // console.log(charLocal);
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
    for (let index = 0; index < listSaveChar.length; index++) {
      var charLocal = listSaveChar[index].id;
      // const listChar = listSaveChar[index];

      if (charLocal == position) {
        console.log("lo encontramos");
        listSaveChar.splice(index, 1);
        console.log(index);
        setLocalList("charactersRecived", listSaveChar);
        $(this)
          .parent()
          .parent()
          .hide();
      }
    }
  });
}
