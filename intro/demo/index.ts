import { customChecker } from "./custom-checker";

// positive tests
customChecker('a', 'utomation', 'automation');
customChecker('st', 'udent', 'student');
customChecker('tm', 's', 'tms');

// negative tests
customChecker('at', '4', 'at');
customChecker('ty', '[]', 'NaN');
customChecker('g', '{}', 'NaN');