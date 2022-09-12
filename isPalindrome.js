// Write your code below

const word = 'racecar'

const palindromeChecker = (str) => {
    const wordSplit = str.split('');
    const wordBackwards = [];
    for(let i = wordSplit.length; i >= 0; i--) {
        wordBackwards.push(wordSplit[i]);
    }
    if(wordBackwards.join('') === str){
        console.log(`${str} is a palindrome.`);
    } else {
        console.log(`${str} is not a palindrome`)
    }
}
palindromeChecker(word);