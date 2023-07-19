let arr = [1, 2, 3, 2, 4, 3];

let uniqueArr = [];
arr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
    }
});
console.log(uniqueArr);