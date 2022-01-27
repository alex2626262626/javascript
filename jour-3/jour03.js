// exo 1
var fruits=["mango","blueberry","lemon"]
console.log(fruits)
console.table(fruits)
// exo 2
var ingredients=["eggs","milk","butter"]
console.log(ingredients[1])
console.log(ingredients.indexOf("butter"))
// exo 3
var objects=["pen","book","lamp"]
objects.unshift("chair")
console.log(objects)
objects.pop()
console.log(objects)
objects.push("laptop")
console.log(objects)
objects.shift("chair")
console.log(objects)
// exo 4
var numbers=[4,10,8,12,6]
numbers.sort((a, b) => b - a);
console.log(numbers)
numbers.sort((a, b) => a - b);
console.log(numbers)
// exo 5
var total=0
var limit=10
for(var i=0;i<=limit;i+=1){
    total=total+i
}
console.log(total)
// exo 6
var sentence="hello konexio"
for(var i=0;i<=sentence.length;i++){
    
}