import React from "react";
import styles from "./footer.module.css";

//  components imports
import SocialMediaFooter from "./socialmedia/socialMedia";
import Copyright from "./copyright/copyright";

export default function Footer(){

    
    return(

        <div className={styles.FooterCont}>
            <SocialMediaFooter/>
            <Copyright/>
    
        </div>

    );

}

