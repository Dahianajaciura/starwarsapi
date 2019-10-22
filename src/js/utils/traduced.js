export default function traduced(character) {
 
 
// traducir el color de ojos
  let eye_color = character.eye_color;

  switch (eye_color) {
    case "blue":
      return (character.eye_color = "azul");

    case "yellow":
      return (character.eye_color = "amarillo");

    case "red":
      return (character.eye_color = "rojo");

    case "brown":
      return (character.eye_color = "marron");

    case "blue-gray":
      return (character.eye_color = "azul grisaceo");

    case "black":
      return (character.eye_color = "negro");

    case "orange":
      return (character.eye_color = "naranja");

    case "hazel":
      return (character.eye_color = "avellana");

    case "pink":
      return (character.eye_color = "rosa");

    case "unknown":
      return (character.eye_color = "indefinido");

    case "red, blue":
      return (character.eye_color = "rojo azulado");

    case "gold":
      return (character.eye_color = "dorado");

    case "green, yellow":
      return (character.eye_color = "verde amarillento");

    case "white":
      return (character.eye_color = "blanco");

    case "dark":
      return (character.eye_color = "oscuro");
    default:
      break;
  }
 
// traducir el peso

/* let mass = character.mass;
  switch (mass) {
    case "unknown":
      return (character.mass = "indefinido");

    default:
      character.mass = "kg";
      break;
  }

  // traducir la altura
let height = character.height;
  switch (height) {
    case "unknown":
      return (height = "indefinido");

    default:
      height = "cm";
  }

// traducir el sexo

let gender = character.gender;
  switch (gender) {
    case "female":
      return (gender = "femenino");

    case "male":
      return (gender = "masculino");

    case "n/a":
      return (gender = "indefinido");

    case "hermaphrodite":
      return (gender = "hermafrodita");
  }  */
}
