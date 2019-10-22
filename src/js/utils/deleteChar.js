import { getLocalList } from "./localStorage";
export default function deleteChar() {
  $(".deleteChar").on("click", function() {
    console.log("bien, hiciste click");
    var listSaveChar = getLocalList("charactersRecived");
    var charLocal = listSaveChar.id;
    console.log(charLocal);
    for (let index = 0; index < listSaveChar.length; index++) {
      const listChar = listSaveChar[index];
      console.log(listChar);

      var rowChar = listChar.id;
      console.log(rowChar);

      if (rowChar == charLocal) {
        listChar.splice(index,1)
        setLocalList('charactersRecived', listSaveChar)
      }
    }
  });
}
