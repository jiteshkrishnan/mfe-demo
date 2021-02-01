import React from 'react'
import { Link } from "@reach/router";

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/contact" >Contacts</Link>
            <Link className="navbar-brand" to="/todos" >Todos</Link>
        </nav>
     )
}

export default Nav;