import React from "react";
import styles from "./App.module.css";
import {Switch,Route,Redirect} from "react-router-dom"

// context api
import { FilterProvider } from "./contextProvider";

//  components imports
import Home from "./Home";  
import Beats from "./Routes/Beats";
import Playback from "./Routes/Playback";

export const domain = "https://beatsofarijit.azurewebsites.net/"

export default function App(){

  return(

    <FilterProvider>
      <div className={styles.App}>
        

        <Switch>
          
          

          <Route exact path="/home">
              <Home/>
          </Route>

          <Route exact path="/beats">
              <Beats/>
          </Route>

          <Route exact path="/playback">
              <Playback/>
          </Route>

          <Route exact path="/">
                  <Redirect to="/home"/>
          </Route>


        </Switch>

      </div>
    </FilterProvider>

  )
}