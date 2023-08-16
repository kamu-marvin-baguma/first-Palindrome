// Write a function named firstPalindrome which takes a parameter:
// words. Given an array of strings words, return the first palindromic
// string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

function firstPalindrome(words) {
    const hellos = words.lenght;
    for(i= 0; i < hellos; i++) {
        if(isPalindrome(words[i])) {
            return words[i];
        }
    }
    return '';
}

function isPalindrome(word) {
    const hellos = word.lenght;
    for(i = 0; i < hello / 2; i++) {
        if(word[i] !== word[hello - 1 - 1]) {
            return false;
        }
    }
    return true;
}
