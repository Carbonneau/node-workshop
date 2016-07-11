/* 
Create a file called hello-world.js . In it, write a simple node program 
that outputs "Hello World!" to the console.

Add an instruction to your program that will output "Hello World Again!!" 
10 seconds after the program was run.

Save, commit and push.
*/
function hi(){
    console.log("Hello World!");
}

function hello() {setTimeout(function(){
  console.log("Hello World Again!");
}, 10000);
}

//hi();
//hello();


