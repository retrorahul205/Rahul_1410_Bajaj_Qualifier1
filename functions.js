const {ai}= require('./gemini.js');

function fibonacci(n){
    if(n<=0) return [];

    const result=[0];
    if (n==1) return result;
    result.push(1);
    for(let i=2;i<n;i++) {
        result.push(result[i-1]+result[i-2]);
    }

    return result;
}

function prime(arr){
    function isPrime(num){
        if(num<2) return false;
        for(let i=2;i*i<=num;i++){
            if(num%i===0) return false;
        }
        return true;
    }
    return arr.filter(isPrime);
}

function lcm(arr) {
    const gcd= (a,b) => b === 0 ? a : gcd(b,a%b);
    const lcmt=(a,b)=>(a*b)/gcd(a,b);

    return arr.reduce((acc,val)=>lcmt(acc,val));
}

function hcf(arr) {
    const gcd = (a,b)=>b===0 ? a : gcd(b,a%b);

    return arr.reduce((acc, val)=>gcd(acc,val));
}
module.exports = {fibonacci,prime,lcm,hcf,ai};
