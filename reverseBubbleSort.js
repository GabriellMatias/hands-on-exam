function reverseBubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] < arr[j + 1]) {
              // Verifica os elementos que estao fora de ordem
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
      }
  }
  
  return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = reverseBubbleSort(numbers);
console.log("Sorted numbers in decreasing order:", sortedNumbers);
