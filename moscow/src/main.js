import "./assets/styles/main.css";

import header from "./components/header.js";
import footer from "./components/footer.js";
import transport from "./components/transport.js";
import steps from "./components/steps.js";
import aboutCompany from "./components/about-company.js";
import buttons from "./components/buttons.js";
import inputs from "./components/inputs.js";
import modals from "./components/modals.js";
import forms from "./components/forms.js";

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  header();
  footer();
  transport();
  steps();
  aboutCompany();
  buttons();
  modals();
  inputs();
  forms();
});
