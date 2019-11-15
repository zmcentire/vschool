import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className = 'navbar'>
           <Link to ="/">Home</Link>
           <Link to ='/about'>About</Link>
           <form>
            <select name="jumpmenu" id="">
               <option>Categories</option>
               <option value="">On Adversity</option>
               <option value="">On Mortality</option>
               <option value="">On Mental Wellness</option>
            </select>
           </form>
        </div>
    )
}

export default NavBar