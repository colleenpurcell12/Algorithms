//http://www.rexegg.com/regex-quickstart.html

//seems like this is test for all non-alpha numerical symbols: /^[a-zA-Z0-9]+$/.test(password)
// surround with //

//Learn how to read:
	// /^ +\d +/
	// /\n +\d+ +/g 
	///([./\$^+-])/g

//Methods wtih RegEx
	// string.replace(regex, 'xyz')
	// regex.test(string) ex: /[a-z]/.test(password)
	// regex.exec(string)Tests for a match in a string. Returns the first match

// Brackets:
	// ranges [-] like [0-9] or [a-z] is all lowercase, and /[!@#$%^&*; ]/ is all symbols
	// [abc] Find any character between the brack
	// [^abc] Find any character NOT between the brack
	// (x|y) Either alternatives, x or y

//Characters
	// \w - alpha numerical [a-Z]
	// \W - non-alpha numerical like *-+=)
	// \s - whitespace character like space
	// \n
	// \d - digit from 0-9
	// \D - not a number
	// \ escapes a special character or \. is a period, \? is a ?...

// Quantifiers
	// +  is at least one
	// {3} is exactly 3
	// {3,} is 3 or more
	// {3,4} is 3 to 4
	// * is zero or more
	// ? is once or more

// Whitespace
	// \t tab
	// \n new line

// Modifiers
	// g global, all matches
	// i case insensitive matching
	// m multi line matching

//Anchor
	// $ from end of line
	// ^ from beginning of line


//g: global **Modifier** replaces repeated matches
x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1')

//$: dollar sign is an **Anchor** used to match the character at the end of the string
//^: is an **Anchor** used to match the character at the beginning of the line
//+: is a **Quantifier** meaning one or more
s.replace(/!+$/, '') //removed all ! at end of string
//you can add a turnery operator within a regular expression for what to replace with 
x.replace(/\d/g, d => d < 5 ? 0 : 1);

//******
//EXCLAMATIONS
//Remove n exclamation marks in the sentence from left 
function remove(s,n){
  return n>0 ? remove(s.replace('!', ''), n-1) : s; //recursive
}

//Remove all exclamation marks from the end of sentence
function remove(s){
  return s.replace(/!+$/,'') //removes + (one or more) ! from $ (end of line) and replaces with  nothing
}

//******
//CASE OPPOSITES
//see if two strings are the case opposite, each letter is the lower or upper of the other str's letter
function isOpposite(s1,s2){
  if( s1 === s2 || s1.toLowerCase()!==s2.toLowerCase()){ //they are exact case-sensitive same or they aren't the same letters
  	return false
  }
  for(var i =0;i<s1.length;i++){
    if(s1.charAt(i)===s2.charAt(i)){ //if the strings aren't equal, but same letters. Then as long as no character is exactly thre same then they must be opposite.
    	return false
    }
  }
  return true
}

//first attempt, I check that either str1's "i"th character is lower and the str2's ith is upper or the reverse
function isOpposite(s1,s2){
  if(s1==='' || s2==='' || s1.length!==s2.length){return false}
  for(var i = 0;i<s1.length;i++){
    if((/[a-z]/.test(s1[i]) && /[A-Z]/.test(s2[i])) ||
    (/[a-z]/.test(s2[i]) && /[A-Z]/.test(s1[i]))
    ) { //opposite, so keep searching
    }
    else { return false} 
  }
  return true
}


//******
//Fake Binary
//all the numbers below 5 are replaced by 0, 5 and above become one
function fakeBin(x){
return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1')
}

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//******
//Palindrome
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}
//******
//******
//******
//******


