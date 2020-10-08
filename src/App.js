import React from 'react'
import ChillCard from "../src/Component/chillcard";
import ChillMap from "../src/Component/chillmap";
import {BrowserRouter as Router ,Redirect,Route, useParams } from "react-router-dom";


export default function App() {
  

  

  return (
  <Router>
    <Route
          exact={true}
          path="/"
          component={() => (
            <Redirect to="/chillcard" />
          )}
        ></Route>
    <Route path= "/chillmap" component={ChillMap}></Route>
    <Route path= "/chillcard/:id" component = {ChillCard}></Route>
  </Router>
  )
  
}


