import React from "react";
import styles from "./navbar.module.css";
// components import

import NavUpper from "./navUpper/navUpper";
import NavDown from "./navDown/navDown";

export default function Navbar(){



    return(

        <div id="navbar" className={styles.NavbarCont}>
            <div className={styles.Navbar}>
                <NavUpper/>
                <NavDown/>
            </div>
        </div>

    );

}