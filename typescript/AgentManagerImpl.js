"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentManagerImpl {
    constructor() {
        this.agentList = [];
    }
    addAgent(agent) {
        this.agentList.push(agent);
        return agent.id;
        //throw new Error("Method not implemented.");
    }
}
let vamshi = new AgentManagerImpl();
vamshi.addAgent({ id: 101, name: 'vamshi', mobileNumber: 9959412417, category: 'CSLT' });
vamshi.addAgent({ id: 102, name: 'vamshi12', mobileNumber: 995941241127, category: 'CSLT' });
vamshi.addAgent({ id: 103, name: 'vamshi3', mobileNumber: 78941241127, category: 'CSLT' });
vamshi.agentList.forEach(element => {
    console.log(element.name);
});
