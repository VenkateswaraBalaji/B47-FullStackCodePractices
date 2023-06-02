// increment & decrement function
// ncr
// Decimal number to Binary number (number consisting of 0 & 1)
    let a = 10
function Binary(a){
    let ans = 0;
    let rem = 1;
    let i = 1;
    while (a){
        rem =a % 2;
        ans+= rem * i;
        i= i * 10;
        a= parseInt(a/2);}
    // is an inbuilt function
      return ans;}
      console.log(Binary(a));

      // types of functions
      // User defined / In Built
      // Math.floor similar to parseInt (will eliminate decimal part of the numbers)

      // CharAt - Inbuilt function
      // "guvi" change to "GuVi"

        let str = "guvi";
      let modifiedStr = str.charAt(0).toUpperCase() + str.charAt(1).toLowerCase() + str.charAt(2).toUpperCase() + str.charAt(3).toLowerCase();

     console.log(modifiedStr); // Output: GuVi

    
      // function abc (str) {
      //   let s ="guvi"
      //   for(let i=0; i<str.length; i++){
      //     if (i%2==0){
      //       s+= str.charAt(i).toUpper()
      //     } else {
      //       s+= str[i]
      //     }
      //   } return s
       
      // }
      // let str ="guvi";
      //   let modifierStr = abc(str);
      // console.log (modifiedStr);