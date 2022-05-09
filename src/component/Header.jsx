import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <p className="log" style={{fontSize:"25px", fontWeight:"800"}}> Employee List</p>
            <div className="header-right">
                <Link to='/'>
                    <p style={{fontSize:"25px", fontWeight:"600" , marginLeft:"20px"}}>Home</p>            
                    </Link>
                <Link to='/add'>
                    <p style={{fontSize:"25px", fontWeight:"600" ,marginLeft:"20px"}}>Add User</p>

                </Link>
                
            </div>

        </div>
    )
}

export default Header