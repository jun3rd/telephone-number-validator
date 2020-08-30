"use strict";

/* Return true if the string (passed-in) valid US phone number format. */

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
        // console.log("1 555)555-5555");
        // telephoneCheck("1 555)555-5555"); // should return false.
        console.log("1 555 555 5555");
        telephoneCheck("1 555 555 5555"); // should return true.
        console.log("1 456 789 4444");
        telephoneCheck("1 456 789 4444"); // should return true.
        console.log("123**&!!asdf#");
        telephoneCheck("123**&!!asdf#"); // should return false.
        console.log("55555555");
        telephoneCheck("55555555"); // should return false.
        // console.log("(6054756961)");
        // telephoneCheck("(6054756961)"); // should return false
        console.log("2 (757) 622-7382");
        telephoneCheck("2 (757) 622-7382"); // should return false.
        console.log("0 (757) 622-7382");
        telephoneCheck("0 (757) 622-7382"); // should return false.
        // console.log("-1 (757) 622-7382");
        // telephoneCheck("-1 (757) 622-7382"); // should return false
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
        // console.log("555)-555-5555");
        // telephoneCheck("555)-555-5555"); // should return false.
        // console.log("(555-555-5555");
        // telephoneCheck("(555-555-5555"); // should return false.
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
    return firstCharacter;
}

let isFirstCharacter = (one) => {
    let answer = (one === '1') ? true : false;
    console.log('1st character:' + answer);
    return answer;
}

let removeDashes = (str) => {
    let numberArray = str.split('');
    numberArray = numberArray.filter( (element) => {
        return element !== '-';
    });
    return numberArray;
}

let removeParentheses = (str) => {
    let numberArray = str.split('');
    numberArray = numberArray.filter( (element) => {
        if ( (element !== '(') && (element !== ')') ) {
            console.log (element);
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
    let telephoneNumber = removeDashes(str);
    telephoneNumber = telephoneNumber.join('');
    telephoneNumber = removeSpaces(telephoneNumber);
    telephoneNumber = telephoneNumber.join('');
    telephoneNumber = removeParentheses(telephoneNumber);
    telephoneNumber = telephoneNumber.join('');
    return telephoneNumber;
}

function telephoneCheck(str) {
    let phoneNumber = keepNumbersOnly(str);
    console.log("length: " + phoneNumber.length);
    if (phoneNumber.length === 10) {
        console.log("true");
        console.log('---------------------');
        return true;
    } else if (phoneNumber.length === 11) {
        let one = firstCharacterOf(phoneNumber);
        if ( isFirstCharacter(one) === true ) {
            console.log("true");
            console.log('---------------------');
            return true;
        } else {
            console.log("false");
            console.log('---------------------');
            return false;
        };
    } else {
        console.log("error: " + phoneNumber);
        console.log("false");
        console.log('---------------------');
        return false;
    }
}

telephoneCheck("555-555-5555");
// END: submit to FreeCodeCamp

telephoneCheckTEST();

