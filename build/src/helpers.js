"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = void 0;
exports.firstLetterUppercase = firstLetterUppercase;
exports.lowerCase = lowerCase;
exports.isEmail = isEmail;
exports.isDataURL = isDataURL;
function firstLetterUppercase(str) {
    var valueString = str.toLowerCase();
    return valueString
        .split(' ')
        .map(function (value) {
        return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1).toLowerCase());
    })
        .join(' ');
}
function lowerCase(str) {
    return str.toLowerCase();
}
var toUpperCase = function (str) {
    return str ? str.toUpperCase() : str;
};
exports.toUpperCase = toUpperCase;
function isEmail(email) {
    var regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    return regexExp.test(email);
}
function isDataURL(value) {
    var dataUrlRegex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;
    return dataUrlRegex.test(value);
}
//# sourceMappingURL=helpers.js.map