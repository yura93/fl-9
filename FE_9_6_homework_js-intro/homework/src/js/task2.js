const a = parseFloat(prompt('Enter the length of the first side', '0'));
const b = parseFloat(prompt('Enter the length of the second side', '0'));
const angle = parseFloat(prompt('Enter the angle', '0'));
const sumAngle = 180;

if (a <= 0 || b <= 0 || angle <= 0 || isNaN(a) || isNaN(b) || isNaN(angle)) {
  console.log('invalid data');
} else {
  const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) -
      2 * a * b * Math.cos(angle * Math.PI / sumAngle));
  const p = a + b + c;
  const area = Math.sqrt(p / 2 * (p / 2 - a) * (p / 2 - b) * (p / 2 - c));

  console.log(
    'c length:' + c.toFixed(2) * 1 + '\n',
    'Triangle square:' + area.toFixed(2) * 1 + '\n',
    'Triangle perimeter:' + p.toFixed(2) * 1 + '\n'
  );
}
