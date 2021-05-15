export const reducer = (state, action) => {
    switch (action.type){
        case 'SIGN_IN':
            return {
                ...state,
                isAuth: true,
                user: action.data.user,
                token: action.data.token
            };
        case 'LOG_OUT':
            return {
                ...state,
                isAuth: false,
                user: null,
                token: null
            };
        default:
            return state;
    }
};