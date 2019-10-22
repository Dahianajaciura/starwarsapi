export default function traduced(character) {
  // traducir el color de ojos
  let eye_color = character.eye_color;

  switch (eye_color) {
    case "blue":
      character.eye_color = "azul";
      break;
    case "yellow":
      character.eye_color = "amarillo";
      break;
    case "red":
      character.eye_color = "rojo";
      break;
    case "brown":
      character.eye_color = "marron";
      break;
    case "blue-gray":
      character.eye_color = "azul grisaceo";
      break;
    case "black":
      character.eye_color = "negro";
      break;
    case "orange":
      character.eye_color = "naranja";
      break;
    case "hazel":
      character.eye_color = "avellana";
      break;
    case "pink":
      character.eye_color = "rosa";
      break;
    case "unknown":
      character.eye_color = "indefinido";
      break;
    case "red, blue":
      character.eye_color = "rojo azulado";
      break;
    case "gold":
      character.eye_color = "dorado";
      break;
    case "green, yellow":
      character.eye_color = "verde amarillento";
      break;
    case "white":
      character.eye_color = "blanco";
      break;
    case "dark":
      character.eye_color = "oscuro";
    default:
      break;
  }

  // traducir el peso

  let mass = character.mass;
  switch (mass) {
    case "unknown":
      character.mass = "indefinido";
      break;
    default:
      character.mass = character.mass + " kg";
      break;
  }

  // traducir la altura
  let height = character.height;
  switch (height) {
    case "unknown":
      character.height = "indefinido";

    default:
      character.height = character.height + " cm";
  }

  // traducir el sexo

  let gender = character.gender;
  switch (gender) {
    case "female":
      character.gender = "femenino";
      break;
    case "male":
      character.gender = "masculino";
      break;
    case "n/a":
      character.gender = "indefinido";
      break;
    case "hermaphrodite":
      character.gender = "hermafrodita";
  }
}
