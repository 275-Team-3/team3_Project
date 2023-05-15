import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admininventory from "./components/admininventory/admininventory";
import Checkout from "./components/checkout/checkout";
import Landing from "./components/landingpage/landing";
import Login from "./components/loginpage/loginpage";
import Makeaccount from "./components/makeaccount/makeaccount";
import Navbar from "./components/navbarcomponent/navbar";
import Admin from "./components/adminlogin/admin";
import Cart from "./components/cartPage/cart";
import { Fullfilled } from "./components/orderFulfilled/orderFulfilled";
function App(): JSX.Element {
    return (
        <div className="App">
            <Router basename="/team3_Project">
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/Landing" element={<Landing />} />
                    {/* <Route path="/Productview" element={<Productview />} /> */}
                    <Route path="/Makeaccount" element={<Makeaccount />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/Admin" element={<Admin />} />
                    <Route path="/Fullfilled" element={<Fullfilled />} />
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
