import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

export default function HomeLogo() {
  return (
     <Home to={'/'}>
       <h1> FavRecipe </h1> 
        </Home>
        
  )
}

const Home = styled(Link)`
text-decoration: none;
position: absolute;
left: 20rem;

h1{
    color: black;
    font-weight: bold;
}
`




