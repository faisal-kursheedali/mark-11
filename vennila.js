const dob= document.querySelector("#date-of-birth") 
const luckyNumber= document.querySelector("#lucky-number")
const btnCheck=document.querySelector("#check")


btnCheck.addEventListener("click",() => {
    //console.log("working")
    if (dob.value&&luckyNumber.value){//checking all the values are entered or not.
        const bDate= dob.value.replaceAll("-","")// Removing "-" from date.
        //console.log(bDate)
        const sum=sumFunction(bDate)
        //console.log(sum)
        if(sum % luckyNumber.value == 0){// Main logic of the prog.
        //console.log(" Your birthday is lucky")
            display("Your birthday is lucky🔥🔥🔥")
        }else{
        //console.log("Your birthday is not lucky")
            display("Your birthday is not lucky😒😒😒")
        }
    }else{
        display("Pls enter all the values🙄🙄🙄")
    }
    

});
function sumFunction(date){//this is the function to convert given date in string form to number and do sum of it.
    let sum = 0;
    for(let i=0; i< date.length;i++){
        sum= sum + Number(date.charAt(i));
        
    }
    return sum;
}
function display(msg){// this is the function to show final out put
    //console.log(msg)
    output.innerText = msg;
}