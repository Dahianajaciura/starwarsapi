import { getLocalList } from "./localStorage";
import deleteChar from "./deleteChar";

export default function showSaved (){
    
    let list = getLocalList('charactersRecived')
    for (let index = 0; index < list.length; index++) {
        const characterObject = list[index];
        console.log(characterObject)

        let position = $("<td>").text(characterObject.id);
        let name = $("<td>").text(characterObject.name);
        let gender = $("<td>").text(characterObject.gender);
        let height = $("<td>").text(characterObject.height);
        let mass = $("<td>").text(characterObject.mass);
        let eye_color = $("<td>").text(characterObject.eye_color);
        let buttonSave = $("<td>").append(
          $("<button>")
            .text("eliminar")
            .attr("class", 'deleteChar')
        );
  
        let file = $("<tr>").append(
          position,
          name,
          gender,
          height,
          mass,
          eye_color,
          buttonSave
        );
  
        $("#tableBody").append(file);
    }
    deleteChar()
}

showSaved()
