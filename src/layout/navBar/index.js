import React from "react"
import NavHead from './navHead'
import NavFoot from './navbarfoot'
import Aux from '../../services/auxiliary'


const NavBar = () => {

    return (
    <Aux>
        <NavHead />
        <NavFoot home ={true}/>
    </Aux>
    );
}

export default NavBar;
