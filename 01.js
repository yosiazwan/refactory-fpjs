const palindrome = (str) => {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

console.log(palindrome("ibu ratna antar ubi"));
console.log(palindrome("kasur ini rusak"));