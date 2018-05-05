initialState = {
    profiles:[]
}

const profileAllReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ALL_PROFILE_PENDING':
            return state
        case 'ALL_PROFILE_FULFILLED':
            return {...state, profiles:action.payload.data}
        case 'ALL_PROFILE_REJECTED':
            return state
        default:
            return state
    }
}

export default profileAllReducer