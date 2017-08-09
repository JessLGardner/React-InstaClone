import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: #FFFFF1;
  padding: 30px;
  border-bottom: 1px solid rgba(0,0,0,.2);
`;

const SearchStyle = styled.div`
`;

const IconStyle = styled.div`
  width: 25%
  display: flex;
  justify-content: space-around;
  `;


class Navbar extends Component{
  render(){
    return (
      <NavStyle>

        <div>
          <h3><FaInstagram /> | Instaclone</h3>
        </div>

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


export default Navbar



// const Nav = styled.div`
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 26px 5vw;
//   width: 90vw;
//   height: 25px;
//   border-bottom: 1px solid rgba(0,0,0,.0975);

//   p{
//     font-size: 1.75rem;
//     font-family: 'Oleo Script', cursive;
//     margin: 0;
//     svg{
//       margin-bottom: 5px;
//     }
//   }
// `

// const SearchContainer = styled.div`
//   background: #fafafa;
//   border: 1px solid #dbdbdb;
//   width: 25%;
//   padding: 7px;
//   border-radius: 3px;
//   color: #999;
//   svg{
//     margin-bottom: 5px;
//   }
//   input{
//     border: none;
//     font-weight: 300;
//     background: transparent;
//     text-align: center;
//   }
// `;

// const IconsContainer = styled.div`
//   width: 25%;
//   display: flex;
//   justify-content: space-around;
// `;

// class Navbar extends Component{
//   render(){
//     return (
//       <Nav>
//         <p><FaInstagram /> | Instaclone</p>
//         <SearchContainer>
//           <FaSearch/><input type="text" placeholder="Search"/>
//         </SearchContainer>
//         <IconsContainer>
//           <FaCompass size={28} />
//           <FaHeartO size={28} />
//           <FaUser size={28} />
//         </IconsContainer>
//       </Nav>
//     );
//   }
// }