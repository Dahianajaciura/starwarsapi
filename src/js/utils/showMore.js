import { getData2, showError, showResults } from "../controllers/peopleController";

export default function showMore(_peopleData) {
  $("#seeMore").off().on("click", function() {
    console.log(_peopleData.next);
    getData2(_peopleData.next, showResults, showError);
  });
}
