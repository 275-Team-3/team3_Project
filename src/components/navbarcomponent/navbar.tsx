import React from "react";
import { Nav, NavLink, NavMenu } from "./navbarstyle";
import UserIcon from "../userIcon";

const Navbar = () => {
    return (
        <>
            <Nav data-testid="Navbar">
                <UserIcon />
                <NavMenu data-testid="NavMenu">
                    <NavLink role="nav" to="/Login" data-testid="LoginNav">
                        Login
                    </NavLink>
                    <NavLink role="nav" to="/Landing" data-testid="LandingNav">
                        Landing
                    </NavLink>
                    {/* <NavLink to="/Productview">Product View</NavLink> */}
                    <NavLink
                        role="nav"
                        to="/Makeaccount"
                        data-testid="AccountNav"
                    >
                        Account
                    </NavLink>
                    <NavLink role="nav" to="/Cart" data-testid="CartNav">
                        Cart
                    </NavLink>
                    <NavLink
                        role="nav"
                        to="/Checkout"
                        data-testid="CheckoutNav"
                    >
                        Checkout
                    </NavLink>
                    <NavLink role="nav" to="/Admin" data-testid="AdminNav">
                        Admin
                    </NavLink>
                    <NavLink
                        role="nav"
                        to="/Admininventory"
                        data-testid="AdminInvNav"
                    >
                        Admin inventory
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
