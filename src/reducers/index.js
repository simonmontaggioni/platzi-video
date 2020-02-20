const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_FAVORITE':
            const repeatedItem = state.myList.find ( item => item.id == action.payload.id)
            if ( repeatedItem ) {
                console.log( `the item ${ repeatedItem.id } already exits in the list`);
                return state;
            };
            return {
                ...state,
                myList: [
                    ...state.myList,
                    action.payload
                ]
            };

        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter( items => items.id !== action.payload )
            };

        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.userData
            };
    
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.userData
            };

        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.userData
            };
    
        default:
            return state;
    }

};

export default reducer;