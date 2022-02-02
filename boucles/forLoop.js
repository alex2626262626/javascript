// exo 1
var total=0
for(var i=5;i<=10;i++){
    total=total+i**2
}
console.log(total)
// exo 2
var total=0
for(var i=100;i<=1000;i++){
    if(i%7===0){
        total++
    }
}
console.log(total)
// exo 3
function hours(nums){
    var hour=Math.floor(nums/3600)
    var min=Math.floor((nums%3600)/60)
    var num =nums%60
    console.log(hour,min,num)
}
hours(3700)
console.log(Math.ceil(4.2))
