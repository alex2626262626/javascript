// exo 1
function formaDate(a){
    var b=new Date(a)
    var c=(b.getFullYear()).toString()
    var d=(b.getMonth()+1).toString().padStart(2,"O")
    var e=(b.getDate()).toString()
    console.log(e,'/',d,'/',c)

}
formaDate("1994-06-21")
// exo 2
function calculAge(a){
    var b=new Date(a)
    var z=b.getFullYear()
    var c=new Date().getFullYear()
    var d=console.log(c-z)
}
calculAge("1994-06-21")