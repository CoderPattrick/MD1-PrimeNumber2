function checkPrime(n){
    let check = true;
    for (let i = 2; i <=Math.sqrt(n); i++) {
        if(n%i==0){
            check = false;
            break;
        }
    }
    if(n<=1){
        check = false;
    }
    return check;
}
let x = 1;
let limit = 100;
let arr =[];
while (x<limit){
    if (checkPrime(x)){
        arr.push(x);
    }
    x++;
}
document.write(arr.join(",&nbsp"));