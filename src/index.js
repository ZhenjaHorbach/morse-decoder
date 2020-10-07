const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
	'*': ' '
};
function dec(str) {
	let result = ''
	for (let i = 0; i < str.length; i += 2) {
		if (str.slice(i, i + 2) == '10') {
			result += '.'
		} else if (str.slice(i, i + 2) == '11') {
			result += '-'
		} else {
			result += '*';
			break;
		}
	}
	return result;
}
function decode(expr) {
	let exprArr = expr.match(/\S{1,10}/g);
	let exprRes = [];
	for (let i = 0; i < exprArr.length; i++) {
		for (let y = 0; y < exprArr[i].length; y++) {
			if (exprArr[i][y] == '0') {
				continue;
			} else {
				exprRes.push(dec(exprArr[i].slice(y)))
				break;
			}
		}
	}
	let result = exprRes.map(function (name) {
		return MORSE_TABLE[name];
	});
	return result.join('')
}
module.exports = {
	decode
}