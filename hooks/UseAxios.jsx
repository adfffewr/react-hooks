import React , { useState , useEffect , useRef } from 'react';
import axios from 'axios';

const useAxios = (opts , axiosInstance = axios) => {
    const [state , setState] = useState({
        loading : true,
        error : null,
        data : null
    });
    const [trigger , setTrigger] = useState(0);
    if(!opts.url) {
        return;
    }
    const refetch = () => {
        setState({
            ...state,
            loading : true
        });
        setTrigger(Date.now())
    }
    useEffect( () => {
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading : false,
                data
            })
        }).catch(error => {
            setState({ ...state, loading: false, error });
        });
    }, [trigger])
    return {...state , refetch}
}

const UseAxios = () => {
    const {loading ,data , error , refetch} = useAxios({ url: "https://yts-proxy.now.sh/list_movies.json?sort_by=rating" })
    console.log(`loading : ${loading} , data : ${JSON.stringify(data)} , error : ${error}`)
    return(
        <>
            <h1>UseAxios</h1>
            <h2>{loading ? "로딩중" : "로딩완료" }</h2>
            <button onClick={refetch}>refetch</button>
        </>
    );
}

export default UseAxios;