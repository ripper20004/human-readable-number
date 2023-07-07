const lessThenTwenty = ['zero','one', 'two', 'three', 'four', 'five',
    'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
    'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
    if (number <= 19) return lessThenTwenty[number];
    if (number <= 99) {
        return number % 10 === 0 ? tens[number / 10 | 0]
            : tens[number / 10 | 0] + " " + lessThenTwenty[number % 10];
    }
    return number % 100 === 0 ? lessThenTwenty[number / 100 | 0] + 'hundred'
        : lessThenTwenty[number / 100 | 0] + 'hundred' + toReadable(number % 100);
}
