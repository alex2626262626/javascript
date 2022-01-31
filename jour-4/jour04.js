// exo 1
var cat={
    name:"garfield",
    age:3,
    isCute:true,
}
console.log(cat)
console.log(cat.age)
if(cat.isCute===true){
    console.log('so cute')
}
// exo 2
var cat2={
    name:"s",
    age:4,
    isCute:false,  
}
var cats=[cat,cat2]
console.log(cats[0].age)
console.log(cats[1].isCute)
// exo 3
function checkIfEven(num){
    if(num%2===0){
        console.log('even')
    }
    else{
        console.log('odd')
    }
}
checkIfEven(2)
checkIfEven(3)
checkIfEven(4)
checkIfEven(5)
checkIfEven(6)
checkIfEven(7)
checkIfEven(8)
// exo 4
function compare(num1,num2){
    if (num1>num2){
        console.log(num1,"is bigger that",num2)
    }
    else if(num1<num2){
        console.log(num1,"is lower that",num2)
    }
    else{
        console.log('both are the same')
    }
}
compare(1,2)
// exo 5
function addUp(num){var total=0
    for(var i= 1;i<=num;i++){
        total=total+i
    }
    console.log(total)
}
addUp(12)