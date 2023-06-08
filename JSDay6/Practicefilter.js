const arr = [1,2,3,4,5,6,9];
const s = 15
let ans=[]
for (let i=0;i<arr.length;i++) {
    let sum = arr[i];
    if (sum == s){
        ans.push([i,i])
    }
    if(sum>s){
        continue;
    } 
    for(let j=i+1;j<arr.length;j++){
        sum+=arr[j];
        if (sum == s){
            ans.push([i,j])
        }  
        if (sum>s){
    break;
         } 
        }
      }
    console.log(ans)
