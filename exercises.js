// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(numOne, numTwo){
    "use strict";

  if (numOne > numTwo){
    return numOne;
  } else {
    return numTwo;
  }
}
console.log(max(15,2));


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(numOne, numTwo, numThree){
    "use strict";

    if (numOne > numTwo && numOne > numThree){
      return numOne;
    } else if (numTwo > numOne && numTwo > numThree) {
      return numTwo;
    } else {
      return numThree;
    }
}
    console.log(maxOfThree(1,3,1));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    var vowels = ['a', 'e', 'i', 'o', 'u', 'y']

    for (var i = 0; i < vowels.length; i++){

      if (char == vowels[i] ){
          return true;
      }
    }
    return false;
}
console.log(isVowel('a'));
console.assert(isVowel('d') === false);

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //1. start with a string
    var word = phrase;
    // 1.3 create an array
    var chars = word.split('');
    // 3 create a new string
    var newString = '';
    // 1.4 loop the array
    for (var i = 0; i < chars.length; i++){
      // 1.5 find the consonants
      if (!isVowel(chars[i]) && chars[i] != ' '){
        //2.  double up consonants
        newString = newString + chars[i] + 'o' + chars[i];
      } else {
        newString = newString + chars[i];
      }
    }
      return newString;
}

rovarspraket("this is fun");
console.log(rovarspraket("this is fun"));

// 3.2 fill the new string with consonants
// fill string with then vowels
// 4 return the new string

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";

    var total = 0;
      for (var i = 0; i < array.length; i++) {
        total += array[i];
      }
    return total;
}
console.log(sum([8,4,3]));


function multiply(array){
    "use strict";

    var total = 1;
      for (var i = 0; i < array.length; i++) {
        total *= array[i];
      }
    return total;
}
console.log(multiply([4,3,2]));


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";

    var reversedText = "";
    for (var i = 0; i <= string.length; i++) {
      reversedText += string.charAt(string.length-(i));
    }
    return reversedText;
}

console.assert(reverse("This is the test.")===.tset eht si sihT);
console.log(reverse("This is the test."));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";

    var longestWord = 0;
    var wLength = 0;

    for (var i = 0; i < words.length; i++) {
      wLength = words[i].length;
      if (wLength > longestWord){
        longestWord = wLength;
      }
    }
    return longestWord;
}
console.assert(findLongestWord(["happy", "sad", "frustrated"])=== 10);
console.log(findLongestWord(["happy", "sad", "frustrated"]));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";

    var longWords = [];

    for (var a = 0; a < words.length; a++) {
      if ( words[a].length > i ) {
        longWords.push(words[a]);
      }

    }
return longWords;
}

console.log( filterLongWords(['hi', 'bye', 'hello'], 2));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";

    // http://stackoverflow.com/questions/18619785/counting-frequency-of-characters-in-a-string-using-javascript

    var counts = {};
    for (var i = 0; i < string.length; i++) {
      var char = string.charAt(i);
      if (counts[char]){
      counts[char]++;
      } else {
      counts[char] = 1;
      }
    }
    return counts;
}


console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab") == {a: 7, b: 14, c: 3, d: 3});


}
