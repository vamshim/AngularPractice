export interface Agent{
    id:number;name:String;mobileNumber:number;category:string;
}

interface Agent1{
    id:number;name:String;mobileNumber:number;category?:string;    // ? meansoptional parameter category 
}

function printAgent(agent:Agent){
    console.log(agent.name);
}

function printAgent1(agent:Agent1){
    console.log(agent.name);
}

let vamshi1:Agent ={id:101,name:'vamshi',mobileNumber:9959412417,category:'CSLT'};
let vamshi2:Agent1 ={id:101,name:'vamshi123',mobileNumber:9959412417};

printAgent(vamshi1);
printAgent1(vamshi2);