import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link>
                <Link to='/recipes' style={{ textDecoration: 'none' }}><li>Recipes</li></Link>
                <Link to='/reviews' style={{ textDecoration: 'none' }}><li>Reviews</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
