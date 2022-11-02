import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import style from './style.module.css'

import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [input,setInput]=useState('')
    const navigate= useNavigate()

    const submitHandler =(e)=>{
        e.preventDefault()
         navigate('/searched/'+input)
    }
  return (
    <form className={style.FORM} onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input onChange={(e)=>{
                setInput(e.target.value)
            }} type="text" value={input} />
        </div>
        
    </form>
  )
}


