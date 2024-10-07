function isPalindromeBase(x) {
  const str = x.toString();
  return str === str.split("").reverse().join("");
}

console.log(isPalindromeBase(252));
console.log(isPalindromeBase(-121));
console.log(isPalindromeBase(10));

function isPalindromeAdvenced(x) {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    let lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

console.log(isPalindromeAdvenced(252));
console.log(isPalindromeAdvenced(-121));
console.log(isPalindromeAdvenced(10));
