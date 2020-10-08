import React from 'react'
import ChillCard from "../src/Component/chillcard";
import ChillMap from "../src/Component/chillmap";
import chillcardByid from "../src/Component/chillcardByid";
import {BrowserRouter as Router ,Redirect,Route, useParams } from "react-router-dom";


export default function App() {
  

  

  return (
  <Router>
    {/* <Route
          exact={true}
          path="/"
          component={() => (
            <Redirect to="/chillcard" />
          )}
        ></Route> */}
    <Route path= "/" component={ChillCard}></Route>
    <Route path= "/chillmap" component={ChillMap}></Route>
    {/* <Route path= "/chillcard" component = {ChillCard}></Route> */}
    <Route path= "/chillcard/:id" component = {chillcardByid}></Route>

  </Router>
  )
  
}


