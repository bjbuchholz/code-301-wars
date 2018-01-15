function mutateMyStrings(stringOne, stringTwo){
    let finalString = stringOne;
    let newString = stringOne+"\n";
      
     for (let i = 0; i < stringOne.split('').length; i++) {
        if (stringOne[i] != stringTwo[i]) {
          finalString = finalString.substring(0, i) + stringTwo.charAt(i) + finalString.substring(i+1);
          newString += finalString+"\n";
        }
      }
      
     return newString;
    }