import {useRef, useState} from "react"
import {FaBars,FaTimes} from "react-icons/fa"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"
const NavBar=()=>{
    const ref=useRef()

    const [icon,setIcon]=useState('close')

    const showNavbar=()=>{
        ref.current.classList.toggle('responsive_nav')
        if(ref.current.classList[1]==='responsive_nav'){
            setIcon('open');
        }
        else{
            setIcon('close')
        }
    }
    return (
        <header className="nav_comp">
            <h3>Logo</h3>
            <nav className="menu_items" ref={ref}>
                <Link to="#">Home</Link>
                <Link to="#">Products</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="#">Cart</Link>
            </nav>
            {icon==='close'?<button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>:<button className="nav-btn close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>}
        </header>
    )
}

export default NavBar