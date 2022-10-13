//working only for the first letter
/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  const vowels = 'aeiou';
  let vowelRegex = new RegExp(`^[${vowels}]`,'gi'); // List of vowels (Global and Insensitive)
  let consonantRegex = new RegExp(`^(?![${vowels}])[a-z]`, 'gi'); // List of consonants (Global and Insensitive)
  const con = str.match(consonantRegex); //find first letter consonant
  const vow = str.match(vowelRegex); //find first letter vowel
  let final_string; //declare final string in pig latin
  let way = "way";
  let ay = "ay";
  if (!con) {
      final_string=str.substr(1,str.length)+str[0];
          final_string = final_string+"way";
      }
    else if(!vow) {
      final_string=str.substr(1,str.length)+str[0];
       final_string = final_string+"ay";
        console.log (final_string);
        }
  return final_string;
}

translatePigLatin("glove");
