// `Hello` is also a stirng. We can show the dynamic value with ${} - Example 
// pass by value function
a=1
b=2
c=3
console.log(`Hello a`);
console.log(`Hello a${b}`);
console.log(`Hello a+${b}+${c}`);
console.log (`Hello a`+`${b}`+`${c}`);
console.log (`Hello a${a}${b}${c}`);
console.log (`Hello a`+ (`${b}`+`${c}`+`${a}`))

function passbyvalue(d,e) {
    let tmp;
    tmp = e;
    e = d;
    d = tmp;
    console.log (`Inside passby value function -> d = $(d) e =$(e)`);
    }
    let d = 1;
    let e = 2;
    console.log ('Before calling pass by value function`-> d = $(d) e =$(e)');
    // passbyvalue(d,e);
    // console.log('After calling pass by value Function -> d=${d} e=${e}');
    console.log(`temp ${d}${e}`)

    // pass by reference

    function passbyreference(obj){
        let tmp = obj.f;
        obj.f = obj.g;
        obj.g = tmp;
        console.log('Inside pass by reference Function -> f = ${obj.f} g=${obj.g}');
    }
        let obj = {
            f: 10,
            g: 20
        }
        console.log('Before calling passbyreference Funciton -> f = ${obj.f} g=${obj.g}');
        console.log(`${obj.f}`+`${obj.g}`)
        passbyreference(obj)

        console.log('After calling pass by reference Function -> f =$obj.f} g =${obj.g}');
        console.log(`${obj.f}`+`${obj.g}`)