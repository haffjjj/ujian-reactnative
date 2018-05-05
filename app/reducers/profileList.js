initialState = {
    profile:{
        name:'',
        department: '',
        univeristy: '',
        from: '',
        description: '',
        higlights: []
    }
}

const profileListReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ALL_PROFILE_LIST_PENDING':
            return state
        case 'ALL_PROFILE_LIST_FULFILLED':
            return {...state, prof:action.payload.data[0]}
        case 'ALL_PROFILE_LIST_REJECTED':
            return state
        default:
            return state
    }
}

export default profileListReducer