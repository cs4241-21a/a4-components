const LoginReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('login', JSON.stringify({ token: action.payload }));
            return { ...state, token: action.payload };
            
        case 'LOGOUT':
            localStorage.setItem('login', JSON.stringify(null));
            return { ...state, token: null };

        default:
            break;
    }
}

export default LoginReducer;