import './header.css';
import carritopng from '../../multimedia/carrito.png';
import loginpng from "../../multimedia/Login.png";
import {Link} from 'react-router-dom';
import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
import { useEffect } from "reat";
import { setup } from "../ia/ia";

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

export default function Header() {
  useEffect(() => {
    setup()
  }, [])
    return (
        <div className="body_header">
            <ul className="menu">
            <div className="barnav">
                
                <li><a href="" className="Home_Barnav">Home </a></li>
                <li><a href="" className="Menu_Barnav">Menu</a></li>
                <li><a href="" className="staff_Barnav">Staff Catering</a></li>
            
            </div>    
        
    
            <div className="iconos">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase>
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    </StyledInputBase>
                </Search>
                <li className="liDerecha"><Link to="/carrito"><img src={carritopng} alt="" className="carritoImg" /></Link></li>
                <li className="liDerecha"><Link to="/login"><img src={loginpng}alt="" className="loginImg" /></Link></li>
            </div>
        
        

        </ul>
        </div>
    )
}