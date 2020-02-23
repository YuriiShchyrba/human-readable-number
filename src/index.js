module.exports = function toReadable (number) {
  var numberstr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
      "eighteen", "nineteen", "twenty", "thirty", "fifty", "hundred"];
      if (number < 21 && number >= 0) { return numberstr[number]; }
  var arr = [], c = 1;
  //loop:
  while (number > 0) {
      var digit = number % 10;
      digit = digit * c;
      c *= 10;
      number = Math.floor(number / 10);
      if (digit < 21 && digit> 0) { arr.push(numberstr[digit]); continue; }
      if (digit == 10) { digit =digit+  numberstr.indexOf(arr.pop()); arr.push(numberstr[digit]); continue; }
      if (digit == 30) { arr.push(numberstr[21]); continue; }
      if ( digit == 40) { arr.push("forty"); continue;}
      if (digit == 50) { arr.push(numberstr[22]); continue; }
      if (digit == 80) {
          digit = digit / 10;
          arr.push(numberstr[digit] + "y"); continue; }
      if (digit < 99 && digit > 30) {
          digit = digit / 10;
          arr.push(numberstr[digit] + "ty"); continue; }
      if (digit >= 100 && digit <= 999) {
          digit = digit / 100;
          arr.push(numberstr[digit] + " "+ numberstr[23]); continue; }

  }
  return arr.reverse().join(" ");
}
