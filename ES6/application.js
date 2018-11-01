var LifeInsurance = require('./insurance');

class Application {
    static main(){
const ramesh = new LifeInsurance(301,'vdsi',45000);
console.log(ramesh.toString());
console.log(ramesh.policyHolderName);
const Vamshi = new LifeInsurance(302,'Vamshi',450000);
const policyList = [ramesh,Vamshi] ;

for(var i=0; i<policyList.length;i++){
    console.log(policyList[i].toString());
}
console.log(i);

for(let ii=0; ii<policyList.length;ii++){         //let is local variable in Es6
    console.log(policyList[ii].toString());
}
//console.log(ii);
}
}
Application.main();
