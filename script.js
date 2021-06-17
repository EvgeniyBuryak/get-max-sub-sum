function getMaxSubSum(arr) {


    let value = arr.pop();

    if (!value) {
        return 0;
    }
    else if (value > 0) {
        let num = getMaxSubSum(arr);
        if (num <= 0) {
            num = -num;

            return value;
        } else {
            return num + value; 
        }

        //let num = getMaxSubSum(arr);
        //num = (num <= value) ? -((-num) + value) : num + value;
        //return (num > value) ? num : value;
        //return -getMaxSubSum(arr) + value;
    }
    else {

        return -getMaxSubSum(arr);
    }
}

console.log(getMaxSubSum([-1, 2, 3, -9]));// = 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 3, 3, -9]));// = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
console.log(getMaxSubSum([-2, -1, 1, 2]));// = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));// = 100
console.log(getMaxSubSum([1, 2, 3]));// = 6 (берём все)