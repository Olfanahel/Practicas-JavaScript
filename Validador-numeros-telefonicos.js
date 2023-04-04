function telephoneCheck(str) {
    const form = /\s|[-]/;
    const noChar = /[`!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?~]/;
    let number = "";
    let cont=0;
    for(let char in str){
     if(noChar.test(str[char])){
       return false;
     }
   }
   for(let i in str){
     if(str[i] === "-"){
       cont++;
     }
     if(cont>2){
       return false;
     }
     if(!form.test(str[i]) && str[0] !== "-"){
       number+=str[i];
     }
   }
   if((number[0] === "(" && number[4] === ")")||(number[1] === "(" && number[5] === ")")){
     if(number.length === 13){
       if(number[0] == 1){
         return true
       }else{
         return false;
       }
     }else if(number.length===12){
       return true;
     }else{
       return false
     }
   }else{
     if(number.length === 11){
       if(number[0] == 1){
         return true
       }else{
         return false;
       }
     }else if(number.length===10){
       return true;
     }else{
       return false
     }
   }

}
console.log(telephoneCheck("1555 555-5555"));