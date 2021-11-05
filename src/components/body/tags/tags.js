import React from "react";
import styles from "./tags.module.css";

// material ui impoets
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Tags({TagName,downloadLink,toDownloadBool}){

    

    return(
        <>
        
           { toDownloadBool
                ? <a className={styles.Tags} href={`${downloadLink}`} download>
                    <GetAppIcon id={styles.Download}/>
                    <p>{TagName}</p>
                </a>

                : <a className={styles.Tags} onClick={()=>alert("Contact us to download this beat")} download>
                    <GetAppIcon id={styles.Download}/>
                    <p>{TagName}</p>
                </a>

        }

        </>

    );
}