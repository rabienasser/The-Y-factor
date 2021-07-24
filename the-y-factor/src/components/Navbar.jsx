import React from 'react'
// Styled
import styled from 'styled-components'
// React Router Dom
import {Link} from 'react-router-dom'
// Logo
import logo from '../imgs/logo.png'

function Navbar() {
    return (
        <StyledNav>
                <img className="logo" src={logo} alt="" />
            <ul>
                <li className='list-item'>Home</li>
                <li className='list-item'>Mission</li>
                <li className='list-item'>Contact</li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 10rem;
    background: var(--light-color);
    /* position: sticky;
    top: 0;
    z-index: 10; */
    a {
        color: var(--dark-grey);
        text-decoration: none;
    }
    ul {
        display: flex;
    }
    li {
        list-style: none;
        padding-left: 10rem;
        position: relative;
        color: var(--dark-grey);
    }
    .logo {
        height: 4rem;
        width: 9.5rem;
    }
    .list-item {
        font-size: 1.3rem;
    }
    `
export default Navbar
