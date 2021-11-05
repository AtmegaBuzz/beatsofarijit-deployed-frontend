import React from "react";
import styles from "./App.module.css";


//  components imports
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

export default function Home(){

  return(
    <div className={styles.App}>
      <Navbar/>
      <Body/>

      <Footer/>


      
    </div>
  )
}