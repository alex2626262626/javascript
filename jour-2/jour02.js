// exo 1
var integer=102
var float=13.9
console.log(integer,"\n",float)
// exo 2
var basic=34
var stringified=basic.toString()
console.log(stringified)
// exo 3
var num=1.5
var rounded=Math.round(num)
console.log(rounded)
// exo 4
var test=5
var bis=12
console.log(test+bis)
console.log(test-bis)
console.log(test*bis)
console.log(test/bis)
console.log(test**bis)
// exo 5
console.log(test<bis)
console.log(test>bis)
console.log(test>=bis)
console.log(test<=bis)
console.log(test===bis)
console.log(test!==bis)
// exo 6
var score=20
var limit=50
if(score>=limit){
    console.log("ok good")
}
else{
    console.log("oh no")
}
// exo 7
var password="azerty"
if((password.length)<=5){
    console.log('the password is not secure')
}
else{
    console.log('the password is secure')
}
// exo 8
if(score>=limit && (password.length)>5){
    console.log("everything is ok")
}
else if(score>=limit || (password.length)>5){
    console.log("something is ok") 
}
else{
    console.log("nothing is ok")
}