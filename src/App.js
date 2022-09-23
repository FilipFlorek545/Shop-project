import React from 'react'
import './App.css';
import {useEffect, useState} from "react";
import {getProducts} from "./helpers/getProducts";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Men, Woman, Kids} from "./components/pages/index"


function App() {

    const [list, setList] = useState([])

  useEffect(() => {
    let mounted = true;
    getProducts()
        .then(items => {
          if(mounted) {
            setList(items)
          }
        })

    return () => mounted = false;
  }, [])



  return (
    <div className="App">
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/men">Men</Link>
            <Link to="/woman">Woman</Link>
            <Link to="/kids">Kids</Link>
        </nav>
            <Routes>
                <Route path="/" element={<h2>Hello</h2>}></Route>
                <Route path="/men" element={<Men dataProducts = {list.men} />}></Route>
                <Route path="/woman" element={<Woman dataProducts = {list.woman} />}></Route>
                <Route path="/kids" element={<Kids dataProducts = {list.kids} />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
