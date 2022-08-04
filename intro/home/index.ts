import { customChecker } from './custom-checker';

// positive checks
customChecker(560, 610, '+', 1170);
customChecker(-100, 16, '+', -84);
customChecker(201.4, 26.5, '+', 227.9);
customChecker(45, -17, '-', 62);
customChecker(-1005, -623, '-', -382);
customChecker(-5, -16, '*', 80);
customChecker(569, 0, '^', 1);

// negative checks
customChecker(18, 26, '+', 36);
customChecker(-9, 7, '+', 16);
customChecker(35, 19, '-', 54);
customChecker(-69, -13, '-', -82);
customChecker(3, 9, '*', 24);
customChecker(163, 25, '/', 16);
customChecker(12, 6, '^', 72);
