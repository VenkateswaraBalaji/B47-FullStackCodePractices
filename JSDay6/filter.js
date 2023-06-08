 const ages = [32,33,16,40,19,13];
 const result = ages.filter(checkAdult);

 function checkAdult(age){
    return age >=18;
 }
 console.log(result);

 const movies = [{id:1,mn:"Tiger",Lang:"English"},
 {id:2,mn:"Lion",Lang:"Tami"},
 {id:3,mn:"Bear",Lang:"Hindi"},
 {id:4,mn:"Dog",Lang:"Telugu"},
 {id:5,mn:"Leopard",Lang:"Malayalam"},
 {id:6,mn:"Elephant",Lang:"English"}];

 const newmovie = movies.filter((movie)=>{
    return movie.id!=4
 })
 console.log(newmovie);
 