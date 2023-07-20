let mypromise = new Promise((resolve,reject) => {
    let str ="nitin"
    let str2=""
    for(var i=str.length-1;i>=0;i--){
        str2+=str[i]
    }
    if (str==str2){
        resolve("The string is pallindrome")
    } else { 
        reject("The string is not pallindrome")
    }
    } )

mypromise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
