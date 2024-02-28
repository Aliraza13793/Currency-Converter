#! usr/bin/env node
import inquirer from"inquirer"
let conversion={
    "PKR":{
        "PKR":1,
        "USD":0.0036,
    },
    "USD":{
        "USD":1,
        "PKR":279.5313,
    }
}
const answer:{
    from:"PKR"|"USD",
    To:"PKR"|"USD",
    amount:number,
}=await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices:["USD","PKR"],
        message: "Select your Currency",
    },
    {
        type:"list",
        name:'To',
        choices:["USD","PKR"],
        message:"Select your conversion currency"
    },
    {
        type:'number',
        name:"amount",
        message:'Enter your amount for convert'
    }
]);
const{from,To,amount}=answer;
if (from&& To && amount){
    let result=conversion[from][To]*amount;
    console.log(`your converstion from ${from} to ${To} is ${result}`)

}else{
    console.log("invalid")
}