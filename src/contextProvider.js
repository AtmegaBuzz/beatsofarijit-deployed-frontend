import React,{useState, createContext} from "react";


export const FilterContext = createContext({});



export function FilterProvider(props){

    const [filter,setFilter] = useState("new")
    const [search,setSearch] = useState("")
    
    

    return(
            <FilterContext.Provider value={[filter,setFilter,search,setSearch]}>
                {props.children}
            </FilterContext.Provider>
    );
}