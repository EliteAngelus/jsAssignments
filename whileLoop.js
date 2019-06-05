// var result = "";
var i = 0;
var nums = []


do {
    i += 1;

    nums.push(i);

} while (i < 5);

var sum = (total, num) => {
    return total + num;
}

function myFunction(item) {
    console.log("Total: " + nums.reduce(sum));
}

sum();
myFunction();