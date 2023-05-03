import React from "react";
import { Nav, NavLink, NavMenu } from "./navbarstyle";
import UserIcon from "../userIcon";

const Navbar = () => {
    return (
        <>
            <Nav>
                <UserIcon />
                <NavMenu>
                    <NavLink to="/Login">Login</NavLink>
                    <NavLink to="/Landing">Landing</NavLink>
                    {/* <NavLink to="/Productview">Product View</NavLink> */}
                    <NavLink to="/Makeaccount">Account</NavLink>
                    <NavLink to="/Checkout">Checkout</NavLink>
                    <NavLink to="/Admin">Admin</NavLink>
                    <NavLink to="/Admininventory">Admin inventory</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
