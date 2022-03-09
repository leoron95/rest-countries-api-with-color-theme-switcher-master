import { useEffect, useState } from "react"
import { getCountries } from "../helpers/getCountries";

export const useFetchCountries = ( ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getCountries()
            .then((data) => {
                setState({
                    data: data,
                    loading: false
                })
            })
    }, [])

    return state; // {data:[], loading: true };
}
