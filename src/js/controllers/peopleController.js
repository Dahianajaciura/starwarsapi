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
      console.log(id);

      if (!buscar) {
        console.log("aca estaba!");

        var elementTraduced = results[index];
        traduced(elementTraduced);
        console.log(elementTraduced.eye_color);

        let position = $("<td>").text(results[index].url.slice(28, -1));
        let name = $("<td>").text(results[index].name);
        let gender = $("<td>").text(results[index].gender);
        let height = $("<td>").text(results[index].height);
        let mass = $("<td>").text(results[index].mass);
        let eye_color = $("<td>").text(results[index].eye_color);
        let buttonSave = $("<td>").append(
          $("<button>")
            .text("guardar")
            .attr("class", "saveChar")
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

      // for (var i = 0; i < results.length; i++) {
      //   var elementTraduced = results[i];
      //   traduced(elementTraduced);
      //   console.log(elementTraduced.eye_color);

      //   let position = $("<td>").text(results[i].url.slice(28, -1));
      //   let name = $("<td>").text(results[i].name);
      //   let gender = $("<td>").text(results[i].gender);
      //   let height = $("<td>").text(results[i].height);
      //   let mass = $("<td>").text(results[i].mass);
      //   let eye_color = $("<td>").text(results[i].eye_color);
      //   let buttonSave = $("<td>").append(
      //     $("<button>")
      //       .text("guardar")
      //       .attr("class", "saveChar")
      //   );

      //   let file = $("<tr>").append(
      //     position,
      //     name,
      //     gender,
      //     height,
      //     mass,
      //     eye_color,
      //     buttonSave
      //   );

      //   $("#tableBody").append(file);
    }
  }
  saved();
  showMore(_peopleData);
}

export function showError(_error) {
  console.log(_error);
}

function peopleController() {
  console.log("Se cargo la people");
  getData2("https://swapi.co/api/people", showResults, showError);
}

export default peopleController;
