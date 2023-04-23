import {useRef, useState} from "react"
import {FaBars,FaTimes} from "react-icons/fa"
import "../styles/Navbar.css"
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
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">About us</a>
                <a href="">Contact</a>
                <a href="">Cart</a>
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