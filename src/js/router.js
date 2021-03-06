import crossroads from "crossroads";
import homeController from "./controllers/homeController.js";
import peopleController from "./controllers/peopleController.js";

import contactController from "./controllers/contactController.js";
import showSaved from "./utils/showSaved.js";

function router() {
  crossroads.addRoute("", function() {
    console.log("Home page");
    $("#root").load("./partials/home.html", homeController);
  });

  crossroads.addRoute("#/people", function() {
    console.log("People");
    $("#root").load("./partials/people.html", peopleController);
  });

  crossroads.addRoute("#/local-storage", function() {
    console.log("localStorage");
    $("#root").load("./partials/local-storage.html", showSaved);
  });

  crossroads.addRoute("#/contact", function() {
    console.log("contact");
    $("#root").load("./partials/contact.html", contactController);
  });

  // En cada cambio del # va a verificar las rutas
  $(window).on("hashchange", function() {
    crossroads.parse(window.location.hash);
  });

  crossroads.parse(window.location.hash);
}

export default router;
