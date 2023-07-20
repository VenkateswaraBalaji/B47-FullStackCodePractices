let first_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 1 second");
    }, 1000);
    });
    
    let second_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 2 seconds");
    }, 2000);
    });
    
    let third_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 3 seconds");
    }, 3000);
    });
    
    let fourth_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved First after 4 seconds");
        }, 4000);
        });
    try {
    let result = Promise.all([first_promise, second_promise, third_promise,fourth_promise]);
    result.then((data) => console.log(data));
    } catch (error) {
    console.log(error);
    }
    
    // This code is contributed by Aman Singla...
    