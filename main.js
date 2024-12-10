//1
/*function is set of simple orders that craeat  */

//2
/*function call mines we are useing function what we write  */
//4
function hello(name) {
    console.log(`hello ${name}`);
}
hello("shota");

//5
function revers(arr = "word") {
    let re =[];
    // Check if the input is a string
    if (typeof arr === "string") {
        // Loop through the string in reverse
        for (let i = arr.length - 1; i >= 0; i--) {
            re.push(arr[i])
            
        }
    } else {
        // Handle case where input is not a string
        return console.error("Input is not a string!");
    }
    console.log(re);
    return re.join("");
}

revers("hello");//edge cases 1
revers(25);//edge cases 2
revers();//edge cases 3

const add = (a = 0 , b = 0) => console.log(a + b); //in this example 0 is a default argument
add(9)//edge cases 1
add(1,9);//edge cases 2
add();//edge cases 3

/*6 Some functions require arguments to work properly. 
If a user does not provide the necessary arguments,
 we can use default values to ensure the function still works as intended.
These predefined values are called default values.*/

/*7
Scopes act like territorial boundaries that define where variables and values exist within a program or functione. 
They determine the accessibility of variables and functions in different parts of the code.
*/
/*8--9
A return value is like a result that a function gives back to us after completing its task.
if a function does not have a return statement, 
it gives us its default return value, which is undefined
*/ 
//10
/*function foo(x) {
    x * 2;
    return x; //it missed return valus
}

let x = 7;
x = foo(x);
console.log(x);
*/
//11

/*

    function foo() {

       x = bar(x);// it reasigne x value after bar function
       
        x *= 2;
    }
    //bar function did not affect x becaud it didinot get an argument and its get default valuse
    function bar(x = 8) {
        x += 1;
        return x;//and it missed retutn value

    }
    let x = 7;
    foo(x);//ist global variable
    console.log(x); // x should change

    */
   //12
   function foo(x) {
    if (x > 5) {
        return x; //retutn here
    } else {
        return x + foo(x + 1);
    }
}

console.log(foo(2));//x =( 2 + foo(3) 3 + foo(4) 4 + foo(5)  5 + foo(6)= 2+3+4+5+6;
//13
let sum =[1,2,3,4,5,6,7,8,9,10];

function oddnums (arr){
let j =0;
for (let i = 0;i < arr.length;i++){
    if(arr[i] %2 ==1){
        j = j + arr[i];
    }
}
console.log(j);

}
oddnums(sum);

//14


//chaking
//it,s rough version i will clean it up
function chaking(name){
    let x = (name);//it not necessery but 
    let y = revers(name)
    if (x === y){
        console.log (true);
    }else{
        console.log (false);
    }
}

chaking("ana")








