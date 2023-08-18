function isPalindrome(str) {
  // Aceitando apenas strings em lowcase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // revertendo a string para verificar se e uma palindrome
  const reversedStr = cleanedStr.split('').reverse().join('');
  // Comparacao final
  return cleanedStr === reversedStr;
}

const inputString = "nurses run";
const result = isPalindrome(inputString);

if (result) {
  console.log(`"${inputString}" is a palindrome.`);
} else {
  console.log(`"${inputString}" is not a palindrome.`);
}
