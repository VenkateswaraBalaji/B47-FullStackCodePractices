// JSON can be an object or can be a Nested Object
// Example
let a = {"name":
{"firstname": "Balaji",
"lastname": "Lakshmanan"},
"Age":42,
"RollNo": 02}

console.log(a.name.lastname);
console.log(a.Age);
console.log(a.RollNo);

let b= {name: {
    firstname:"Balaji"},
    middlename:"LV",
        lastname:"Lakshamanan"}
        

console.log(b.name.firstname);
console.log(b.name);
console.log(b.middlename);
console.log(b.lastname);

// JSON can be an Arrays of objects as well
//Example
 c = [{
    name:"Balaji",
    Age:"42"
},{
    name:"Dheeraj",
    Age:7
},{
    name:"Madhu",
    Age:'5'
}]
console.log(c);
 
// JSON Example 1

let E = {"employees":[
    {"name":"Balaji","email":"balaji@gmail.com"},
    {"name":"Raji","email":"raji@gmail.com"},
    {"name":"Dheeraj","email":"dheeraj@gmail.com"},
]}
 E.employees.forEach(myFunc)
 function myFunc(items) {
    console.log(items.email)
    console.log(items.name)
     }

// Example 2

 let hm = {"menu": {
    "id":"file",
    "Value":"File",
    "popup":{
        "menuitem":[
            {"value":"New","onclick":"CreateDoc()"},
            {"value":"Open","onclick":"OpenDoc()"},
            {"value":"Save","onclick":"SaveDoc()"}
        ] }
    }}
         hm.menu.popup.menuitem.forEach(myFunc)
         function myFunc(item){
            console.log(item.value);

        }