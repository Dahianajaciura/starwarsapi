import {
  getData2,
  showError,
  showResults
} from "../controllers/peopleController";

export default function showMore(_peopleData) {
  $("#seeMore")
    .off()
    .on("click", function() {
      getData2(_peopleData.next, showResults, showError);
    });
}
