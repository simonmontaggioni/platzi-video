import { useState, useEffect } from 'react';

const useInitialState = ( APIURL ) => {
    const [ initialState, setInitialState ] = useState([]);

    useEffect( () => {
        fetch( APIURL )
            .then( response => response.json() )
            .then( data => setInitialState( data ) );
    }, []);

    return initialState;
}

export default useInitialState;