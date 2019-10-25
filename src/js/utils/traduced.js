export default function traduced(character) {
  // traducir el color de ojos
  let eye_color = character.eye_color;

  switch (eye_color) {
    case "blue":
      character.eye_color = "Azul";
      break;
    case "yellow":
      character.eye_color = "Amarillo";
      break;
    case "red":
      character.eye_color = "Rojo";
      break;
    case "brown":
      character.eye_color = "Marrón";
      break;
    case "blue-gray":
      character.eye_color = "Azul grisáceo";
      break;
    case "black":
      character.eye_color = "Negro";
      break;
    case "orange":
      character.eye_color = "naranja";
      break;
    case "hazel":
      character.eye_color = "Avellana";
      break;
    case "pink":
      character.eye_color = "Rosa";
      break;
    case "unknown":
      character.eye_color = "Indefinido";
      break;
    case "red, blue":
      character.eye_color = "Rojo Azulado";
      break;
    case "gold":
      character.eye_color = "Dorado";
      break;
    case "green, yellow":
      character.eye_color = "Verde Amarillento";
      break;
    case "white":
      character.eye_color = "Blanco";
      break;
    case "dark":
      character.eye_color = "Oscuro";
    default:
      break;
  }

  // traducir el peso

  let mass = character.mass;
  switch (mass) {
    case "unknown":
      character.mass = "Indefinido";
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
      character.gender = "Femenino";
      break;
    case "male":
      character.gender = "Masculino";
      break;
    case "n/a":
      character.gender = "Indefinido";
      break;
    case "hermaphrodite":
      character.gender = "Hermafrodita";
  }
}
