const rotate =(arr)=>{let x = arr.shift().arr.push(x)}
const solve=(arr)=> {
    let temp = arr;
    let ans =0;
        for (i=0;i<arr.length;i++){
            let sum = 0;
            temp = rotate(temp);
            for (j=0;j<temp.length;j++){
                sum+= temp[j] * j;
            }
            ans = Math.max(ans,sum)
    } return ans;
       
     }; console.log(solve[4,3,2,6]);

  // solve ([4,3,,2,6])

 // dp programming (n^2)