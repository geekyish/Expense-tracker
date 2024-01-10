import React, { useState } from 'react'
import './topfold.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses';
const TopFold = () => {
    const [query, setQuery]=useState("");
    const dispatch=useDispatch("");
    const handleQuery=(e)=>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }
  return (
    <div className='topfold'>
        {window.location.pathname==='/'?(<div className="home-topfold">
        <div className="searchbar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input 
        placeholder='Search for expenses' 
        value={query} 
        onChange={(e)=>handleQuery(e)} 
        />
        </div>
        <Link to='/add-expense'>
        <div className='add-button'>
        <i class="fa-solid fa-plus"></i>
        <label>Add</label>
        </div></Link>
        
        <Link to='/Register'>
        <div className='add-button'>
        <i class="fa-solid fa-plus"></i>
        <label>Register</label>
        </div></Link>

        <Link to='/Login'>
        <div className='add-button'>
        <i class="fa-solid fa-plus"></i>
        <label>Login</label>
        </div></Link>
        
    </div>): (
    <div className='add-topfold'>
        <Link to='/'>
        <div className="add-topfold-button">
        <i class="fa-solid fa-arrow-left"></i>
        <label>Back</label>
        </div>
        </Link>
        <Link to='/'>
        <div className="add-topfold-button">
        <i class="fa-solid fa-xmark"></i>
        <label>Cancel</label>
        </div>
        </Link>
        
        
        
    </div>)}
    
    </div>
  )
}

export default TopFold