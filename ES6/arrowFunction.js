var LifeInsurance = require('./insurance');
const ramesh = new LifeInsurance(301,'vdsi',45000);
const Vamshi = new LifeInsurance(302,'Vamshi',450000);

let policyList = [ramesh,Vamshi] ;

policyList.forEach(eachPolicy => console.log(eachPolicy.toString()));

let nameList = policyList.map(eachPolicy => eachPolicy.policyHolderName);
console.log(nameList);

let amountList = policyList.map(policy => policy.policyAmount);

function showPremium(policyAmount = 2000){
    console.log(policyAmount *.20);
    return policyAmount *.20;
}

showPremium(amountList[0]);
showPremium(amountList[1]);
showPremium();

function printPremium(...policyList){
    policyList.forEach(eachPolicy => {
        showPremium(eachPolicy.policyAmount);
    });
}

printPremium(Vamshi);
printPremium(Vamshi,'Vamshi1','Vamshi2');