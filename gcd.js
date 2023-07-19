function gcd(a, b) {
    while(a !=b){
        if(a > b){
            a -=b;
        }

        else {
            b -=a;
        }
    }

    return a;
}

var result = gcd(20, 30);
console.log(result); // output: 10