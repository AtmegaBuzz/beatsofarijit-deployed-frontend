import React from "react";
import styles from "./navDown.module.css";

import {NavLink} from "react-router-dom"
import {domain} from "../../../App";

export default function NavDown(){

        
        //  hide navbar on scroll down
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            var navbar =  document.getElementById("navbar_down")
            // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
            if (currentScrollPos > 40) {
              navbar.style.visibility = "hidden";
              navbar.style.opacity = "0";
              document.getElementById("navbar").style.maxHeight = "15vh";
            } else {
                navbar.style.visibility ="initial"
                navbar.style.opacity = "1"
                document.getElementById("navbar").style.maxHeight = "25vh";
            }
          }

        
            


    return(

        <div id="navbar_down" className={styles.DownCont}>
            <div className={styles.Down}>
                <ul className={styles.DownList}>
                    <li className={styles.Li}>
                        <NavLink className={styles.NLi} activeClassName={styles.isActive} to="/home">
                            Home
                        </NavLink>
                        </li>
                    <li  className={styles.Li}>
                        <NavLink className={styles.NLi}  activeClassName={styles.isActive} to="/beats">
                            Beats  
                        </NavLink> 
                    </li>
                    <li  className={styles.Li}><NavLink className={styles.NLi}  activeClassName={styles.isActive} to="/playback">Playback</NavLink></li>    
                    <li  className={styles.Li}><a className={styles.NLi} href={domain+"contact"}>Contact</a></li> 
                </ul>
            </div>

        </div>


    );
}