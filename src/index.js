module.exports = function toReadable (number) {
  if ( number ==0) { return "zero"; }
  var numberstr = ["zero","one","two", "three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen", "fourteen", "fifteen","sixteen","seventeen",
"eighteen","nineteen","twenty","thirty","fifty","hundred"];
var arr = [], c=1;
while ( number >0)
{
  var digit = number%10;
  digit=digit*c;
  c*=10;
  number = Math.ceil(number/10);
  switch(digit){
    case 1-20:
      arr.push(numberstr[digit]);
      break;
      case 30:
        arr.push(numberstr[21]);
        break;
        case 50:
          arr.push(numberstr[22]);
          break;
          case 80:
            digit=digit/10;
            arr.push(numberstr[digit]+"y")
            break;
      case 21-99:
        digit=digit/10;
        arr.push(numberstr[digit]+"ty")
        break;
        case 100-999:
        digit=digit/100;
        arr.push(numberstr[digit]+numberstr[23]);
        break;
  }
}
 return arr.reverse();
}
