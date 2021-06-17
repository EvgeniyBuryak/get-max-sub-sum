function getMaxSubSum(arr) {    
    let max = 0;
    let part = 0;
    
    for (let i = 0; i < arr.length + 1; i++) {
        
        part += arr[i]; // добавляем значение
        
        if (max < part) {
            max = part; // запоминаем максимум на текущий момент
        }

        if (arr[i] < 0) {
            part = 0;
        }        
    }
    return max;

    /* метод из задания
       function getMaxSubSum(arr) {
         let maxSum = 0;
         let partialSum = 0;

         for (let item of arr) { // для каждого элемента массива
           partialSum += item; // добавляем значение элемента к partialSum
           maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
           if (partialSum < 0) partialSum = 0; // ноль если отрицательное
         }

         return maxSum;
       }
     */

    /* попытка сделать рекурсивным методом
    let value = arr.pop();
    if (!value) {
        return 0;
    }
    else if (value > 0) {
        let num = getMaxSubSum(arr);
        num = (num <= value) ? -((-num) + value) : num + value;
        return (num > value) ? num : value;
        //return -getMaxSubSum(arr) + value;
    }
    else {
        return -getMaxSubSum(arr);
    }*/
}

console.log(getMaxSubSum([-1, 2, 3, -9]));// = 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 3, 3, -9]));// = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
console.log(getMaxSubSum([-2, -1, 1, 2]));// = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));// = 100
console.log(getMaxSubSum([1, 2, 3]));// = 6 (берём все)