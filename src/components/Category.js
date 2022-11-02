import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import {GiNoodles,GiChopsticks} from "react-icons/gi"
import styled from "styled-components"
import {NavLink} from 'react-router-dom' 
import style from './style.module.css'


import React from 'react'

export default function Category() {
  return (
    <List>

      <NavLink className={style.Nab} to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink className={style.Nab} to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink className={style.Nab} to={'/cuisine/Thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink className={style.Nab} to={'/cuisine/Japanies'}>
        <GiChopsticks/>
        <h4>Japanies</h4>
      </NavLink>


    </List>
  )
}

const List =styled.div`
display:flex;
justify-content:centerr;
margin:2rem 0rem;
`;


    





