import header from './components/header.js';
import footer from './components/footer.js';
import transport from './components/transport.js';
import calculator from './components/calculator.js';
import steps from './components/steps.js';
// import aboutCompany from './components/about-company.js';
import buttons from './components/buttons.js';
import inputs from './components/inputs.js';
import modals from './components/modals.js';

document.addEventListener('DOMContentLoaded', function() {
    header();
    footer();
    transport();
    calculator();
    steps();
    // aboutCompany();
    buttons();
    inputs();
    modals();
});