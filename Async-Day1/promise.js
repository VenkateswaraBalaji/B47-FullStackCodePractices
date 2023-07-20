function bookTable(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("Booked")
            // reject();
        }, 2000);
    })
}

function orderingTheFood(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Ordered")
            resolve()
            // reject();
        }, 3000);
    })
}

function preparingTheFood(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Prepared")
            resolve()
            // reject();
        }, 4000);
    })
}

function serving(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Served")
            resolve()
            // reject();
        }, 2000);
    })
}

function eating(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Eating")
            resolve()
            // reject();
        }, 5000);
    })
}

function billing(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Billed")
            resolve()
            // reject();
        }, 2000);
    })
}

function leaving(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Left")
            resolve()
            // reject();
        }, 1000);
    })
}

bookTable()
.then((res)=>console.log(res))
.then(()=>orderingTheFood())
.then(()=>preparingTheFood())
.then(()=>serving())
.then(()=>eating())
.then(()=>billing())
.then(()=>leaving())
.catch(()=>console.log("Some Error"))