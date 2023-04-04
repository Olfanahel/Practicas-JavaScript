function rot13(str) {
    const newWord =[];
    const formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]/
    const conv = {
      "A": "N",
      "B": "O",
      "C": "P",
      "D": "Q",
      "E": "R",
      "F": "S",
      "G": "T",
      "H": "U",
      "I": "V",
      "J": "W",
      "K": "X",
      "L": "Y",
      "M": "Z"
    }
  
    for(let i=0;i<str.length;i++){
      if(formato.test(str[i])){
        newWord.push(str[i]);
      }
      for(let j in conv){
        if(str[i] === j){
          newWord.push(conv[j]);
        }else if(str[i] === conv[j]){
          newWord.push(j);
        }
      }
    }
    return newWord.join("");
  }
  
  rot13("SERR CVMMN!");