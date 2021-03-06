// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
let sumNum = 0;

const validateCred = cardNumber => {
    let newArray = [];
    for (var i = 0; i < cardNumber.length; i++) {
        sumNum = 0;
        for (var j = cardNumber[i].length-1; j >= 0; j--){
            if (j % 2 === 1){     
                if ((cardNumber[i][j] * 2) > 9){
                    sumNum = sumNum + ((cardNumber[i][j] * 2)-10)
                }
                else {
                sumNum = sumNum + (cardNumber[i][j] * 2);
                }
            }
            else {
                sumNum = sumNum + cardNumber[i][j];
            }
        }
        newArray.push(sumNum);
    }
    return newArray
}

const findInvalidCards = (cards) => {
    let invalidCardArray = [];
    let validationArray = validateCred(cards);
    console.log(validationArray);      ////////////------------>  This can be removed later
    for (let k = 0; k < validationArray.length; k++) {
        if(validationArray[k] % 10 !== 0){
            invalidCardArray.push(cards[k]);
        }
    }
    console.log(invalidCardArray)
    return invalidCardArray;
}

findInvalidCards(batch);

const idInvalidCardCompanies = (theCards) => {
    let companiesArray = [];
    let finalArray = [];
    let falseArray = findInvalidCards(theCards);
    for (let x = 0; x < falseArray.length; x++){
        switch(falseArray[x][0]){
            case 3:
                companiesArray.push('Amex (American Express)');
                break;
            case 4:
                companiesArray.push('Visa');
                break;
            case 5:
                companiesArray.push('Mastercard');
                break;
            case 6:
                companiesArray.push('Discover');
                break;
            default:
                companiesArray.push('Company not found');
        }
    }
    //console.log(companiesArray)
    finalArray = [...new Set(companiesArray)];
    console.log(finalArray);
}
idInvalidCardCompanies(batch);