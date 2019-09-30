const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr1 = Object.entries(MORSE_TABLE);
    let arr2 = [];
    let arr3 = [];
    let result = "";

	for (i = 0; i < arr1.length; i++) {

    arr2[i] = "";
    arr3[i]= arr1[i][1];

    for (j = 0; j < arr1[i][0].length; j++) {
        if (arr1[i][0].charAt(j) === ".") {
            arr2[i] = arr2[i].concat("10");
        } 
        if (arr1[i][0].charAt(j) === "-") {
            arr2[i] = arr2[i].concat("11");
        }
    }

        if (arr2[i].length < 10) {
           arr2[i] = arr2[i].padStart(10, "0");
       }
    }

    arr2[arr2.length] = "**********";
    arr3[arr3.length] = " ";

	for (g = 0; g < expr.length; g += 10) {
        result = result.concat(arr3[arr2.indexOf(expr.slice(g, g + 10))]);
    }
    return result;   
}

module.exports = {
    decode
}