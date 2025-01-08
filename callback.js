function sum(a, b){
    console.log(a+b);
}

function calculate(a, b, callback){
    callback(a, b);
}

calculate(10, 20, sum);
    