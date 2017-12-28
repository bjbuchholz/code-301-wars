function disemvowel(str) {
  var vowels = "aiueoAIUEO";
  var string = '';

  for (i = 0 ;i <= str.length - 1; i++){
    if(vowels.indexOf(str[i]) == -1){
      string += str[i];
    } 
}  
  return string;
}