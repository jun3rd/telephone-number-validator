"use strict";

/* Return true if the string (passed-in) is in valid US phone number format. */

let telephoneCheckTEST = (str) => {
    if ( !str ) {
        console.log("555-555-5555");
        telephoneCheck("555-555-5555"); // should return a boolean.
        console.log("1 555-555-5555");
        telephoneCheck("1 555-555-5555"); // should return true.
        console.log("1 (555) 555-5555");
        telephoneCheck("1 (555) 555-5555"); // should return true.
        console.log("5555555555");
        telephoneCheck("5555555555"); // should return true.
        console.log("555-555-5555");
        telephoneCheck("555-555-5555"); // should return true.
        console.log("(555)555-5555");
        telephoneCheck("(555)555-5555"); // should return true.
        console.log("1(555)555-5555");
        telephoneCheck("1(555)555-5555"); // should return true.
        console.log("555-5555");
        telephoneCheck("555-5555"); // should return false.
        console.log("5555555");
        telephoneCheck("5555555"); // should return false.
        console.log("1 555)555-5555");
        telephoneCheck("1 555)555-5555"); // should return false.
        console.log("1 555 555 5555");
        telephoneCheck("1 555 555 5555"); // should return true.
        console.log("1 456 789 4444");
        telephoneCheck("1 456 789 4444"); // should return true.
        console.log("123**&!!asdf#");
        telephoneCheck("123**&!!asdf#"); // should return false.
        console.log("55555555");
        telephoneCheck("55555555"); // should return false.
        console.log("(6054756961)");
        telephoneCheck("(6054756961)"); // should return false
        console.log("2 (757) 622-7382");
        telephoneCheck("2 (757) 622-7382"); // should return false.
        console.log("0 (757) 622-7382");
        telephoneCheck("0 (757) 622-7382"); // should return false.
        console.log("-1 (757) 622-7382");
        telephoneCheck("-1 (757) 622-7382"); // should return false
        console.log("2 757 622-7382");
        telephoneCheck("2 757 622-7382"); // should return false.
        console.log("10 (757) 622-7382");
        telephoneCheck("10 (757) 622-7382"); // should return false.
        console.log("27576227382");
        telephoneCheck("27576227382"); // should return false.
        console.log("(275)76227382");
        telephoneCheck("(275)76227382"); // should return false.
        console.log("2(757)6227382");
        telephoneCheck("2(757)6227382"); // should return false.
        console.log("2(757)622-7382");
        telephoneCheck("2(757)622-7382"); // should return false.
        console.log("555)-555-5555");
        telephoneCheck("555)-555-5555"); // should return false.
        console.log("(555-555-5555");
        telephoneCheck("(555-555-5555"); // should return false.
        console.log("(555)5(55?)-5555");
        telephoneCheck("(555)5(55?)-5555"); // should return false.
    } else {
        telephoneCheck(str); // should return true.
    }
}

// START: submit to FreeCodeCamp
let firstCharacterOf = (phoneNumber) => {
    let phoneNumberArray = phoneNumber.split('');
    let firstCharacter = phoneNumberArray[0];
    // console.log('processed: 1st character');
    return firstCharacter;
}

let isFirstCharacterNumberOf = (str) => {
    let strArray = str.split('');
    // console.log('first character: ' + strArray[0]);
    if (Number.isInteger( parseInt(strArray[0]) ) === true) {
        // console.log('FIRST character number TRUE');
        return true;
    } else if (strArray[0] === '(') {
        return '(';
    } else {
        // console.log('FIRST character number FALSE');
        return false;
    }
}

let isFirstCharacter = (one) => {
    let answer = (one === '1') ? true : false;
    // console.log('1st character:' + answer);
    return answer;
}

let removeDashes = (str) => {
    let numberArray = str.split('');
    numberArray = numberArray.filter( (element) => {
        return element !== '-';
    });
    return numberArray;
}

let checkForMatchingParenthesis = (numberArray) => {
    if ( (numberArray.indexOf('(') >= 0) && (numberArray.indexOf(')') >= 0) ) {
        // console.log("parenthesis MATCH");
        return true;
    } else {
        // console.log("NO parenthesis match");
        return false;
    }
}

let checkForParenthesis = (numberArray) => {
    if ( !(numberArray.indexOf('(') >= 0) && !(numberArray.indexOf(')') >= 0) ) {
        // console.log('no parenthesis at all');
        return true;
    } if ( (numberArray.indexOf('(') >= 0) && (numberArray.indexOf(')') === ((numberArray.indexOf('(') + 4)) ) ) {
        // console.log('have both parenthesis AND 2nd parenthesis in correction position');
        return true;
    } else if ( (numberArray.indexOf('(') >= 0) && !(numberArray.indexOf(')') >= 0) ) {
        // console.log('missing )');
        return false;
    } else if ( !(numberArray.indexOf('(') >= 0) && (numberArray.indexOf(')') >= 0) ) {
        // console.log('missing (');
        return false;
    } else {
        // console.log("NO parenthesis exists");
        return false;
    }
}

let findMatchingParentheses = (numberArray) => {
    let parenthesis = checkForParenthesis(numberArray);
    if (parenthesis === true) {
        let matchingParenthesis = checkForMatchingParenthesis(numberArray);
    }
    return parenthesis;
}

let removeParentheses = (str) => {
    let numberArray = str.split('');
    if ( findMatchingParentheses(numberArray) === false ) {
        return false;
    };
    numberArray = numberArray.filter( (element) => {
        if ( (element !== '(') && (element !== ')') ) {
            //console.log (element);
            return element;
        }
    });
    return numberArray;    
}

let removeSpaces = (str) => {
    let numberArray = str.split('');
    numberArray = numberArray.filter( (element) => {
        return ( (element !== ' ') );
    });
    return numberArray;
}

let keepNumbersOnly = (str) => {
    let firstCharacterNumber = isFirstCharacterNumberOf(str);
    // console.log('firstCharacterNumber: ' + firstCharacter);
    if (firstCharacterNumber === true) {
        let telephoneNumber = removeDashes(str);
        telephoneNumber = telephoneNumber.join('');
        // console.log('nubmer after removed dashes: ' + telephoneNumber);
        telephoneNumber = removeSpaces(telephoneNumber);
        telephoneNumber = telephoneNumber.join('');
        // console.log('nubmer after removed spaces: ' + telephoneNumber);
        telephoneNumber = removeParentheses(telephoneNumber);
        if (telephoneNumber !== false) {
            telephoneNumber = telephoneNumber.join('');
        }
        // console.log('keepNumbersOnly');
        // console.log(telephoneNumber);
        return telephoneNumber;
    } else if (firstCharacterNumber === "(") {
        let telephoneNumber = removeDashes(str);
        telephoneNumber = telephoneNumber.join('');
        // console.log('nubmer after removed dashes: ' + telephoneNumber);
        telephoneNumber = removeSpaces(telephoneNumber);
        telephoneNumber = telephoneNumber.join('');
        // console.log('nubmer after removed spaces: ' + telephoneNumber);
        telephoneNumber = removeParentheses(telephoneNumber);
        if (telephoneNumber !== false) {
            telephoneNumber = telephoneNumber.join('');
        }
        return telephoneNumber;
    } else {
        return false;
    }
}

function telephoneCheck(str) {
    let phoneNumber = keepNumbersOnly(str);
    // console.log('modified phone number: ' + phoneNumber);
    // console.log("length: " + phoneNumber.length);
    if (phoneNumber.length === 10) {
        // console.log("phone length: 10");
        // console.log("true");
        // console.log('---------------------');
        // return true;
    } else if (phoneNumber.length === 11) {
        // console.log("phone length: 11");
        let one = firstCharacterOf(phoneNumber);
        if ( isFirstCharacter(one) === true ) {
            // console.log("true");
            // console.log('---------------------');
            // return true;
        } else {
            // console.log("false");
            // console.log('---------------------');
            // return false;
        };
    } else {
        // console.log("error: " + phoneNumber);
        // console.log("FINAL false");
        // console.log('---------------------');
        return false;
    }
}

telephoneCheck("555-555-5555");
// END: submit to FreeCodeCamp

// telephoneCheckTEST();

