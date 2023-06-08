// Traverses through each and every element and performs the operation and stores the result and next operation is done with the result stored
 const array = [1,2,3,4,5];
// // 0+1+2+3+4+5
 const initialvalue = 0;
 const sumwithinitial = array.reduce (
     (accumulator, currentvalue)=> accumulator + currentvalue,initialvalue);
     console.log(sumwithinitial);

    const array1 = [4,5,8,6,4];
// 0+4+5+6+7+8
const initialvalue1 = 10;
const sumwithinitial1 = array1.reduce (
    (accumulator, currentvalue)=> accumulator + currentvalue,initialvalue1);
    console.log(sumwithinitial1);

    const array2 = [4,5,8,6,4];
    // 0+4+5+6+7+8
    const initialvalue2 = 10;
    const sumwithinitial2 = array1.reduce (
        (accumulator, currentvalue)=> accumulator + currentvalue);
        console.log(sumwithinitial2);

        const array4 = [4,5,8,6,4];
    // 0+4+5+6+7+8
    const initialvalue4 = 15;
    const mulwithinitial4 = array4.reduce (
        (accumulator, currentvalue)=> accumulator * currentvalue,initialvalue4);
        console.log(mulwithinitial4);

        const array5 = [4,5,8,6,4];
    // 0+4+5+6+7+8
    const initialvalue5 = 20;
    const subwithinitial5 = array4.reduce (
        (accumulator, currentvalue)=> accumulator - currentvalue,initialvalue5);
        console.log(subwithinitial5);