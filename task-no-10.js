function find_vowels(str) {
  //check if the value is string
  if (typeof str !== "string") {
    return false;
  }

  // if the value is string then,
  var vowels = str.match(/[aeiou]/gi);
  var vowels_count = vowels ? vowels.length : 0;

  return vowels_count;
}

console.log(find_vowels("yujhgfdrwe4terui"));
console.log(find_vowels(21842));
console.log(find_vowels("ZAIN RAZA"));
