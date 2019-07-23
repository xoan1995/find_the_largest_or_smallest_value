function findMax(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let num = [];
for (let i = 0; i < 100; i++) {
    num[i] = Math.floor(Math.random() * 101);

}
console.log(num);
let maxValue = findMax(num);

document.write("<br/>");
document.getElementById("max").innerText="The max value is: " + maxValue;
