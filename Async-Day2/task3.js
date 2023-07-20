let mypromise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Hello World")
    }, 5000)
})

mypromise.then((message)=>{
    console.log(message)
})