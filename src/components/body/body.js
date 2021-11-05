import React, {useState,useEffect, useContext} from 'react';
import styles from "./body.module.css"


// components
import Crousel from './crouselmiddle/crousel';
import RenderBeats from './beatsSection/rederBeats';

import { FilterContext } from "../../contextProvider";
import { domain } from '../../App';

export default function Body(){

    const [beats,setBeats] = useState([])
    const [filteredBeats,setFilteredBeats] = useState([])
    const [filter,setFilter,search,setSearch] = useContext(FilterContext)
    const [noBeats,setNoBeats] = useState(false)

    const newSorter = (arr)=>{
        return arr.reverse()
    }

    const freeSorter = (arr)=>{
        let freeArr = []
        for(let song of arr){
            if(song.todownload===true){
                freeArr.push(song)
            }

        }

        return freeArr
    }

    const getBeats = async ()=>{
        const response = await fetch(domain+"api/getbeats")
        const data = await response.json()
        setBeats(data)
        if(data.length===0){
            setNoBeats(true)
        }
        if(filter==="new"){
            setFilteredBeats(newSorter(data))
        }
        else if(filter==="old"){
            setFilteredBeats(data)
        }
        else if(filter==="free"){
            setFilteredBeats(freeSorter(data))
        }
    }

    const searchFilteredBeats = (search)=>{
        const beatsArr = []
        for(let beat of beats){
            if((beat.songName).toLowerCase().includes(`${search}`)){
                beatsArr.push(beat)
            }

        }
        return beatsArr
    }


    //  run only when user adds a filter
    useEffect(()=>{
        getBeats()
    },[filter])

    // run only when user search something
    useEffect(()=>{
        
        setFilteredBeats(beats);
        setFilteredBeats(searchFilteredBeats(search))

    },[search,beats])

    return(

        <div className={styles.Body}>
            <Crousel/>
            <h1 id={styles.Heading}>Song, Beat and Video Collections</h1>
            <RenderBeats beats={filteredBeats} noBeats={noBeats} type={"playback or beats"}/>

        </div>

    );
}