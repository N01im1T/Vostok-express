import './assets/styles/main.css';
import '../public/en/index.html';
import '../public/ru/index.html';

import { initHeader } from './components/header.js';
import { initFooter } from './components/footer.js';
import { initTransport } from './components/transport.js';
import { initCalculator } from './components/calculator.js';
import { initSteps } from './components/steps.js';
import { initButtons } from './components/buttons.js';
import { initModals } from './components/modals.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initFooter();
    initTransport();
    initCalculator();
    initSteps();
    initModals();
    initButtons();
});