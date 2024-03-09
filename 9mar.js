// calling a function
function totalCostPrice(w,x,y,z){
    console.log("The total CP of 4items is alot");
    return x+y+z+w;
}
totalCostPrice();
console.log("The total is", totalCostPrice(990,789,678,1200));

function factorial(n){
    if(n===0 || n===1){
        return 1;

    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(1)); 
console.log(factorial(2)); 
console.log(factorial(3)); 
console.log(factorial(4)); 
console.log(factorial(5)); 

function call(a,d){
    return a * d; 
}
console.log(call(25,5));

const math= apply(a,b){
    
}
 let name={
    firstname:"badar",
    lastname:"bahadur",

  
 };
let printfullname=function(hometown){
     console.log( this.firstname +" "+ this.lastname + " from" +  this.hometown);
}
printfullname.call(name, "Nagarjun");

 let name2={
    firstname:"Sachin",
    lastname:"Tendulkar"
 }
printfullname.call(name2, "Rara");


// scope of the function

const num1= 88;
const num2= 78;
const num3 =90;
const name= "Chandramukhi"

function totalMArks(){
    return num1+num2+num3;
}
console.log(totalMArks());

function averageMarks(){
    const num1= 97;
    const num2= 88;
    function average(){
        return`${name} scored ${num1+num2/2}`
    }
return average(22);

}
console.log(averageMarks(2));

// recurrsive function

let num=1;
function show(){
    console.log("ABC>>>", num)
    num++;
    if(num<= 10){
        show();
    }
    else{
        return 0;
    }
 
}
show();
show();

function double(){
    show();
}
double();