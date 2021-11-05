import React, { useState } from "react";
import styles from "./renderBeats.module.css";


import Beat from "./Beat/beat";

function* Gen(){
    let i = 0;
    while(true){
        yield i++
    }
}

const keyGen = Gen();

export default function RenderBeats({beats,type,noBeats}){



    return( 
        <>
            <div className={styles.BeatsCont}>

                     {noBeats
                        ? <p style={{color:"red"}}>no {type} Available!</p>
                        : beats.map(beatsdata=>{
                            
                             return <Beat key={keyGen.next().value} data={beatsdata}/>
                         })
                     }
                
                
                
            </div>
        </>
    );
}