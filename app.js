palindrome(`1234321`);
palindrome(`45754`);
palindrome(`121`);
palindrome(`13431`);
palindrome(`12345`);


function palindrome(str){
 return str === str.split(``).reverse().join(``);
}

