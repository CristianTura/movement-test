import React, { useContext } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../../assets/images/logo.png"
import { AppContext } from '../../../context/AppContext';

const Navbar = () => {
  const { user, setUser } = useContext(AppContext);

  const sendLogOut = () => {
    setTimeout(() => {
      setUser({});
    }, 500);
  }

  console.log(user)

  return (
    <nav className='d-flex justify-content-between px-5 align-items-center b-botom-nav pb-2 pt-1 mb-3'>
      <img src={logo} alt="Prisma Digital" />
      {
        user?.login && 
          <LogoutIcon className='click-hover color-primary' onClick={ sendLogOut } />
      }
    </nav>
  )
}

export default Navbar