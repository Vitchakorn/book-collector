import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Category.css'
import BookImage from './BookImage';


function Category() {
    const [category, setCategory] = useState('ALL');

    const handleClick = (e) => {
        setCategory(e)
    }
      
    
  return (
    <div>
        <ul className="category-menu">
            <li className="category-item">
                <NavLink to='/books' className='nav-links' onClick={(e) => handleClick(e.currentTarget.textContent)} activeClassName='bar-active' exact>
                    ALL
                </NavLink>     
            </li>
            <li className="category-item">
                <NavLink to='/books/fiction' className='nav-links' onClick={(e) => handleClick(e.currentTarget.textContent)} activeClassName='bar-active' exact>
                    FICTION
                </NavLink>  
            </li>
            <li className="category-item">
                <NavLink to='/books/non-fiction' className='nav-links' onClick={(e) => handleClick(e.currentTarget.textContent)} activeClassName='bar-active' exact>
                    NON-FICTION
                </NavLink>  
            </li>
            <li className="category-item">
                <NavLink to='/books/history' className='nav-links' onClick={(e) => handleClick(e.currentTarget.textContent)} activeClassName='bar-active' exact>
                    HISTORY
                </NavLink>  
            </li>
            <li className="category-item">
                <NavLink to='/books/horror-Thil' className='nav-links' onClick={(e) => handleClick(e.currentTarget.textContent)} activeClassName='bar-active' exact>
                    HORROR & THILLER
                </NavLink>  
            </li>
            <li className="category-item">
                <NavLink to='/books/comic-graphicnov' className='nav-links' onClick={(e) => handleClick(e.currentTarget.textContent)} activeClassName='bar-active' exact>
                    COMIC & GRAPHIC NOVEL
                </NavLink>  
            </li>
            <li className="category-item">
                <NavLink to='/books/education' className='nav-links' onClick={(e) => handleClick(e.currentTarget.textContent)} activeClassName='bar-active' exact>
                    EDUCATION
                </NavLink>  
            </li>
            <li className="category-item">
                <NavLink to='/books/politic' className='nav-links' onClick={(e) => handleClick(e.currentTarget.textContent)} activeClassName='bar-active' exact>
                    POLITIC
                </NavLink>  
            </li>
        </ul>
        <div className="categoy-text">
            <h1>{category}</h1>
        </div>
        <div className="books-container">
            < BookImage/>
        </div>
        
    </div>
  )
}

export default Category