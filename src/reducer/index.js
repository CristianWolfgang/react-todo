const ACTIONS = {
    add:Symbol(),
    delete:Symbol()
},
reducer = (state,action)=>{
    if(action.type===ACTIONS.add){
        const {obj} = action;
        return {
            ...state,
            [obj.activity]:obj
        };
    }else if(action.type===ACTIONS.delete){
        const myState = JSON.parse(JSON.stringify(state));
        delete myState[action.activity];
        return myState;
    };
    throw Error('Unknown action: ' + action);

};
export {ACTIONS,reducer}