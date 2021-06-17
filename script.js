function getMaxSubSum(arr) {    
    let max = 0;
    let part = 0;
    
    for (let elem of arr) {
        if (elem > 0) {
            max += elem;
        } else {
            if (part < max) {
                part = max;
            }
            max = 0;
        }
    }

    if (max > part)
        return max;
    else
        return part;

    /*
     * попытка сделать рекурсивным методом
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