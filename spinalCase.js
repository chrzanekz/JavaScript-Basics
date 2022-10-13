function spinalCase(str) {
  // regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
  var regex = /\s+|_+/g;
  //The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  //While returning the string, another replace() replaces spaces and underscores with dashes using regex.
  return str.replace(regex, "-").toLowerCase();
}
console.log(spinalCase('thisIsSpinalTap'));

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}
spinalCase("This Is Spinal Tap");
