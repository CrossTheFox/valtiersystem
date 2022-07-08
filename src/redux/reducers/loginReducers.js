const initialState = {
    isLogged: localStorage.getItem('token') ? true : false,
};

const authReducer = (state = initialState, action) => {

    if(action.type){
        return {
            ...state,
            ...action.payload,
        };
    } else{
        return state;
    }
}

export default authReducer;
