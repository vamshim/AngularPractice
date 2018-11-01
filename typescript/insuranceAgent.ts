class InsuranceAgent{

    public _agentCode: number;
    public _agentName: string;

    constructor(agentCode:number, agentName:string){
        this._agentCode = agentCode;
        this._agentName = agentName;
    }

    toString(){
        return `${this._agentName},${this._agentCode}`;
    }

    set agentCode(agentCode:number){
        this._agentCode = agentCode;
    }
    set agentName(agentName:string){
        this._agentName = agentName;
    }

    get agentCode(){
        return this._agentCode;
    }
    get agentName(){
        return this._agentName;
    }

}

let vamshi = new InsuranceAgent(2473339,'Vamshi');
console.log(vamshi);