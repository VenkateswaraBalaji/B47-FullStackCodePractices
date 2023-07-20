let mypromise = new Promise((resolve,reject) => {
    let n = 6
    if (n%2==0){
        resolve("It's a even number")
    } else {
        reject("It's a odd number")
    } 
})

mypromise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})

mypromise.then((value)=> {
    resolve
}).catch((value)=>{
    reject
})