// exo 1
var fs=require('fs')
fs.readFile("jour07.txt", function (err, data) {
   if (err) {
      console.error(err);
      return;
   }

   console.log("Lecture en différé : " + data.toString());
});
// exo 2
var array=[1,2,3,4,5]
var double=array.map(function(a){
    return a**2
})
console.log(double)