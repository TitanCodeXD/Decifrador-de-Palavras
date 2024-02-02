//React Imports
import React from 'react'
import { NavLink } from 'react-router-dom';

//CSS
import styles from './Navbar.module.css';

//Image
import Lupa from '../../img/Lupa3.png';

const Navbar = () => {


  return (

    <nav className = {styles.navbar}>
        <NavLink to = "/" className = {styles.brand}><span>D</span>eci<span>F</span>rator <img src = {Lupa} alt = "Lupa" height="40px" width="40px"></img></NavLink>
        <ul className = {styles.links_list}> 
            <li>
        <NavLink to = "/" className={({isActive}) => (isActive ? styles.active : '')} >Geral</NavLink>
            </li>

            <li>
        <NavLink to = "/alimentos" className={({isActive}) => (isActive ? styles.active : '')} >Alimentos</NavLink>
            </li>

            <li>
        <NavLink to = "/animais" className={({isActive}) => (isActive ? styles.active : '')} >Animais</NavLink>
            </li>

            <li>
        <NavLink to = "/objetos" className={({isActive}) => (isActive ? styles.active : '')} >Objetos</NavLink>
            </li>

            <li>
        <NavLink to = "/verbos" className={({isActive}) => (isActive ? styles.active : '')} >Verbos</NavLink>
            </li>

            {/* <li>
        <NavLink to = "/lista" className={({isActive}) => (isActive ? styles.active : '')} >Lista Geral</NavLink>
            </li> */}

            <li>
        <NavLink to = "/sobre" className={({isActive}) => (isActive ? styles.active : '')} >Sobre</NavLink>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar