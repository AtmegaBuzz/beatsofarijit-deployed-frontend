import React from 'react';
import styles from "./crousel.module.css";

import {domain} from "../../../App";

export default function Crousel(){



    return(
        <div className={styles.CrouselDiv}>
            <div className={styles.Crousel}
                style={
                    {
                        backgroundImage: `url(${domain}media/images/2021/09/04/bgimage.jpg)`
                        
                    }
                }
            >
                
            </div>
            <div className={styles.CrouselWritings}>
                <p id={styles.heading}>Beats of Arijit Saikia</p>
                <p id={styles.text}>
                    Exclusive Original Beats available for free
                    only on Beats or Ari.
                </p>
                <p id={styles.text}>
                    Download Now!
                </p>
            </div>
        </div>
    );
}