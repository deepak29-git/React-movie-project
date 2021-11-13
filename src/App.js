import React, { useEffect, useState } from "react";
import "./App.css"
import Header from "./Component/Header";
import Summary from "./Component/Summary";
import { Route, Routes } from 'react-router-dom'

import Home from "./Component/Home"

export default function App() {

  const [apiData, setApiData] = useState("");
  var serverlUrl = "https://api.tvmaze.com/search/shows?q=all"
  useEffect(() => {
    fetch(serverlUrl).then(response => response.json())
      .then(data => {
        setApiData(data)
      })
  }, [serverlUrl])

  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" exact element={<Home list={apiData} />} />
        <Route path="/data/:id" element={<Summary list={apiData} />} />
      </Routes>
      </div>
   
  )
}

