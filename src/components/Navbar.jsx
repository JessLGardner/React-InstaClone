import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: #FFFFFF;
  padding: 10px 40px;
  border-bottom: 1px solid rgba(0,0,0,.2);
    p{
    font-family: cursive;
    font-size: 30px;
    }
`;

const SearchStyle = styled.div`
  background: #FAFAFA;
  border: 1px solid rgba(0,0,0,.2);
  padding: 7px;
  color: #999;
  width: 20%;
  input{
    border: none;
    font-weight: 300;
    background: transparent;
    text-align: center;
  }
`;

const IconStyle = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  `;

class Navbar extends Component{
  render(){
    return (
      <NavStyle>

          <p><FaInstagram /> | Instaclone</p>
      
        <SearchStyle>
          <FaSearch/><input type="text"/>
        </SearchStyle>

        <IconStyle>
          <FaCompass size={28}/>
          <FaHeartO size={28}/>
          <FaUser size={28}/>
        </IconStyle>

      </NavStyle>
    );
  }
}


export default Navbar;