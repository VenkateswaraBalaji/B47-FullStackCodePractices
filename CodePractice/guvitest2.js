function abc (str) {
  let s ="string"
  for(let i=0; i<str.length; i++){
    if (i%2==0){
      s+= str.charAt(i).toUpperCase()
    } else {
      s+= str[i]
    }
  }  return s
  }
    let str ="string";
  let modifiedstr = abc(str);
  console.log(modifiedstr);