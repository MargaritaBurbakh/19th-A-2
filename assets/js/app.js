let year = +prompt("Year u want to check");

let result = year % 4;

if(result == 0){
    alert("leap year!");
}
else if(result != 0){
    alert("Not a leap year!");
}
