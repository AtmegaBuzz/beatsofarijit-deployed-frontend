import React,{useRef, useState} from "react";
import styles from "./beat.module.css";

import Tags from "../../tags/tags";

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';


export default function Beat({data}){


    const [songIsPlaying,setSongIsPlaying] = useState(false)

    

    const audioPlayer = useRef()

    const pause = ()=>{
        setSongIsPlaying(false)
        audioPlayer.current.pause()
    }

    const play =  ()=>{
        setSongIsPlaying(true)
        audioPlayer.current.play()
    }



    return(

        <div className={styles.Beat}>

            

            <div className={styles.Thumbnail}
                style={{
                    backgroundImage:`url(${data.songImage})`
                }}
            >
                <div id={styles.overlayPlay}>
                    {songIsPlaying
                        ? <PauseCircleOutlineIcon
                                onClick={pause}
                                id={styles.PausePlaybutton}/>
                        : <PlayCircleOutlineIcon 
                                onClick={play}
                                id={styles.PausePlaybutton}/>
                    }
               
                        
                    <audio controls ref={audioPlayer}>
                                <source src={data.audioFile} type="audio/ogg"/>
                    </audio> 
    
                </div>
            </div>

            <div className={styles.Description}>
                    <div className={styles.SongName}>
                        <p id={styles.Title}>{data.songName}</p>

                        <Tags
                         TagName={data.mediaType.toUpperCase()}
                         toDownloadBool={data.todownload}   
                         downloadLink={data.audioFile}
                        />
                    </div>
                    <div className={styles.Footer}>
                        <p>By: {data.author}</p>
                        <p>({data.postTime.slice(12,16)}) {data.postTime.slice(0,10)}</p>
                    </div>
            </div>
        </div>

    )
}