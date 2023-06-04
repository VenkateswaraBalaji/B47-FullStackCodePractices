// return statement - It returns the final output calculated by a fucntion to the line which calls it

function factorial(a){
    if (a<0) {
        return "Enter a non-negative integer"
    } 
    let f=1;
    for(i=a; i>=1;i--){
        f=f * i;}
     return f}
     console.log(factorial(6))
