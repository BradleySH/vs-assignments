// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:


try{
    function sum(x, y){  //  my code
        if(x || y === Number){
            console.log("code is fine");
        } else if( x || y === ""){
            console.log("you need to enter a number");
        } else if(x || y === NaN){
            console.log("WHat you have entered is not a number");
        }

    }
    return x + y;
} 
catch(err){

    console.log(err);
    // handle error

}
finally{
    //code the runs after no matter what
    console.log("Running no matter what" + sum);
}
console.log(sum(2 + 2));

// var user = {username: "sam", password: "123abc"};
// function login(username, password){
//   //check credentials
// }