import React, { useEffect,useDispatch, useState, useContext } from "react";
import styles from "./playbackRoute.module.css"

import RenderBeats from "../body/beatsSection/rederBeats";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import { FilterContext } from "../../contextProvider";
import { domain } from "../../App";


export default function PlaybackRouter(){

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
        const response = await fetch(domain+"api/getbeats/playback")
        const data = await response.json()
        setBeats(data)
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
        <div className={styles.BeatsOnlyCont}>
            <Navbar/>
            <div className={styles.BeatsOnly}>
                <h1 id={styles.title}>Play and Download PlayBacks</h1>
                <RenderBeats beats={filteredBeats} noBeats={noBeats} type={"playback"}/>
            </div>
            <Footer/>
        </div>
    );

}