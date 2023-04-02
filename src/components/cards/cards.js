
import { useState,useContext,createContext,useEffect } from "react";

const AppContext = createContext();

const AppProvider=({children})=>{
    const [data,setData]=useState([])

    const fetchdata = async()=>{
        try{
            const resp = await fetch(`https://rickandmortyapi.com/api/character`).then(resp => resp.json()).then(posts => setData(posts.results))
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchdata();
    },[]);
    return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };


