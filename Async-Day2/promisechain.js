// Promise chaining --> One promise's resolve/reject is calling another promise
 let firstpromise = new Promise((res)=>{
    res("First Promise")
})
firstpromise.then((data)=>{
    console.log(data)
    
    let mypromise = new Promise((res)=>{
        res("Second Promise")
        return mypromise

    })
        mypromise.then((data)=>{
        console.log(data)
        })
          
    })
    // promise.all (checks whether all the promises are resolved or not)