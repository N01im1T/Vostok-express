import header from './components/header.js';
import footer from './components/footer.js';
import transport from './components/transport.js';
import calculator from './components/calculator.js';
import steps from './components/steps.js';
import buttons from './components/buttons.js';
import modals from './components/modals.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    footer();
    transport();
    calculator();
    steps();
    modals();
    buttons();
});