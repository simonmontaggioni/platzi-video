export const setFavorite = ( payload ) => ({
    type: 'SET_FAVORITE',
    payload,
});

export const deleteFavorite = ( payload ) => ({
    type: 'DELETE_FAVORITE',
    payload,
});

export const loginRequest = ( userData ) => ({
    type: 'LOGIN_REQUEST',
    userData,
});

export const logoutRequest = ( userData ) => ({
    type: 'LOGOUT_REQUEST',
    userData,
});

export const registerRequest = ( userData ) => ({
    type: 'REGISTER_REQUEST',
    userData,
});

