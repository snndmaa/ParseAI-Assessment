const AutoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_CORRECTION':
            return{
                ...state,
                corrections: action.payload
            }
        case 'AREATEXT_CHANGE':
            return{
                ...state,
                areaText: action.payload
            }
        case 'TEXTARRAY_CREATE':
            return{
                ...state,
                textArray: action.payload
            }
        
        default: 
            return state
    }
}

export default AutoReducer