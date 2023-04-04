function palindrome(str) {
    const word= [];
    let newWord = "";
    let otherWord="";
    let rs = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]|\s/;
    for(let i=0;i<str.length;i++){
      if(!rs.test(str[i])){
        word.push(str[i].toLowerCase());
      }
    }
    newWord = word.join("");
    for(let i=newWord.length;i>0;i--){
      otherWord+=newWord.substring(i,i-1);
    }
    if(newWord === otherWord){
      return true;
    }else{
      return false;
    }
  }
  
  palindrome("0_0 (: /-\ :) 0-0");