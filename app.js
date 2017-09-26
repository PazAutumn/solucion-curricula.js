function potencia (b, e) {
 var result = 1;
 for(var i=0; i < e; i++){
 result = result * b;
 if (result <10000){
 console.log(result);
   } else {
  break;
}
}
}
 potencia(3,90);
