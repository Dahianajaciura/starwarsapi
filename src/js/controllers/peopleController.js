import { setLocalList, getLocalList } from "../utils/localStorage";
import showMore from "../utils/showMore";
import traduced from "../utils/traduced";
import saved from "../utils/saved";
import searchChar from "../utils/searchChar";

export function getData2(_url, _showResults, _showError) {
  $.ajax(_url)
    .done(function(data) {
      _showResults(data);
    })
    .fail(function(error) {
      _showError(error);
    });
}

export function showResults(_peopleData) {
  if (_peopleData.results) {
    var results = _peopleData.results;

    for (let index = 0; index < results.length; index++) {
      const id = results[index].url.slice(28, -1);

      let buscar = searchChar(id);

      if (!buscar) {
        var elementTraduced = results[index];
        traduced(elementTraduced);

        let position = $("<td>").text(results[index].url.slice(28, -1));
        let name = $("<td>").text(results[index].name);
        let gender = $("<td>").text(results[index].gender);
        let height = $("<td>").text(results[index].height);
        let mass = $("<td>").text(results[index].mass);
        let eye_color = $("<td>").text(results[index].eye_color);
        let buttonSave = $("<td>").append(
          $("<button>")
            .text("Guardar")
            .attr("class","saveChar")
            .addClass("btn btn-success")
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
    }
  }
  saved();
  showMore(_peopleData);
}

export function showError(_error) {}

function peopleController() {
  console.log("Se cargo la people");
  getData2("https://swapi.co/api/people", showResults, showError);
}

export default peopleController;
