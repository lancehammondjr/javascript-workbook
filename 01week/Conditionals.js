console.log("start program");

//write a fuction that takes in 3 variable
//and checks if they are all strings


function areStrings(thing1, thing2, thing3){
    // code to excute my logic
    console.log("thing1 =", thing1);
    console.log("thing2 =", thing2);
    console.log("thing3 =", thing3);

    let type1 = typeof thing1;
    let type2 = typeof thing2;
    let type3 = typeof thing3;

    //if all 3 type are strings then print out "They are all strings"
    if(
        type1 === "string" &&
        type2 === "string" &&
        type3 === "string"
    ){
        console.log("they are not all string");  
    }
    else{
        console.log("they are not all string");
    }
}

areStrings( 4, "Lance", null)
console.log("end program");


function isPassing(grade){
    if(grade >= 70){
        return true;
    }
    else{
        return false;
    }
}