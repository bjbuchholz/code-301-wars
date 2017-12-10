function abbrevName(name){
  var str = name.split(' ');
  return (str[0][0] + '.' + str[1][0]).toUpperCase();
};