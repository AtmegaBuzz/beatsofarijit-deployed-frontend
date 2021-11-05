import React,{useContext} from "react";
import styles from "./navUpper.module.css";

// con text api
import { FilterContext } from "../../../contextProvider";


// material ui imports
import SearchIcon from '@material-ui/icons/Search';

export default function NavUpper(){

    const [filter,setFilter,search,setSearch] = useContext(FilterContext);


    const addSearch = (e)=>{
        setSearch(e.target.value)
    }

    const SaveFilterValue = (e)=>{
        setFilter(e.target.value)
    }

    
    return(

        <div className={styles.UpperCont}>

            <div className={styles.LeftSec}>
                <ul className={styles.LeftList}>
                    <li id={styles.SearchDiv}>
                        <SearchIcon id={styles.Search}/>
                        <input onChange={(e)=>{addSearch(e)}} type="text" placeholder="What are you looking for?"/>
                        <select name="songfilter" onChange={(e)=>SaveFilterValue(e)} id={styles.filterSongs}>
                            <option value="new">New</option>
                            <option value="old">Oldest</option>
                            <option value="free">Free</option>
                        </select>
                    </li>
                </ul>
            </div>  

                
            <div  className={styles.RightSec}>
                <ul className={styles.RightList}>
                    <li>Login</li>
                    <li>SignUp</li>
                </ul>
            </div>
 
        </div>


    );
}