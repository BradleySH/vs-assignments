//  ERROR HANDLING
//  Keywords 
//  try
//  catch
//  throw
//  error

// try {
//     // try out code
//     //if an error is thrown (occur)

// }
// catch(err){
//     //handle the error
// }

    try {
        if(2 === 2){
    throw new Error("I am an error")

    }
        console.log("did I console log?");
    }
    catch(err){
        console.log(err);

    }
}


// finally {
//     console.log("I am running anyway");
// }