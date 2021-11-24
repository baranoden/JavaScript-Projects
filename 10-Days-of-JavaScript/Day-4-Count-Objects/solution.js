


//This one is tricky, it may have different solutions 




function getCount(objects) {
    var counter = 0;
 objects.forEach(function (n){
     if (n.x===n.y){
         counter++;
     }
 })
     return counter;
 
     
     
 }