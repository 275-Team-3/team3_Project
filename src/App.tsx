import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admininventory from "./components/admininventory/admininventory";
import Checkout from "./components/checkout/checkout";
import Landing from "./components/landingpage/landing";
import Login from "./components/loginpage/loginpage";
import Makeaccount from "./components/makeaccount/makeaccount";
import Navbar from "./components/navbarcomponent/navbar";
import Productview from "./components/productview/productview";

function App(): JSX.Element {
    fetch("https://dummyjson.com/products/category/mens-shoes")
        .then((res) => res.json())
        .then(console.log);

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Landing" element={<Landing />} />
                    <Route path="/Productview" element={<Productview />} />
                    <Route path="/Makeaccount" element={<Makeaccount />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route
                        path="/Admininventory"
                        element={<Admininventory />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
