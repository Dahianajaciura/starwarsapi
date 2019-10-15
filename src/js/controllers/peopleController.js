

function getData2(_url, _showResults, _showError) {
  $.ajax(_url)
    .done(function (data) {
      _showResults(data)
    })
    .fail(function (error) {
      _showError(error)
    })
}

function showResults (_peopleData) {
  if (_peopleData.results) {
    var results = _peopleData.results;
    
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].name);
      $("#tableBody").append("<tr><td>"+results[0]+"</td><td>"+results[i].name+"</td><td>"+results[i].gender+"</td><td>"+results[i].height+'cm'+ "</td><td>"+results[i].mass+'kg'+"<td>"+results[i].eye_color+ "<td> <button>" +'Guardar'+ " </td> </button> </tr>");
   
    }
  }

  if (_peopleData.next) {
    getData2(_peopleData.next, showResults, showError);
  }
}

function showError (_error) {
  console.log(_error);
}

function peopleController(){
    console.log('Se cargo la people')
    getData2('https:/swapi.co/api/people/', showResults, showError)
  }

 export default peopleController